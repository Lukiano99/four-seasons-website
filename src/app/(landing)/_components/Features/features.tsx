"use client";
import { useRef } from "react";

const Features = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="karakteristike"
      className="flex h-screen items-center justify-center"
    >
      Karakteristike
    </div>
  );
};
export default Features;
