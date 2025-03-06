import React from "react";
import Header from "../header/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <>
        <Header />
        <div className="container mx-auto py-12 px-4 md:px-6">
            <section className="max-w-3xl mx-auto">
                
                    <h2 className="text-2xl font-semibold text-white-700 mb-6 text-center">Get in Touch</h2>
                    
                    <div className="space-y-6 text-white-600 leading-relaxed text-center">
                        <p>
                            I am always open to new opportunities and collaborations. If you have a project in mind, 
                            or just want to say hi, feel free to reach out to me.
                        </p>
                        
                        <div className="flex items-center space-x-4 mt-4 text-center justify-center">
                            <span className="text-sm text-white-600">Find me on:</span>
                            <a 
                                href="https://www.linkedin.com/in/silvestre-fernandez-1aaa0a2a9/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                                aria-label="LinkedIn Profile"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://instagram.com/silvestrefernande.z" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-pink-400 hover:text-pink-600 transition-colors duration-200"
                                aria-label="Instagram Profile"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                            </a>
                            </div>
                            <p>Alternatively, email me <a href="mailto:silvestrefernandez777@gmail.com" className="hover:text-blue-400">here</a></p>
                    </div>
            </section>
        </div>
        </>
    )
}