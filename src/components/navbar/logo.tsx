"use client";

import LogoIcon from "../assets/logo-icon";

const Logo = () => {
  return (
    <div
      className="flex cursor-pointer items-center justify-start gap-2 transition-all hover:scale-110"
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {/* <Image
        alt="logo"
        className="cursor-pointer transition-all hover:scale-110 md:block"
        height="34"
        width="34"
        src="/images/logo.png"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      /> */}
      <LogoIcon />
      <h1 className="hidden pt-1.5 text-end text-3xl font-light tracking-wider md:flex">
        FSD
      </h1>
    </div>
  );
};

export default Logo;
