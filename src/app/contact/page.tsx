'use client';

import Header from "../header/header";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const contactMethods = [
        {
            icon: faEnvelope,
            label: "Email",
            value: "silvestrefernandez777@gmail.com",
            href: "mailto:silvestrefernandez777@gmail.com",
            color: "text-blue-500 dark:text-blue-400",
            hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
        },
        {
            icon: faInstagram,
            label: "Instagram",
            value: "@silvestrefernande.z",
            href: "https://instagram.com/silvestrefernande.z",
            color: "text-pink-500 dark:text-pink-400",
            hoverColor: "hover:bg-pink-50 dark:hover:bg-pink-950/30",
        },
        {
            icon: faLinkedin,
            label: "LinkedIn",
            value: "Silvestre Fernandez",
            href: "https://www.linkedin.com/in/silvestre-fernandez-1aaa0a2a9/",
            color: "text-blue-600 dark:text-blue-400",
            hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                        Get in Touch
                    </h1>
                    <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Let's collaborate on something great
                    </p>
                </motion.div>

                {/* Intro Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-200/50 dark:border-gray-800/50 text-center">
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm always open to new opportunities and collaborations. Whether you have
                            a project in mind, want to discuss creative ideas, or just want to say hi,
                            feel free to reach out through any of the channels below.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {contactMethods.map((method) => (
                        <motion.a
                            key={method.label}
                            href={method.href}
                            target={method.label !== "Email" ? "_blank" : undefined}
                            rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                                     rounded-xl p-8 md:p-10 text-center transition-all duration-300
                                     hover:shadow-xl dark:hover:shadow-gray-900/50 ${method.hoverColor}
                                     group cursor-pointer`}
                        >
                            <div className={`${method.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                <FontAwesomeIcon icon={method.icon} className="w-12 h-12 md:w-14 md:h-14" />
                            </div>
                            <p className="text-sm md:text-base uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                                {method.label}
                            </p>
                            <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white break-words">
                                {method.value}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Looking forward to hearing from you!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}