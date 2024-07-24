"use client";
import { useRef } from "react";

const FAQs = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="pitanja"
      className="flex h-screen items-center justify-center"
    >
      Pitanja
    </div>
  );
};
export default FAQs;
