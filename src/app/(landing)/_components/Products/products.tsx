"use client";
import { useRef } from "react";

const Products = () => {
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={aboutUsRef}
      id="proizvodi"
      className="flex h-screen items-center justify-center"
    >
      Proizvodi
    </div>
  );
};
export default Products;
