import BelowHomeImage from "./(components)/BelowHomeImage";
import { MontserratBold, SpaceBold } from "./(fonts)/font";
import HomeBackgroundImage from "../public/Rectangle 161.png";
import Image from "next/image";
import YouTubeIcon from "../public/openmoji_youtube.svg";
import YouTubeVideo from "../public/Rectangle 166.png";
import HelpTiles from "./(components)/HelpTiles";
import HelpUsPicture from "../public/HelpUs.png";
import Volunteer from "../public/Rectangle 173.png";
import Community from "../public/Rectangle 175.png";
import Location from "../public/Rectangle 174.png";
import PhoneApp from "../public/Group 92.png";
import Mission from "../public/octicon_goal-24.svg";
import Vision from "../public/mdi_eye-outline.svg";
import DescriptionImage from "../public/Rectangle 167.png";
import "./(styles)/styles.css";
import GlobalStats from "./(components)/GlobalStats";
import Link from "next/link";
import { LobsterRegular } from "./(fonts)/font";

export default function Home() {
  return (
    <main className="  min-h-screen">
      <div className=" h-[400px] relative flex flex-col">
        <div className="h-full bg-red-300 flex justify-center items-center">
          <Image
            src={HomeBackgroundImage}
            alt="HomeBackgroundImage"
            className=" h-full"
          />
        </div>
        <div className=" flex justify-center items-center bg-black bg-opacity-50 w-full absolute bottom-0">
          <h1 className={` p-4 text-4xl text-white ${SpaceBold.className}`}>
            JOIN US IN MAKING THE WORLD A BETTER PLACE
          </h1>
        </div>
      </div>
      <div className=" grid justify-center items-center grid-cols-1 sm:grid-cols-3 ">
        <BelowHomeImage
          title={"Lorem Ipsum"}
          description={
            "Proident dolor dolor quis reprehenderit ullamco occaecat veniam laborum eiusmod elit officia."
          }
          style={"bg-[#f52f2f] bg-opacity-70"}
        />
        <BelowHomeImage
          title={"Lorem Ipsum"}
          description={
            "Proident dolor dolor quis reprehenderit ullamco occaecat veniam laborum eiusmod elit officia."
          }
          style={"bg-[#f52f2f] bg-opacity-90"}
        />
        <BelowHomeImage
          title={"Lorem Ipsum"}
          description={
            "Proident dolor dolor quis reprehenderit ullamco occaecat veniam laborum eiusmod elit officia."
          }
          style={"bg-[#f52f2f]"}
        />
      </div>
      <div className=" bg-white flex flex-col sm:flex-row gap-8 py-4 px-8">
        <div className=" flex-1 flex flex-col gap-4">
          <h1
            className={` text-[#f52f2f] text-3xl sm:text-5xl font-bold underline`}
          >
            WELCOME TO <span className="text-black">VOIMA</span>
          </h1>
          <p>
            Et reprehenderit veniam non ut nostrud magna Lorem nostrud labore
            nulla nostrud ipsum nisi. Ut ad aliqua dolor est nostrud fugiat sunt
            aute adipisicing do ipsum tempor nulla nisi. Ipsum esse veniam duis
            irure. In id et consectetur aliquip occaecat consectetur consequat
            id culpa ad in ad. Exercitation irure aliqua exercitation nulla in
            irure ea adipisicing commodo fugiat aliquip quis quis. Aliquip
            incididunt qui anim labore officia cupidatat commodo laborum est in
            consectetur dolore reprehenderit.
          </p>
        </div>
        <div className="  flex-1 flex flex-col items-center justify-center relative">
          <Image src={YouTubeVideo} alt="youtubevideo" title="youtubevideo" />
          <Image
            src={YouTubeIcon}
            alt="youtubeicon"
            title="youtubeicon"
            className=" absolute "
          />
        </div>
      </div>
      <div className=" flex justify-between items-center gap-8 p-10">
        <div className=" flex-1 flex flex-col gap-4 justify-between items-center ">
          <Image src={Mission} alt="our mission photo" />
          <h1 className=" text-2xl">MISSION</h1>
          <p className=" text-center">
            Reprehenderit velit aliqua ea enim culpa et pariatur exercitation
            commodo proident. Sunt minim consectetur dolore pariatur minim sit
            pariatur ea esse duis.
          </p>
        </div>
        <div className=" flex-1 flex flex-col gap-4 justify-between items-center">
          <Image src={Vision} alt="our vision photo" />
          <h1 className=" text-2xl">VISION</h1>
          <p className=" text-center">
            Reprehenderit velit aliqua ea enim culpa et pariatur exercitation
            commodo proident. Sunt minim consectetur dolore pariatur minim sit
            pariatur ea esse duis.
          </p>
        </div>
        <div className=" flex-1 flex flex-col gap-2  justify-between items-center">
          <Image
            src={PhoneApp}
            alt="Phone app"
            className=" h-full w-full flex-1"
          />
          <h1
            className={`text-[#f52f2f] font-black text-xl flex-1 ${MontserratBold.className}`}
          >
            APP LAUNCH
          </h1>
          <h1 className={` font-extrabold flex-1 ${MontserratBold.className}`}>
            COMING SOON
          </h1>
          <h1 className=" font-black">STAY TUNED WITH US</h1>
        </div>
      </div>
      <div className=" flex p-4">
        <div className=" flex flex-col h-[600px] border-2 border-gray-500">
          <div className=" bg-white">
            <Image src={DescriptionImage} alt="Description Image " />
          </div>
          <div className=" bg-white flex flex-col relative">
            <div className=" h-[100px] w-[100px] rounded-full bg-black text-white flex justify-center items-center  place-self-center relative bottom-10">
              <Link
                href={"/"}
                className={`${LobsterRegular.className} text-3xl text-white`}
              >
                Voima
              </Link>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center p-4 ">
            <h1 className=" text-4xl text-[#f52f2f]">WHO ARE WE</h1>
            <h1 className="mt-4">
              Eiusmod do dolore velit laborum. Laboris id ea id labore sit
              exercitation elit tempor aliquip reprehenderit dolor labore enim.
            </h1>
          </div>
        </div>

        <div className=" flex flex-col h-[600px] border-2 border-gray-500">
          <div className=" bg-white">
            <Image src={DescriptionImage} alt="Description Image " />
          </div>
          <div className=" bg-white flex flex-col relative">
            <div className=" h-[100px] w-[100px] rounded-full bg-black text-white flex justify-center items-center  place-self-center relative bottom-10">
              <Link
                href={"/"}
                className={`${LobsterRegular.className} text-3xl text-white`}
              >
                Voima
              </Link>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center p-4 ">
            <h1 className=" text-4xl text-[#f52f2f]">OUR WHY</h1>
            <h1 className="mt-4">
              Eiusmod do dolore velit laborum. Laboris id ea id labore sit
              exercitation elit tempor aliquip reprehenderit dolor labore enim.{" "}
            </h1>
          </div>
        </div>

        <div className=" flex flex-col h-[600px] border-2 border-gray-500">
          <div className=" bg-white">
            <Image src={DescriptionImage} alt="Description Image " />
          </div>
          <div className=" bg-white flex flex-col relative">
            <div className=" h-[100px] w-[100px] rounded-full bg-black text-white flex justify-center items-center  place-self-center relative bottom-10">
              <Link
                href={"/"}
                className={`${LobsterRegular.className} text-3xl text-white`}
              >
                Voima
              </Link>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center p-4 ">
            <h1 className=" text-4xl text-[#f52f2f]">OUR HOW</h1>
            <h1 className="mt-4">
              Eiusmod do dolore velit laborum. Laboris id ea id labore sit
              exercitation elit tempor aliquip reprehenderit dolor labore enim.{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-white relative">
        <div className=" help-us bg-slate-500 py-10 px-6 flex flex-col gap-8 h-[400px] justify-center items-center relative">
          <Image
            src={HelpUsPicture}
            alt="helpuspicture"
            className="absolute h-full "
          />
          <h1 className=" text-white  text-4xl font-extrabold p-2 z-10 border-b-2 border-white">
            HOW CAN YOU HELP US
          </h1>
          <p className="  w-4/5 text-white font-semibold z-10">
            Cupidatat commodo proident eiusmod tempor culpa excepteur velit
            cupidatat aliqua ipsum ea aliqua voluptate qui. Dolor enim mollit
            deserunt cupidatat veniam in sunt incididunt non dolor.
          </p>
        </div>
        <div className=" relative -top-28">
          <div className=" text-white grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 ">
            <HelpTiles
              title={"MAKE A DIFFERENCE"}
              description={
                "Tempor dolor ex voluptate voluptate magna. Commodo Lorem amet eiusmod id id anim do laborum minim velit ea incididunt. "
              }
              buttonTitle={"GET INVOLVED"}
              style={"border-2 border-gray-500 rounded-lg"}
            />
            <HelpTiles
              title={"BECOME A MEMBER"}
              description={
                "Tempor dolor ex voluptate voluptate magna. Commodo Lorem amet eiusmod id id anim do laborum minim velit ea incididunt. "
              }
              buttonTitle={"JOIN US"}
              style={" border-t-2 border-r-2 border-gray-500 rounded-lg"}
            />
            <HelpTiles
              title={"PARTNER WITH US"}
              description={
                "Tempor dolor ex voluptate voluptate magna. Commodo Lorem amet eiusmod id id anim do laborum minim velit ea incididunt. "
              }
              buttonTitle={"CONTACT US"}
              style={"border-2 border-gray-500 rounded-lg"}
            />
            <HelpTiles
              title={"VOLUNTEER"}
              description={
                "Tempor dolor ex voluptate voluptate magna. Commodo Lorem amet eiusmod id id anim do laborum minim velit ea incididunt. "
              }
              buttonTitle={"JOIN US"}
              style={" border-2 border-gray-500 rounded-lg"}
            />
          </div>
        </div>
        <div className=" bg-[#f52f2f] p-4 text-white flex flex-col justify-center items-center">
          <h1
            className={`font-black text-center text-3xl ${MontserratBold.className}`}
          >
            Global Statistics
          </h1>
          <div className=" mt-8 flex flex-col gap-4 w-full sm:w-2/3">
            <GlobalStats
              title={"20-25 million"}
              description={
                "People living with Sickle Cell Disease(SCD). 60% of those affected, living in Sub-Saharan Africa"
              }
            />
            <GlobalStats
              title={"240,000"}
              description={
                "Persons born with SCD(HbSS) each year in Sub-Saharan Africa.(Weatherall, 2011). Ghana accounting for about 6.25% of that number"
              }
            />
            <GlobalStats
              title={"25%"}
              description={
                "The percentage of the Ghanaian population that are Sickle Cell carriers"
              }
            />
            <GlobalStats
              title={"15,000"}
              description={
                "Newborns, thus 2% of all babies born(1 in 50 live births) are diagnosed with SCD each year."
              }
            />

            <h1
              className={` text-center text-2xl text-white font-extrabold ${MontserratBold.className}`}
            >
              GREAT NEWS!
            </h1>
            <GlobalStats
              // title={"50-70%"}
              description={
                "Survival rate has incerased from 50-70% rate in the 70's to over 98% currently."
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="  text-5xl text-[#f52f2f] p-2 border-b-2 border-[#f52f2f]  font-extrabold text-center">
            OUR IMPACT
          </h1>
          <div className=" w-full flex justify-between items-center mt-4 gap-8 px-20 pt-10 ">
            <div className=" flex flex-col justify-center items-center gap-2s font-bold">
              <Image src={Volunteer} alt="volunteer photo" />
              <h1 className="text-[#f52f2f] text-3xl">500</h1>
              <h1 className=" text-xl">Volunteers reached</h1>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 font-bold">
              <Image src={Location} alt="location photo" />
              <h1 className="text-[#f52f2f] text-3xl">10</h1>
              <h1 className=" text-xl">Regions</h1>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2 font-bold">
              <Image src={Community} alt="volunteer photo" />
              <h1 className="text-[#f52f2f] text-3xl">2000</h1>
              <h1 className=" text-xl">Community members reached</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
