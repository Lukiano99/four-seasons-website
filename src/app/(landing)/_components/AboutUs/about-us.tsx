"use client";
import { useRef } from "react";

const AboutUs = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="o-nama"
      className="flex h-screen items-center justify-center"
    >
      O nama
    </div>
  );
};
export default AboutUs;
