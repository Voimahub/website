import Link from "next/link";
import React from "react";
import { SpaceRegular, SpaceBold } from "../(fonts)/font";

export default function BelowHomeImage({
  title,
  description,
  image,
  link,
  style,
}) {
  return (
    <div
      className={` flex-col p-2  text-white ${SpaceRegular.className} ${style}`}
    >
      <div className=" flex gap-4">
        <div className="h-[100px] w-[100px] rounded-full bg-white ">
          {image}
        </div>
        <div className="flex-1 flex flex-col justify-between items-center">
          <h1 className={`${SpaceBold.className}`}>{title}</h1>
          <h1>{description}</h1>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <Link
          className=" border-2 border-white p-2 rounded-2xl"
          href={link || "/"}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
