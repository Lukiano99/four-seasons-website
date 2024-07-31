import { FacebookIcon, InstagramIcon, MailIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { links } from "@/routes/paths";
const footerItems = [
  { label: "Blog", released: false },
  { label: "Recenzije kupaca", released: false },
  // { label: "Uslovi", released: false },
];
const FooterLinks = () => {
  return (
    <div className="flex w-full justify-between px-0 py-8 md:w-10/12">
      <div className="flex flex-col items-start space-y-6 text-xl font-medium">
        {links.map((link, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {link.label}
          </div>
        ))}
      </div>
      <div className="flex h-full flex-col items-start space-y-6 text-xl font-light">
        {footerItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {item.label}
          </div>
        ))}
        <div className="flex items-center justify-start gap-4">
          <InstagramIcon size={18} strokeWidth={1.2} />
          <FacebookIcon size={18} strokeWidth={1.2} />
          <MailIcon size={18} strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
