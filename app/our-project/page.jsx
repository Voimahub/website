"use client";

import ConstructionAnimation from "../../public/construction.json";
import Lottie from "lottie-react";
import { MontserratBold } from "../(fonts)/font";

export default function page() {
  return (
    <div className=" min-h-screen flex flex-col gap-2 p-4 bg-[#f52f2f] ">
      <div>
        <h1
          className={`${MontserratBold.className} text-2xl text-white`}
          id="app"
        >
          Voima App
        </h1>
        <div className=" flex flex-col mt-2 gap-4 justify-center  bg-slate-200 p-4 rounded-lg font-bold">
          <p>
            The Voima App is a comprehensive mobile application development we
            aim to develop to imporove the health and general well being of
            sickle cell patients in order to reduce mortality rate.
          </p>
          <p>
            Through the app, patients can have consultations from phyisicians
            across the world at no cost, bringing care to our patients when they
            most need it. Also registered on the app will be professionals like
            psychologists that would schedule one-on-one meetings with our
            patients. This is very important to us because of the large
            psychological and emotional burdens people with SCD endure from all
            the death scares and the stigma from society.
          </p>
          <p>
            The app will also contain other unique features such as Symptom
            Predictor, AI-driven personal trend analyser, Voima Blood bank,
            community support forums, Medication reminder, and many more!
          </p>
        </div>
      </div>
      <div>
        <h1
          className={`${MontserratBold.className} text-2xl text-white`}
          id="educational-tour"
        >
          Tours!
        </h1>
        <div className=" flex flex-col mt-2 gap-4 justify-center  bg-slate-200 p-4 rounded-lg font-bold">
          <p>
            At Voima, we are dedicated to addressing the issue at its core. Our
            approach goes beyond simply delivering accessible healthcare to
            sickle cell patients. We also prioritize screening the younger
            generation to raise awareness of their sickle cell status, educate
            them about the condition, and empower them to make informed
            decisions when choosing their partners.
          </p>
          <p>
            By utilising our innovative Voima vans, our goal is to extend our
            services to every community across the country. Join us on our
            mission to make a difference.
          </p>
        </div>
      </div>
      <div>
        <h1
          className={`${MontserratBold.className} text-2xl text-white`}
          id="blood-drive"
        >
          Blood Drive!
        </h1>
        <div className=" flex flex-col mt-2 gap-4 justify-center  bg-slate-200 p-4 rounded-lg font-bold">
          <p>
            Sickle Cell Disease is a genetic condition that affects teh shape
            and function of red blood cells, leading o severe pain, anaemia, and
            other complications. Patients often require frequent blood
            transfusions to alleviate their symptoms and improve their quality
            of life. However, the availbility of compatible and sufficient blood
            is a constant challenge for both patients and healthcare providers.
          </p>
          <p>
            Voima, understanding the gravity of this situation, has taken
            proactive measures to address the pressing need for blood among
            Sickle Cell patients. By organizing blood drives, Voima mobilizes
            communities, volunteers, and donors to contribute to this
            life-saving cause. This will make blood available for our patients
            when they need it at no cost. All they have to do is place an order
            through the Voima app and it will be delivered at their facilities.
          </p>
        </div>
      </div>
    </div>
  );
}
