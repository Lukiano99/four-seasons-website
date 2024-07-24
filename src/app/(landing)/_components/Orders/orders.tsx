"use client";
import { useRef } from "react";

const Orders = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="porudzbine"
      className="flex h-screen items-center justify-center"
    >
      Porudzbine
    </div>
  );
};
export default Orders;
