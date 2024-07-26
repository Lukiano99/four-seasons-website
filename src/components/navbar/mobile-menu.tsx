import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { links } from "@/routes/paths";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import useActiveSection from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const DropDownMobileMenu = () => {
  const activeSection = useActiveSection(links.map((link) => link.sectionId));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex items-center justify-center md:hidden"
      >
        <Button variant="ghost" size={"icon"}>
          <MenuIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="block w-screen md:hidden">
        <DropdownMenuLabel className="text-lg">Dobro došli!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map((link, idx) => {
          return (
            <DropdownMenuItem
              className="flex h-12 items-center transition-all"
              key={idx}
            >
              <Button
                className={cn(
                  "w-full justify-start transition-all",
                  activeSection === link.sectionId && "bg-muted",
                )}
                variant={"ghost"}
                onClick={() => {
                  const section = document.getElementById(link.sectionId);
                  section?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {link.label}
              </Button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMobileMenu;
