"use client";
import { useRef } from "react";

const Contact = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="kontakt"
      className="flex h-screen items-center justify-center"
    >
      Kontakt
    </div>
  );
};
export default Contact;
