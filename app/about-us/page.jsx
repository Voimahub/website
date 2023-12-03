"use client";
import AboutUsPhoto from "../../public/VoimaAboutUsPhoto.png";

import { InriaBold, SpaceBold } from "../(fonts)/font";
import Image from "next/image";
import "../(styles)/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import PaulPic from "../../public/PaulPic.jpg";
import TeamSlideTile from "../(components)/TeamSlideTile";
import "../(styles)/styles.css";
import { TeamMembersData } from "../(components)/TeamMembersData";
// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import Carousel from "../(components)/Carousel";
// import { TeamMembers } from "../(components)/TeamMembers";

export default function page() {
  const settings = {
    infinite: true,
    dots: true,
    // draggable: true,
    arrows: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // centerMode: true,
    centerPadding: "2px",
    swipeToSlide: true,
    adaptiveHeight: true,
    speed: 500,
    responsive: [
      { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 1500, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  };

  // const Prince = TeamMembersData[0];
  // const Paul = TeamMembersData[1];
  // const Yves = TeamMembersData[2];
  // const Victor = TeamMembersData[3];
  // const Cherrylyn = TeamMembersData[4];
  // const Spendilove = TeamMembersData[5];
  // const Cindy = TeamMembersData[6];
  return (
    <div className=" min-h-screen">
      <div
        className={`flex flex-col justify-center items-center bg-red-500 text-white relative ${SpaceBold.className}`}
      >
        <div>
          <Image src={AboutUsPhoto} alt="about us image" />
        </div>
        <div className=" flex flex-col justify-center items-center absolute">
          <h1 className={`text-2xl sm:text-4xl`}>About Us</h1>
          <h1>Get to know our story, our team and our partners</h1>
        </div>
      </div>
      <div
        className={` bg-[#f52f2f] p-2 text-white text-lg flex flex-col justify-center items-center ${InriaBold.className} `}
      >
        <h1
          className={`text-2xl sm:text-3xl self-start ${SpaceBold.className}`}
          id="our-story"
        >
          Our Story
        </h1>
        <h1 className=" self-start text-base">
          Get to know our how we came about
        </h1>
        <div className=" bg-slate-200 p-4 rounded-2xl flex flex-col gap-4 justify-center items-center sm:w-1/2  text-black">
          <p className="text-center text-base ">
            In Junior High School, I lost one of my cherished friends and
            colleague EliJa,a few days before our final exams, BECE, due to
            complications from Sickle Cell Disease(SCD). In my neighbourhood,
            the situationh isn&apos;t any different: two of my childhood mates
            couldn&apos;t survive the disease either. My co-founders also share
            numerous stories of either their friends, families, or people they
            know who have suffered or lost their lives due to SCD. This is what
            brought us together, what motivates and keeps us awake every night.
          </p>
          <p className="text-center text-base">
            SCD continues to pose a major global public health concern,
            particularly in Sub-Saharan Africa. In Ghana alone, around
            15,000(2%) of newborns are diagnosed with SCD every year,
            highlighting the urgency of the issue. Despite its prevalence,
            awareness about this disease remains surprisingly low. This is why
            Voima was birthed - to raise awareness about the disease, help
            reduce the number of children born with it annually and empower
            those already living with the disease in achieving their maximum
            potential.
          </p>
          <h1 className={`${SpaceBold.className}`}>~ Emmanuel Prince Dey</h1>
        </div>
      </div>
      <div className={` p-2 bg-[#f52f2f] `} id="our-team">
        <h1 className={` text-2xl text-white ${SpaceBold.className}`}>
          Meet the team
        </h1>
        <h1 className="text-white text-base font-bold">
          Get to know the awesome people behind Voima
        </h1>
        <div className="mt-4 h-full w-full">
          {/* <h1 className=" text-white">Team Carousel</h1> */}
          <div className="m-8 ">
            <div className=" flex  items-center mb-4">
              {TeamMembersData.founder.map((member) => (
                <TeamSlideTile
                  key={member.fullname}
                  image={member.image}
                  role={member.role}
                  fullname={member.fullname}
                  firstname={member.firstname}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                  twitter={member.twitter}
                  github={member.github}
                  youtube={member.youtube}
                  descriptionPageLink={member.descriptionPageLink}
                  personalwebsitelink={member.personalWebsiteLink}
                />
              ))}
            </div>
            {/* <Carousel imageList={TeamMembers} /> */}
            <h1
              className={` my-4 text-white text-xl  sm:text-2xl ${SpaceBold.className}`}
            >
              Development Team
            </h1>

            <Slider {...settings}>
              {TeamMembersData.development.map((member) => (
                <div key={member.fullname}>
                  <TeamSlideTile
                    key={member.fullname}
                    image={member.image}
                    role={member.role}
                    fullname={member.fullname}
                    firstname={member.firstname}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                    twitter={member.twitter}
                    github={member.github}
                    youtube={member.youtube}
                    descriptionPageLink={member.descriptionPageLink}
                    personalwebsitelink={member.personalWebsiteLink}
                  />
                </div>
              ))}
            </Slider>
            <h1
              className={` my-4 text-white text-xl sm:text-2xl  ${SpaceBold.className}`}
            >
              Research and Creative Team
            </h1>
            <Slider {...settings}>
              {TeamMembersData.creativeresearch.map((member) => (
                <div key={member.fullname}>
                  <TeamSlideTile
                    key={member.fullname}
                    image={member.image}
                    role={member.role}
                    fullname={member.fullname}
                    firstname={member.firstname}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                    twitter={member.twitter}
                    github={member.github}
                    youtube={member.youtube}
                    descriptionPageLink={member.descriptionPageLink}
                    personalwebsitelink={member.personalWebsiteLink}
                  />
                </div>
              ))}
            </Slider>
            <h1
              className={` my-4 text-white text-xl  sm:text-2xl  ${SpaceBold.className}`}
            >
              Media Team
            </h1>
            {/* <Slider {...settings}> */}
            {TeamMembersData.media.map((member) => (
              <div key={member.fullname}>
                <TeamSlideTile
                  key={member.fullname}
                  image={member.image}
                  role={member.role}
                  fullname={member.fullname}
                  firstname={member.firstname}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                  twitter={member.twitter}
                  github={member.github}
                  youtube={member.youtube}
                  facebook={member.facebook}
                  descriptionPageLink={member.descriptionPageLink}
                  personalwebsitelink={member.personalWebsiteLink}
                />
              </div>
            ))}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
}
