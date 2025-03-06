import Image from "next/image";
import Header from "./header/header";
import ikkyu from "./images/ikkyu.jpg";
import missionBay from "./images/missionBay.jpg"
import museumSelfie from "./images/museumSelfie.jpeg";
import ImageGrid from "./partials/imageGrid";


export default function Home() {

  return (
    <div>
    <Header />
    <ImageGrid />
    </div>
  );
}
