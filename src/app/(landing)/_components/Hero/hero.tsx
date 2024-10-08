"use client";
import Container from "@/components/container";
import Header from "./header";
import Image from "next/image";
import heroImg from "public/images/hero-img.jpg";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/magicui/shiny-button";
import { links } from "@/routes/paths";
import ImagesCarousel from "./images-carousel";
import { ChevronRightIcon } from "lucide-react";
import heroImage from "@/components/assets/products/img_7.webp";

const Hero = () => {
  return (
    <div id="hero" className="flex items-center md:h-screen">
      <Container className="flex flex-col pt-32 md:gap-8 md:pt-0">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-0">
          <Header
            className="z-10 text-center md:text-left"
            width="md:w-3/5 w-full"
          />
          <div className="flex w-fit items-center gap-4 md:hidden">
            <div
              onClick={() => {
                const sectionId =
                  links.find((link) => link.sectionId === "proizvodi")
                    ?.sectionId ?? "#";
                const section = document.getElementById(sectionId);
                section?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <ShinyButton text="Saznaj više" className="z-10" />
            </div>
            <Button
              variant={"default"}
              className="z-10 flex w-fit gap-2 hover:bg-primary hover:text-accent"
              onClick={() => {
                const sectionId =
                  links.find((link) => link.sectionId === "porudzbine")
                    ?.sectionId ?? "#";
                const section = document.getElementById(sectionId);
                section?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Poruči svoju dasku
              <ChevronRightIcon strokeWidth={1.1} />
            </Button>
          </div>
          <Image
            src={heroImg.src}
            alt="hero image"
            width={600}
            height={600}
            className="z-10 hidden size-40 scale-110 cursor-pointer rounded-lg object-cover shadow-lg transition-all hover:rotate-12 hover:scale-125 md:block md:size-96 md:rounded-full"
          />
          <div className="flex md:hidden">
            <ImagesCarousel />
          </div>
        </div>
        <div className="hidden w-fit items-center gap-4 md:flex">
          <div
            onClick={() => {
              const sectionId =
                links.find((link) => link.sectionId === "proizvodi")
                  ?.sectionId ?? "#";
              const section = document.getElementById(sectionId);
              section?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <ShinyButton text="Saznaj više" className="z-10" />
          </div>
          <Button
            variant={"default"}
            className="z-10 flex w-fit gap-2 transition-all hover:bg-primary hover:text-accent md:hover:scale-110"
            onClick={() => {
              const sectionId =
                links.find((link) => link.sectionId === "porudzbine")
                  ?.sectionId ?? "#";
              const section = document.getElementById(sectionId);
              section?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Poruči svoju dasku
            <ChevronRightIcon strokeWidth={1.1} />
          </Button>
        </div>
        <Image
          src={heroImage}
          alt="hero image"
          fill
          className="left-0 top-0 z-0 object-cover brightness-75"
        />

        <div className="absolute inset-x-0 top-0 z-0 h-screen w-full bg-gradient-to-t from-background/40 to-transparent backdrop-blur-[4px]" />
      </Container>
    </div>
  );
};
export default Hero;
