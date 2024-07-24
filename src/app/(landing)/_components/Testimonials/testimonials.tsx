"use client";
import { useRef } from "react";

const Testimonials = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="testimonijali"
      className="flex h-screen items-center justify-center"
    >
      Testimonijali
    </div>
  );
};
export default Testimonials;
