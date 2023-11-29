import Link from "next/link";
import { TeamMembersData } from "../../(components)/TeamMembersData";
import Image from "next/image";
import { SpaceBold } from "@/app/(fonts)/font";

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
        <h1 className={`${SpaceBold.className} text-2xl sm:text-4xl`}>
          {member.fullname}
        </h1>
        <h2 className={`self-start font-semibold`}>{member.description}</h2>
      </div>
    </div>
  );
};

export default TeamMemberPage;
