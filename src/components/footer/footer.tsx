"use client";

import { links } from "@/routes/paths";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Container from "../container";
import { Badge } from "../ui/badge";
import { FacebookIcon, InstagramIcon, MailIcon } from "lucide-react";
import FooterLinks from "./links-section";
import NewsletterForm from "./newsletter-form";

const footerItems = [
  { label: "Blog", released: false },
  { label: "Recenzije kupaca", released: false },
  // { label: "Uslovi", released: false },
];

const Footer = () => {
  return (
    // <div className="flex w-full items-center justify-center bg-muted/20 md:h-[600px]">
    <div className="flex w-full justify-center bg-muted/20">
      <Container className="flex h-[700px] w-full flex-col space-y-10 md:h-[600px] md:flex-row-reverse md:items-center md:space-y-0">
        <div className="flex h-1/2 w-full items-center justify-end md:h-full md:w-7/12">
          <FooterLinks />
        </div>
        <Separator
          orientation="vertical"
          className="hidden bg-accent-foreground/20 md:block"
        />
        <div className="flex h-1/2 w-full items-start justify-start md:h-full md:w-5/12">
          <NewsletterForm />
        </div>
      </Container>
    </div>
  );
};
export default Footer;
