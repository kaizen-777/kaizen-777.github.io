'use client';

import Header from "../header/header";
import { motion } from "framer-motion";

export default function Apply() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
            <Header />

            <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[65%] mx-auto py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                        Apply
                    </h1>
                    <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <iframe
                        width="700px"
                        height="500px"
                        src="https://selma.app/en/form/apply/20"
                        className="max-w-full rounded-2xl border border-gray-200/50 dark:border-gray-800/50"
                    />
                </motion.div>
            </div>
        </div>
    );
}
