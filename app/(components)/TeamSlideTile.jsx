import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { SpaceBold } from "../(fonts)/font";

const TeamSlideTile = ({
  image,
  imageStyle,
  descriptionPageLink,
  fullname,
  firstname,
  role,
  instagram,
  linkedin,
  twitter,
  github,
  youtube,
  facebook,
  personalwebsitelink,
}) => {
  return (
    <div className=" bg-white p-4 flex flex-col gap-2 rounded-lg w-fit">
      <div className="flex  items-center justify-center">
        <Image
          src={image}
          alt={fullname}
          title={`${fullname}'s Photo`}
          className={`h-[340px] w-[340px] rounded-lg aspect-auto`}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <div>
          <h1 className="text-base sm:text-lg font-bold">{fullname}</h1>
          <div className="flex flex-col sm:flex-row sm:justify-between ">
            <div className=" flex-1">
              <h1 className="text-base sm:text-lg">{role}</h1>
            </div>
            <div className=" flex justify-end items-center">
              {instagram && (
                <Link target="_blank" href={instagram}>
                  <Instagram />
                </Link>
              )}
              {linkedin && (
                <Link target="_blank" href={linkedin}>
                  <LinkedIn />
                </Link>
              )}
              {twitter && (
                <Link href={twitter} target="_blank">
                  <Twitter />
                </Link>
              )}
              {github && (
                <Link href={github} target="_blank">
                  <GitHub />
                </Link>
              )}
              {youtube && (
                <Link href={youtube} target="_blank">
                  <YouTube />
                </Link>
              )}
              {facebook && (
                <Link href={facebook} target="_blank">
                  <Facebook />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-2">
            {personalwebsitelink && (
              <Link
                href={personalwebsitelink}
                target="_blank"
                className={`flex flex-1 justify-center items-center bg-slate-900 p-2 text-white font-bold rounded-lg ${SpaceBold.className}`}
              >
                Personal Website
              </Link>
            )}

            <Link
              href={`/about-us/${descriptionPageLink}`}
              // target="_blank"
              className={`flex-1 w-full font-semibold bg-slate-900 p-2 text-white rounded-lg text-center text-base ${SpaceBold.className}`}
            >
              More about {firstname}
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlideTile;
