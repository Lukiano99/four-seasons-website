"use client";

import Container from "@/components/container";
import SubheaderSection from "@/components/subheader-section";
import { AboutUsAnimation } from "./animation";
import { DockDemo } from "./social-dock";
import ImagesCarousel from "../Hero/images-carousel";
import AboutUsCard from "./about-us-cards";
import AvatarCircles from "@/components/magicui/avatar-circles";
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
const AboutUs = () => {
  const handleAction = () => {
    const section = document.getElementById("proizvodi");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      id="o-nama"
      className="flex w-full flex-col items-center justify-start pt-28 md:pt-32"
    >
      <Container className="flex w-full flex-col gap-20">
        {/* <HeaderSection title="O nama" /> */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <SubheaderSection
            title="Mi smo Four Seasons Design 👋"
            // title="Four Seasons Design. Elegancija, održivost, jedinstvenost."
            description="Posvećeni stvaranju ručno rađenih dasaka za serviranje koje kombinuju prirodne materijale i epoksi smolu sa motivima morskih talasa. Naš cilj je da donesemo održivu eleganciju i jedinstveni dizajn u svaku kuhinju, omogućavajući vam da sa stilom i ljubavlju poslužujete svoje goste"
            classNameTitle=""
            label="Naša priča"
            features={["Tim mladih ljudi", "40+ prodatih dasaka"]}
            action={handleAction}
            actionTitile="Pogledajte Galeriju"
          />
          <div className="flex w-full flex-col items-center justify-start md:w-1/2">
            <AboutUsCard />
            <div className="flex w-full flex-col items-center justify-start gap-4 pt-10 text-2xl font-medium md:flex-row">
              <AvatarCircles numPeople={40} avatarUrls={avatarUrls} /> koji vole
              naše daske 💕
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AboutUs;
