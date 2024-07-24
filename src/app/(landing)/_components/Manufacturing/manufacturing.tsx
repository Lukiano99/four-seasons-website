"use client";
import { useRef } from "react";

const Manufacturing = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="izrada"
      className="flex h-screen items-center justify-center"
    >
      Izrada
    </div>
  );
};
export default Manufacturing;
