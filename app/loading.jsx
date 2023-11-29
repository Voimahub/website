"use client";

import loading from "../public/animation_ln5fyzr8.json";

import Lottie from "lottie-react";

import React from "react";

export default function loadingPage() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-1/2">
        <Lottie size={100} animationData={loading} loop={true} />
      </div>
    </div>
  );
}
