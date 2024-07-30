"use client";

import { links } from "@/routes/paths";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center bg-muted/20 md:h-[600px]">
      <div className="flex h-full flex-col items-center justify-between pb-20 pt-40 md:w-5/12">
        <div className="flex w-6/12 flex-col justify-between gap-6">
          <h1 className="text-3xl font-bold">Prijavi se na nas newsletter</h1>
          <div className="flex gap-2">
            <Input className="h-14" placeholder="example@gmail.com" />
            <Button size={"lg"} className="h-full">
              Potvrdi
            </Button>
          </div>
          <p className="text-sm leading-6 text-accent-foreground/60">
            Klikom na dugme pristajete na obradu vaših ličnih podataka i na
            primanje specijalnih ponuda
          </p>
        </div>
        <h2>
          © Copyright 2024, All Rights Reserved by <span>Lukiano</span>
        </h2>
      </div>
      <Separator orientation="vertical" className="" />
      <div className="flex h-full flex-col items-center justify-between pb-20 pt-40 md:w-7/12">
        {links.map((link, idx) => {
          return (
            <div
              key={idx}
              className="flex w-fit items-start justify-start text-3xl font-bold text-accent-foreground"
            >
              <p>{link.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
