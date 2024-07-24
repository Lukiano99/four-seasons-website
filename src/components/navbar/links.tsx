import { cn } from "@/lib/utils";
import { links } from "@/routes/paths";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const Links = () => {
  return (
    <>
      {links.map((link, idx) => {
        return (
          <Button
            key={idx}
            variant={link.variant ? "default" : "ghost"}
            className={cn(
              "font-light",
              link.variant &&
                "ml-4 font-semibold transition-all hover:scale-110",
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
      })}
      <div className="ml-4">
        <ModeToggle />
      </div>
    </>
  );
};

export default Links;
