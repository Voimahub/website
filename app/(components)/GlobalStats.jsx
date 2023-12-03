import React from "react";

export default function GlobalStats({ title, description }) {
  return (
    <div className=" bg-slate-200 flex flex-col p-8 gap-6 justify-center items-center text-black rounded-lg">
      {title && <h1 className=" font-bold text-2xl sm:text-3xl">{title}</h1>}
      {description && (
        <p className=" font-semibold text-base sm:text-xl text-center">
          {description}
        </p>
      )}
    </div>
  );
}
