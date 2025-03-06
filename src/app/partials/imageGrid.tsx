import Image from "next/image";
import ikkyu from "../images/ikkyu.jpg";
import missionBay from "../images/missionBay.jpg";
import museumSelfie from "../images/museumSelfie.jpeg";
import ferrari from "../images/ferrari.jpg";
import selfie from "../images/selfie.jpg";

export default function ImageGrid() {
    return (
        <div className="mx-auto grid grid-cols-4 gap-4 p-4" style={{width: "75%"}}>
            <div className="col-span-1 row-span-2">
                <Image src={ikkyu} alt="Ikkyu" />
                <Image src={selfie} alt="Selfie" className="mt-4" />
            </div>
            <div className="col-span-2">
                <Image src={museumSelfie} alt="Museum Selfie"/>
            </div>
            <div className="col-span-1 row-span-2">
                <Image src={missionBay} alt="Mission Bay"/>
                <Image src={ferrari} alt="Ferrari" className="mt-4" />
            </div>

        </div>
    );
}
