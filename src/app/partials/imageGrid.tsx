'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Import images.
import { shoot1, shoot2, shoot3, shoot4, shoot5, shoot6, shoot7 } from '../images/images';

interface ImageItem {
    src: any;
    alt: string;
    title: string;
    category: string;
}

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    };

    // Portfolio images - all 7 shoots.
    const images: ImageItem[] = [
        { src: shoot1, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot2, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot3, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot4, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot5, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot6, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot7, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
    ];

    // Auto-rotate carousel every 5 seconds, but pause on hover.
    useEffect(() => {
        // Don't auto-rotate if any image is being hovered
        if (hoveredIndex !== null) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    // Get the 3 visible slides based on current index.
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % images.length;
            slides.push({ ...images[index], originalIndex: index });
        }
        return slides;
    };

    const visibleSlides = getVisibleSlides();

    return (
        <div className="w-[95%] md:w-[90%] mx-auto py-8">
            {/* Carousel with 3 visible slides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-[70vh]">
                {visibleSlides.map((image, slideIndex) => {
                    const isCenterSlide = slideIndex === 1;
                    
                    return (
                        <motion.div
                            key={`slide-${slideIndex}`}
                            layout
                            initial={false}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.5    }
                            }}
                            whileHover={{ scale: isCenterSlide ? 1.02 : 1.05 }}
                            onHoverStart={() => setHoveredIndex(slideIndex)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`relative aspect-square md:aspect-auto overflow-hidden
                                 rounded-lg cursor-pointer border border-gray-200/30 dark:border-gray-700/30 bg-gray-700 ${
                                isCenterSlide 
                                    ? 'md:h-[70vh]'
                                    : 'md:h-[58vh] md:self-center'
                            }`}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={`image-${image.originalIndex}`}
                                initial={{ opacity: 0 }}
                                    animate={{ opacity: loadedImages.has(image.originalIndex) ? 1 : 0 }}
                                    exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                        fill
                                        className="object-cover"
                                    priority={slideIndex < 3}
                                        onLoadingComplete={() => handleImageLoad(image.originalIndex)}
                                />
                            </motion.div>
                            </AnimatePresence>
                            
                            {/* Gradient overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === slideIndex ? 1 : 0 }}
                                transition={{ duration: isCenterSlide ? 0.4 : 0.3 }}
                                className={`absolute inset-0 ${
                                    isCenterSlide 
                                        ? 'bg-gradient-to-t from-black via-black/30 to-transparent'
                                        : 'bg-gradient-to-t from-black via-black/50 to-transparent'
                                }`}
                            />
                            
                            {/* Featured badge for center slide */}
                            {isCenterSlide && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ 
                                        opacity: hoveredIndex === slideIndex ? 1 : 0,
                                        x: hoveredIndex === slideIndex ? 0 : -20
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full"
                                >
                                    <span className="text-xs font-medium text-black uppercase tracking-wider">Featured</span>
                                </motion.div>
                            )}
                            
                            {/* Text content */}
                            <motion.div
                                initial={{ y: isCenterSlide ? 100 : 50, opacity: 0 }}
                                animate={{ 
                                    y: hoveredIndex === slideIndex ? 0 : (isCenterSlide ? 100 : 50),
                                    opacity: hoveredIndex === slideIndex ? 1 : 0
                                }}
                                transition={{ duration: isCenterSlide ? 0.4 : 0.3, ease: "easeOut" }}
                                className={`absolute bottom-0 left-0 right-0 text-white ${
                                    isCenterSlide ? 'p-8' : 'p-4'
                                }`}
                            >
                                <p className={`uppercase tracking-wider text-gray-${isCenterSlide ? '200' : '300'} ${
                                    isCenterSlide ? 'text-sm mb-2' : 'text-xs mb-1'
                                }`}>
                                    {image.category}
                                </p>
                                <h3 className={`font-bold ${
                                    isCenterSlide ? 'text-3xl mb-2' : 'text-lg'
                                }`}>
                                    {image.title}
                                </h3>
                                {isCenterSlide && (
                                    <p className="text-gray-200">Click to view full gallery</p>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'w-8 bg-gray-800 dark:bg-gray-200' 
                                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}