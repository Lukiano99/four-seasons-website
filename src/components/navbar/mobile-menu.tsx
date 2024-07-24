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

const DropDownMobileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block md:hidden">
        <Button variant="ghost" size={"icon"}>
          <MenuIcon />
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
                className="w-full justify-start transition-all"
                variant={"ghost"}
                onClick={() => {
                  const section = document.getElementById("porudzbine");
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
