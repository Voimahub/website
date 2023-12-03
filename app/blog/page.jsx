"use client";

import ConstructionAnimation from "../../public/construction.json";
import Lottie from "lottie-react";
import { InriaBold, MontserratBold, SpaceBold } from "../(fonts)/font";
import PearlAdjavonPic from "../../public/PearlAdjavonVolunteer.jpg";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen  flex flex-col gap-2 items-center p-2 bg-[#f52f2f]">
      {/* <Lottie animationData={ConstructionAnimation} loop={true} /> */}
      <Image
        src={PearlAdjavonPic}
        alt="PearlAdjavon"
        className="h-[340px] w-[340px] rounded-lg aspect-square"
      />
      <h1 className={`${SpaceBold.className} text-white`}>~ Pearl Adjavon</h1>
      <div
        className={`w-full sm:w-1/2 bg-slate-200 p-4 rounded-lg flex flex-col gap-1 ${InriaBold.className} `}
      >
        <p>
          I entered Senior High School with such shallow knowledge on how much
          of an issue Sickle Cell Disease was. I considered it a disease I had
          to know just for the sake of examinations.
        </p>
        <p>
          In my first year, this mindset hadn&apos;t been altered much. Although
          I had friends with the disease, I was never close enough to witness
          firsthand the struggles they endured.
        </p>
        <p>
          Second year flew by much the same way. It was in my third and final
          year that enlightenment began to take place. I had been appointed the
          &quot;dorm monitress&quot; over the first room of my boarding house.
          Unbeknownst to me, this room accommodated students who battled Sickle
          Cell Disease and Rheumatism. What an experience it was! It was so
          undesirable in the beginning that I, in my ignorance, attempted to
          shift the responsibility over to another. Had I known it would afford
          me such a positive shift in perspective and teach me how best to
          relate with affected persons, I would have wasted no time embracing
          this chance with open arms.
        </p>
        <p>
          It not only became my responsibility to ensure that the students under
          my care took their medications appropriately and on time, but it also
          fell on me to encourage them to take on a positive outlook on life.
          One time, one of the dorm girls commented that she expected to live
          for just a short while and therefore didn&apos;t see the need for this
          much education. This was just one of many such remarks they made
          amongst themselves, and sadly, also heard from others. It wasn&apos;t
          a easy task trying to lift their spirits with pep talks and
          motivational stories during the cold nights when their lights seemed
          dim and anxieties heightened.
        </p>
        <p>
          This experience taught me to regard the pain of Sickle Cell patients
          with more than just an offhand expression of sympathy. I realised that
          to be useful to this community of hurting people, we -the more abled
          ones- must endeavour to reach out and get to know them. In doing this,
          we can understand them better and be reminded that they are equally
          deserving of opportunities as everyone else. In my experience, I have
          found that these persons tend to appreciate life and relationships
          more due to the uncertainty that characterises their everyday lives.
          You may even be surprised to find out that they can be some of your
          greatest friends. I realised this after I lost a friend to the disease
          as I was preparing to leave school. Don&apos;t let the worse happen
          before you begin to appreciate these warriors. I am thankful for the
          secret conversations and the giggles we shared during our
          &apos;prep&apos; times. They are such fond memories and will forever
          be remembered and cherished.
        </p>
        <p>
          And so, dear friends, it is not a lost cause to endeavour to help
          persons living with Sickle Cell Disease in any way we can. It starts
          with moving out of our circles -whether comfortable or not- to
          befriend these affected persons and make them feel included, loved
          understood, and appreciated. We all have our parts to play. Let&apos;s
          play it good.
        </p>
      </div>
    </div>
  );
}
