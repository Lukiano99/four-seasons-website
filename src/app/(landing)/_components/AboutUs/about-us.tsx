"use client";

import Container from "@/components/container";
import SubheaderSection from "@/components/subheader-section";
import AboutUsCard from "./about-us-cards";
import AvatarCircles from "@/components/magicui/avatar-circles";
import HeaderSection from "@/components/header-section";
import useActiveSection from "@/hooks/use-active-section";
import { useEffect, useState } from "react";
const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
const AboutUs = () => {
  const sectionId = "o-nama";
  const activeSection = useActiveSection();

  const [isFirstTime, setIsFirstTime] = useState(false);

  const handleAction = () => {
    const section = document.getElementById("proizvodi");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (activeSection === "o-nama") setIsFirstTime(true);
  }, [activeSection]);

  return (
    <div
      id="o-nama"
      className="flex w-full flex-col items-center justify-start pt-28 md:min-h-screen md:pt-32"
    >
      <Container className="flex w-full flex-col gap-20">
        <HeaderSection title="O nama" />
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {activeSection === sectionId || isFirstTime === true ? (
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
          ) : (
            <div className="h-60 w-1/2 animate-pulse rounded-3xl bg-muted/50"></div>
          )}
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
