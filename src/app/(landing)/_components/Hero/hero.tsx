"use client";
import { useRef } from "react";

const Hero = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="hero"
      className="flex h-screen items-center justify-center"
    >
      Glavna Sekcija
    </div>
  );
};
export default Hero;
