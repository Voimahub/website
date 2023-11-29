import {
  ArrowLeft,
  ArrowRight,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import { InriaBold, SpaceBold } from "../(fonts)/font";
import Link from "next/link";
// import { TeamMembers } from "./TeamMembers";

export default function Carousel({ imageList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" relative w-fit flex flex-col gap-2 border-2 border-blue-400 rounded-lg p-4">
      <div>
        <Image
          src={imageList[currentIndex].image}
          alt={`Project ${currentIndex + 1}`}
          className={` rounded-lg h-full w-full ${imageList[currentIndex].imageStyle}`}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <div>
          <h1 className={`${InriaBold.className} text-lg`}>
            {imageList[currentIndex].name}
          </h1>
          <div className=" flex justify-between ">
            <h1 className={`text-lg`}>{imageList[currentIndex].role}</h1>
            <div>
              {imageList[currentIndex].linkedin && (
                <Link href={imageList[currentIndex].linkedin}>
                  <LinkedIn sx={{ color: "blue" }} />
                </Link>
              )}
              {imageList[currentIndex].instagram && (
                <Link href={imageList[currentIndex].instagram}>
                  <Instagram sx={{ color: "blue" }} />
                </Link>
              )}
              {imageList[currentIndex].twitter && (
                <Link href={imageList[currentIndex].twitter}>
                  <Twitter sx={{ color: "blue" }} />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <h1>{imageList[currentIndex].description}</h1>
        </div>
      </div>
      <button
        onClick={prevImage}
        className=" absolute top-1/2 right-full transform -translate-y-1/2 z-10 animate-pulse "
      >
        <ArrowLeft sx={{ color: "red", fontSize: 60 }} />
      </button>
      <button
        onClick={nextImage}
        className=" absolute top-1/2 left-full transform -translate-y-1/2 z-10 animate-pulse"
      >
        <ArrowRight sx={{ color: "red", fontSize: 60 }} />
      </button>
    </div>
  );
}
