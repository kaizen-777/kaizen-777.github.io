'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../header/header';
import { useState, useEffect } from 'react';

// Import all images
import {
    ikkyu,
    missionBay,
    museumSelfie,
    shoot2,
    shoot3,
    shoot4,
    shoot5,
    shoot6,
    shoot7,
    omoide,
    plotting,
    editedPortrait,
    karekare,
    ferrari,
    leatherjacket
} from '../images/images';

interface GalleryImage {
    src: any;
    alt: string;
    title: string;
}

export default function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const images: GalleryImage[] = [
        { src: editedPortrait, alt: 'Edited Portrait', title: 'Edited Portrait' },
        { src: shoot2, alt: 'Portrait Photo 2', title: 'Photoshoot 2' },
        { src: shoot3, alt: 'Portrait Photo 3', title: 'Photoshoot 3' },
        { src: shoot4, alt: 'Portrait Photo 4', title: 'Photoshoot 4' },
        { src: shoot5, alt: 'Portrait Photo 5', title: 'Photoshoot 5' },
        { src: shoot6, alt: 'Portrait Photo 6', title: 'Photoshoot 6' },
        { src: shoot7, alt: 'Portrait Photo 7', title: 'Photoshoot 7' },
        { src: ikkyu, alt: 'Ikkyu', title: 'Ikkyu' },
        { src: missionBay, alt: 'Mission Bay', title: 'Mission Bay' },
        { src: museumSelfie, alt: 'Museum Selfie', title: 'Museum Selfie' },
        { src: omoide, alt: 'Omoide Yakosho', title: 'Omoide Yakosho' },
        { src: plotting, alt: 'Plotting', title: 'Plotting' },
        { src: karekare, alt: 'Karekare Beach', title: 'Karekare Beach' },
        { src: ferrari, alt: 'Ferrari', title: 'Ferrari' },
        { src: leatherjacket, alt: 'Leather Jacket', title: 'Leather Jacket' },
    ];

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'Escape') {
                setSelectedImageIndex(null);
            } else if (e.key === 'ArrowLeft') {
                setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex((selectedImageIndex + 1) % images.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, images.length]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImageIndex]);

    const handlePrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
        }
    };

    const handleNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
            <Header />

            <div className="w-[95%] md:w-[90%] mx-auto py-12">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Gallery</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">A collection of my portfolio work</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImageIndex(index)}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer
                                     border border-gray-200/30 dark:border-gray-700/30
                                     bg-white dark:bg-[#0a0a0a] group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                                          transition-opacity duration-300 flex items-end p-4">
                                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300
                                     transition-colors z-50 p-2"
                            aria-label="Close"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            className="absolute left-4 md:left-8 text-white hover:text-gray-300
                                     transition-colors z-50 p-2"
                            aria-label="Previous image"
                        >
                            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 md:right-8 text-white hover:text-gray-300
                                     transition-colors z-50 p-2"
                            aria-label="Next image"
                        >
                            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <motion.div
                            key={selectedImageIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-[90vw] h-[80vh] md:w-[85vw] md:h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedImageIndex].src}
                                alt={images[selectedImageIndex].alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </motion.div>

                        {/* Image Title */}
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <motion.h2
                                key={`title-${selectedImageIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-white text-xl md:text-2xl font-semibold"
                            >
                                {images[selectedImageIndex].title}
                            </motion.h2>
                            <p className="text-gray-400 text-sm mt-2">
                                {selectedImageIndex + 1} / {images.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
