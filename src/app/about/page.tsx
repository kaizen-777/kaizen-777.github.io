'use client';

import Header from "../header/header";
import { motion } from "framer-motion";

export default function About() {
    const specs = [
        { label: "Height", value: "191cm" },
        { label: "Weight", value: "84kg" },
        { label: "Shoe", value: "EUR 44" },
        { label: "Shirt", value: "M" },
        { label: "Waist", value: "32" },
        { label: "Eyes", value: "Hazel" },
        { label: "Hair", value: "Brown" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
            <Header />

            <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%] mx-auto py-12 md:py-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Model & Creative based in New Zealand
                    </p>
                </motion.div>

                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-800/50">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            Bio
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Passionate about fashion, photography, and creative expression.
                            I bring energy and versatility to every project, whether it's editorial,
                            commercial, or lifestyle work.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            Available for collaborations, shoots, and creative projects.
                            Let's create something memorable together.
                        </p>
                    </div>
                </motion.div>

                {/* Specifications Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white text-center">
                        Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={spec.label}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                                         rounded-xl p-6 md:p-8 text-center transition-shadow hover:shadow-lg
                                         dark:hover:shadow-gray-900/50"
                            >
                                <p className="text-sm md:text-base uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                    {spec.label}
                                </p>
                                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    {spec.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}