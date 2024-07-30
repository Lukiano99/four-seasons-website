import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import useActiveSection from "@/hooks/use-active-section";
import { links } from "@/routes/paths";

type CustomLink = {
  label: string;
  sectionId: string;
  variant?: string;
};

interface NavItemProps {
  link: CustomLink;
}

const NavItem = ({ link }: NavItemProps) => {
  const activeSection = useActiveSection(links.map((link) => link.sectionId));
  return (
    <Button
      variant={link.variant ? "default" : "ghost"}
      className={cn(
        "font-light",
        link.variant && "ml-4 font-semibold transition-all hover:scale-110",
        activeSection === link.sectionId &&
          !link.variant &&
          "bg-accent font-semibold",
        activeSection === link.sectionId &&
          link.variant &&
          "scale-105 font-bold",
      )}
      onClick={() => {
        const section = document.getElementById(link.sectionId);
        section?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <p>{link.label}</p>
    </Button>
  );
};

export default NavItem;
