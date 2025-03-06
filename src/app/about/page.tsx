import Header from "../header/header";
import Image from "next/image";
import { missionBay, museumSelfie } from "../images/images";

export default function About() {
    return (
        <>
        <Header />
        <div className="mx-auto grid grid-cols-3 gap-4 p-4" style={{width: "85%"}}>
            <div className="col-span-1">
                <Image src={missionBay} alt="Mission Bay" className="w-200 h-full overflow-auto"/>
            </div>
        <div className="mx-auto py-12 px-4 md:px-6 text-center col-span-1">
                <ul>
                    <li>Height: 191cm</li>
                    <li>Weight: 80kg</li>
                    <li>Shoe: EUR 44</li>
                    <li>Shirt: M</li>
                    <li>Waist: 32</li>
                    <li>Eyes: Hazel</li>
                    <li>Hair: Blonde</li>
                </ul>
        </div>
        <div className="col-span-1">
            <Image src={museumSelfie} alt="Museum Selfie" className="w-200 h-full overflow-auto"/>
        </div>
        </div>
        </>
    );
}