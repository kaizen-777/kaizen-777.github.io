'use client';

import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Import images.
import { shoot1, shoot2, shoot3, shoot4, shoot5, shoot6, shoot7, omoide, missionBay, editedPortrait, karekare, plotting } from '../images/images';

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
    const [lastManualChange, setLastManualChange] = useState<number>(Date.now());
    const [direction, setDirection] = useState<number>(1); // 1 for forward, -1 for backward.
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const previousIndexRef = useRef<number>(0);

    // Detect mobile on mount and handle hydration
    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index));
    };

    const handleManualIndexChange = (index: number) => {
        // Calculate direction based on index change.
        const total = images.length;
        const forwardDistance = (index - currentIndex + total) % total;
        const backwardDistance = (currentIndex - index + total) % total;
        
        // Choose the shorter path.
        if (forwardDistance <= backwardDistance) {
            setDirection(1);
        } else {
            setDirection(-1);
        }
        
        previousIndexRef.current = currentIndex;
        setCurrentIndex(index);
        setLastManualChange(Date.now());
    };

    // Portfolio images - all 7 shoots.
    const images: ImageItem[] = [
        { src: shoot1, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: omoide, alt: 'Omoide Yakosho - Caught in the moment.', title: 'Omoide Yakosho', category: 'Travel' },
        { src: shoot2, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: plotting, alt: 'Plotting - Artistic composition.', title: 'Philosophical', category: 'Art' },
        { src: missionBay, alt: 'Evisu Outfit at Mission Bay', title: 'Fashion and Scenic', category: 'Portfolio' },
        { src: shoot3, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: editedPortrait, alt: 'Portrait - Enhanced beauty.', title: 'Portrait', category: 'Retouching' },
        { src: shoot4, alt: 'Mission Bay', title: 'Mission Bay', category: 'Portfolio' },
        { src: karekare, alt: 'Karekare Beach - Scenic view.', title: 'Karekare Beach - Scenic view.', category: 'Travel' },
        { src: shoot6, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
        { src: shoot7, alt: 'Portrait Photo', title: 'Photoshoot', category: 'Portfolio' },
    ];

    // Handle swipe gestures for mobile
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50;

        if (info.offset.x > swipeThreshold) {
            // Swiped right - go to previous
            setDirection(-1);
            previousIndexRef.current = currentIndex;
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
            setLastManualChange(Date.now());
        } else if (info.offset.x < -swipeThreshold) {
            // Swiped left - go to next
            setDirection(1);
            previousIndexRef.current = currentIndex;
            setCurrentIndex((currentIndex + 1) % images.length);
            setLastManualChange(Date.now());
        }
    };

    // Auto-rotate carousel every 5 seconds, but pause on hover or on mobile.
    useEffect(() => {
        // Don't auto-rotate if any image is being hovered or on mobile.
        if (hoveredIndex !== null || isMobile) return;

        const interval = setInterval(() => {
            setDirection(1); // Auto-rotation always goes forward.
            previousIndexRef.current = currentIndex;
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [hoveredIndex, lastManualChange, currentIndex, images.length, isMobile]);

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

    // Animation variants based on direction.
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    const mobileSlideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    // Show loading state until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="w-[95%] md:w-[90%] mx-auto py-4">
                <div className="relative min-h-[70vh] flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                </div>
            </div>
        );
    }

    // Mobile carousel view
    if (isMobile) {
        return (
            <div className="w-full mx-auto py-2">
                <div className="relative h-[70vh] overflow-hidden rounded-lg">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={`mobile-${currentIndex}`}
                            custom={direction}
                            variants={mobileSlideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30, mass: 0.5 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={handleDragEnd}
                            className="absolute inset-0 rounded-lg overflow-hidden"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <p className="uppercase tracking-wider text-gray-200 text-xs mb-2">
                                        {images[currentIndex].category}
                                    </p>
                                    <h3 className="font-bold text-2xl mb-2">
                                        {images[currentIndex].title}
                                    </h3>
                                    <Link href="/gallery">
                                        <p className="text-gray-200 text-sm">Tap to view full gallery →</p>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleManualIndexChange(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'w-8 bg-gray-800 dark:bg-gray-200'
                                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Desktop carousel view (3-column layout)
    return (
        <div className="w-[95%] md:w-[90%] mx-auto py-4">
            {/* Carousel with 3 visible slides */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 min-h-[60vh] overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                {visibleSlides.map((image, slideIndex) => {
                    const isCenterSlide = slideIndex === 1;

                    return (
                        <motion.div
                            key={`image-${image.originalIndex}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.8
                                },
                                opacity: { duration: 0.4 },
                                layout: { 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.8
                                }
                            }}
                            whileHover={{ scale: isCenterSlide ? 1.02 : 1.05 }}
                            onHoverStart={() => setHoveredIndex(slideIndex)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`relative aspect-square md:aspect-auto overflow-hidden
                                 rounded-lg cursor-pointer border border-gray-200/30 dark:border-gray-700/30
                                 bg-white dark:bg-[#0a0a0a] ${
                                isCenterSlide
                                    ? 'md:h-[70vh]'
                                    : 'md:h-[58vh] md:self-center'
                            }`}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: loadedImages.has(image.originalIndex) ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    priority={slideIndex < 3}
                                    onLoad={() => handleImageLoad(image.originalIndex)}
                                />
                            </motion.div>
                            
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
                                    <Link href="/gallery"><p className="text-gray-200">Click to view full gallery</p></Link>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })}
                </AnimatePresence>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleManualIndexChange(index)}
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