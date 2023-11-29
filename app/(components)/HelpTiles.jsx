import React from "react";

export default function HelpTiles({ title, description, buttonTitle, style }) {
  return (
    <div
      className={` bg-black  flex-1 flex flex-col justify-between items-center gap-8 px-8 py-4 ${style}`}
    >
      <h1 className={`text-[#f52f2f] text-3xl flex-1 text-center`}>{title}</h1>

      <p className=" text-white flex-1 ">{description}</p>

      <button className=" bg-[#f52f2f] p-4 rounded-2xl text-white font-semibold flex justify-center items-center">
        {buttonTitle}
      </button>
    </div>
  );
}
