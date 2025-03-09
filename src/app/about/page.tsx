import Header from "../header/header";
import Image from "next/image";
import { missionBay, museumSelfie } from "../images/images";

export default function About() {
    return (
        <>
        <Header />
        {/* Main container with responsive width */}
        <div className="w-[95%] md:w-[85%] mx-auto p-2 md:p-4">
            {/* Grid that changes from 1 column on mobile to 3 columns on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                {/* First image - full width on mobile, 1/3 width on desktop */}
                <div className="w-full aspect-square md:aspect-auto md:h-full relative overflow-hidden">
                    <Image 
                        src={missionBay} 
                        alt="Mission Bay" 
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                
                {/* Center content - specs list */}
                <div className="w-full mx-auto py-4 md:py-12 px-2 md:px-6 text-center">
                    <h2 className="text-2xl font-bold mb-6">Specifications</h2>
                    <ul className="space-y-2 text-lg">
                        <li className="p-2 border-b border-gray-200">Height: 191cm</li>
                        <li className="p-2 border-b border-gray-200">Weight: 80kg</li>
                        <li className="p-2 border-b border-gray-200">Shoe: EUR 44</li>
                        <li className="p-2 border-b border-gray-200">Shirt: M</li>
                        <li className="p-2 border-b border-gray-200">Waist: 32</li>
                        <li className="p-2 border-b border-gray-200">Eyes: Hazel</li>
                        <li className="p-2">Hair: Blonde</li>
                    </ul>
                </div>
                
                {/* Second image - full width on mobile, 1/3 width on desktop */}
                <div className="w-full aspect-square md:aspect-auto md:h-full relative overflow-hidden">
                    <Image 
                        src={museumSelfie} 
                        alt="Museum Selfie" 
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
        </>
    );
}