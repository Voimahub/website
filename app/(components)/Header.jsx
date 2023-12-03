"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Email,
  Search,
  SearchRounded,
  SearchOutlined,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { LobsterRegular, MontserratBold, SpaceBold } from "../(fonts)/font";

export default function Header() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(null);
  // const [homeDropdown, setHomeDropdown] = useState(false);
  // const [aboutDropdown, setAboutDropdown] = useState(false);
  // const [blogDropdown, setBlogDropdown] = useState(false);
  // const [projectDropdown, setProjectDropdown] = useState(false);

  return (
    <div className={` top-0 sticky w-full flex flex-col z-20`}>
      <div className=" bg-gray-300 flex justify-end items-center gap-4 p-1">
        <div className="flex">
          <Phone />
          <h1 className="text-sm sm:text-base">+233206916432</h1>
        </div>
        <div className="flex">
          <Email />
          <h1 className="text-sm sm:text-base">voimagh@gmail.com</h1>
        </div>
      </div>
      <div className=" flex justify-between items-center bg-white p-2">
        <div className=" flex flex-col gap-2 justify-between items-center w-full h-full md:flex-row">
          <div className=" flex-1 flex flex-col gap-2 lg:flex-row justify-start items-center">
            {/* <div className=" flex justify-center items-center"> */}
            <Link
              href={"/"}
              className={`${LobsterRegular.className} text-3xl sm:text-6xl text-[#f52f2f]`}
            >
              Voima
            </Link>
            {/* </div> */}
            {/* <div> */}
            <h1 className="font-bold sm:text-lg text-center">
              Building a Sickle Cell Free Community!
            </h1>
            {/* </div> */}
          </div>

          <div className=" flex-1 flex items-center justify-end gap-2 px-2">
            <div
              id="searchbar"
              className=" flex border-2 border-black rounded-3xl justify-between items-center px-1"
            >
              <input
                type="text"
                placeholder="Search"
                className={`p-1 rounded-3xl flex-1 border-none outline-none ${MontserratBold.className} text-sm sm:text-base`}
              />
              <Search />
            </div>
            <div className="">
              <Link
                href={"/donate"}
                className={`p-2 bg-black w-full text-white  text-center rounded-3xl ${MontserratBold.className} text-sm sm:text-base`}
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-[#f52f2f] flex justify-center items-center gap-8 text-center text-white text-sm sm:text-lg border-b-2 border-white p-2  ${SpaceBold.className}`}
      >
        <div
          className={`${pathname === "/" && "bg-black"}  h-full relative`}
          // onClick={() => {
          //   setDropdown(null);
          // }}
        >
          <Link href={"/"}>HOME</Link>
        </div>
        <div
          className={`${pathname === "/about-us" && "bg-black"}  ${
            dropdown === "about-us" && "border-b-2 border-white"
          } h-full p-1 relative`}
          onMouseOver={() => {
            setDropdown("about-us");
          }}
          onMouseLeave={() => {
            setDropdown(null);
          }}
        >
          <Link href={"/about-us"}>ABOUT US</Link>
          {dropdown === "about-us" && (
            <div className=" bg-slate-900 bg-opacity-70 absolute top-full left-2/3 flex flex-col w-max">
              <Link
                href={"/about-us#our-story"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Our Story
              </Link>
              <Link
                href={"/about-us#our-team"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Our Team
              </Link>
              <Link
                href={"/about-us#our-partners"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Our Partners
              </Link>
            </div>
          )}
        </div>
        <div
          className={`${pathname === "/our-project" && "bg-black"} 
          ${dropdown === "our-project" && "border-b-2 border-white"}
          h-full p-1 relative`}
          onMouseOver={() => {
            setDropdown("our-project");
          }}
          onMouseLeave={() => {
            setDropdown(null);
          }}
        >
          <Link href={"/our-project"}>OUR PROJECT</Link>{" "}
          {dropdown === "our-project" && (
            <div className=" bg-slate-900 bg-opacity-70 absolute top-full right-1/2  sm:left-1/2 flex flex-col w-max">
              <Link
                href={"/our-project#app"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Voima App
              </Link>
              <Link
                href={"our-project#educational-tour"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Voima Educational Tour
              </Link>
              {/* <Link
                href={"our-project#screening-program"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Voima Screening Program
              </Link> */}
              <Link
                href={"our-project#blood-drive"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Voima Blood Drive
              </Link>
            </div>
          )}
        </div>
        <div
          className={`${pathname === "/blog" && "bg-black"}  ${
            dropdown === "blog" && "border-b-2 border-white"
          } h-full p-1 relative`}
          onMouseOver={() => {
            setDropdown("blog");
          }}
          onMouseLeave={() => {
            setDropdown(null);
          }}
        >
          <Link href={"/blog"}>BLOG</Link>
          {dropdown === "blog" && (
            <div className=" bg-slate-900 bg-opacity-70 absolute top-full right-1/2 sm:left-1/2 flex flex-col w-max">
              <Link
                href={"/blog#resources"}
                className=" border-b-2 border-white py-2 px-6 text-center"
              >
                Resources
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
