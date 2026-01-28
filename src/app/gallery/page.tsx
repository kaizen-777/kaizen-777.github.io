'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../header/header';

// Import all images
import {
    ikkyu,
    missionBay,
    museumSelfie,
    shoot1,
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
        </div>
    );
}
