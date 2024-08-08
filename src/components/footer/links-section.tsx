import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { links } from "@/routes/paths";
import { Button } from "../ui/button";
import Link from "next/link";
import FooterLinkItem from "./footer-link-item";
const footerItems = [
  { label: "Blog", released: false },
  { label: "Recenzije kupaca", released: false },
  // { label: "Uslovi", released: false },
];
const FooterLinks = () => {
  return (
    <div className="flex w-full justify-between px-0 py-8 md:w-10/12">
      <div className="flex flex-col items-start space-y-6">
        {links.map((link, idx) => (
          <Button
            variant={"ghost"}
            key={idx}
            className="group/button flex items-center justify-center gap-2 p-0 text-xl font-medium transition-all hover:scale-105 hover:bg-transparent hover:text-blue-500 dark:hover:text-blue-300 md:font-bold"
            onClick={() => {
              document.getElementById(link.sectionId)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {link.label}
            <ArrowUpRightIcon className="rotate-90 scale-0 text-transparent transition-all group-hover/button:rotate-0 group-hover/button:scale-100 group-hover/button:text-blue-500 dark:group-hover/button:text-blue-200" />
          </Button>
        ))}
      </div>
      <div className="flex h-full flex-col items-start space-y-6 text-xl font-light">
        {footerItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <FooterLinkItem label={item.label} released={item.released} />
          </div>
        ))}
        <div className="flex items-center justify-start gap-4">
          <Link
            target="_blank"
            href="https://www.instagram.com/four_seasons.design/"
            className="group/instagram"
          >
            <InstagramIcon
              size={22}
              strokeWidth={1.5}
              className="transition-all group-hover/instagram:scale-110 group-hover/instagram:text-orange-500 dark:group-hover/instagram:text-orange-300"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/four_seasons.design/"
            className="group/instagram"
          >
            <FacebookIcon
              size={22}
              strokeWidth={1.5}
              className="transition-all group-hover/instagram:scale-110 group-hover/instagram:text-blue-500 dark:group-hover/instagram:text-blue-400"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/four_seasons.design/"
            className="group/instagram"
          >
            <MailIcon
              size={22}
              strokeWidth={1.5}
              className="transition-all group-hover/instagram:scale-110 group-hover/instagram:text-red-500 dark:group-hover/instagram:text-red-400"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
