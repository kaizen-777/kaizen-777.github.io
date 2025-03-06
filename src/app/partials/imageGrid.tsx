import Image from "next/image";
import ikkyu from "../images/ikkyu.jpg";
import missionBay from "../images/missionBay.jpg";
import museumSelfie from "../images/museumSelfie.jpeg";
import ferrari from "../images/ferrari.jpg";
import selfie from "../images/selfie.jpg";
import leatherJacket from "../images/leatherjacket.jpg";

export default function ImageGrid() {
    return (
        <div className="mx-auto grid grid-cols-4 grid-rows-2 gap-2 bg-black p-2 h-[calc(100vh-60px)] max-h-[1300px]" style={{width: "75%"}}>
            <div className="col-span-1 row-span-2">
                <Image src={leatherJacket} alt="leather jacket pic" />
                <Image src={selfie} alt="Selfie" className="mt-4" />
            </div>
            <div className="col-span-2 relative">
                <Image src={museumSelfie} alt="Museum Selfie"/>
            </div>
            <div className="col-span-1 row-span-2">
                <Image src={missionBay} alt="Mission Bay"/>
                <Image src={ferrari} alt="Ferrari" className="mt-3" />
            </div>

        </div>
    );
}
