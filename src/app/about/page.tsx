import React from "react";
import Header from "../header/header";

export default function About() {
    return (
        <>
        <Header />
        <div className="container mx-auto py-12 px-4 md:px-6">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
                <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </header>
            
            <section className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Who I Am</h2>
                    
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            I am a unique blend of Spanish and Kiwi heritage. A software developer by profession, 
                            and a karate practitioner by passion.
                            I consider myself an explorer, always looking for new adventures and challenges. I welcome growth and love to learn new things.
                        </p>
                        
                        <div>
                            <h3 className="text-xl font-medium text-gray-700 mb-3">My Hobbies Include:</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Reading</li>
                                <li>Learning about philosophy</li>
                                <li>Spending time in nature</li>
                                <li>Cooking</li>
                            </ul>
                        </div>
                        
                        <p>
                            My diverse background and interests have shaped my approach to both software development 
                            and life, bringing creativity and discipline to everything I do.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}