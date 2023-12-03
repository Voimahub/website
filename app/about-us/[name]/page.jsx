import Link from "next/link";
import { TeamMembersData } from "../../(components)/TeamMembersData";
import Image from "next/image";
import { SpaceBold } from "@/app/(fonts)/font";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const TeamMemberPage = ({ params }) => {
  const memberName = params.name;

  // Assuming TeamMembersData is an object with categories as properties
  const member = Object.keys(TeamMembersData).reduce(
    (foundMember, categoryKey) => {
      // Access each category using the key
      const teamCategory = TeamMembersData[categoryKey];

      // Check each category (founder, development, creativeresearch, media)
      const memberInCategory = teamCategory.find(
        (memberObject) => memberObject.descriptionPageLink === memberName
      );

      // If a member is found in the current category, return it
      if (memberInCategory) {
        return memberInCategory;
      }

      // If not found in the current category, continue to the next one
      return foundMember;
    },
    null
  );

  // Now, 'member' contains the information of the member with the matching descriptionPageLink
  // console.log(member);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-2">
        <div>
          <Image
            src={member.image}
            alt={`${member.fullname}'s photo`}
            title={`${member.fullname}'s photo`}
            className="rounded-lg"
          />
        </div>
        <div className="w-full flex justify-center gap-10 items-center">
          {member.instagram && (
            <Link target="_blank" href={member.instagram}>
              <Instagram />
            </Link>
          )}
          {member.linkedin && (
            <Link target="_blank" href={member.linkedin}>
              <LinkedIn />
            </Link>
          )}
          {member.twitter && (
            <Link href={member.twitter} target="_blank">
              <Twitter />
            </Link>
          )}
          {member.github && (
            <Link href={member.github} target="_blank">
              <GitHub />
            </Link>
          )}
          {member.youtube && (
            <Link href={member.youtube} target="_blank">
              <YouTube />
            </Link>
          )}
          {member.facebook && (
            <Link href={member.facebook} target="_blank">
              <Facebook />
            </Link>
          )}
        </div>
        <h1 className={`${SpaceBold.className} text-2xl sm:text-4xl`}>
          {member.fullname}
        </h1>
        <h2 className={`self-start font-semibold`}>{member.description}</h2>
      </div>
    </div>
  );
};

export default TeamMemberPage;
