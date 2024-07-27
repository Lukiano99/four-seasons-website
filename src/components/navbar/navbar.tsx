"use client";
import Container from "../container";
import { Button } from "../ui/button";
import Logo from "./logo";
import Links from "./links";
import DropDownMobileMenu from "./mobile-menu";
import { ModeToggle } from "./mode-toggle";
import ClientOnly from "../client-only";
const Navbar = () => {
  return (
    <div className="fixed z-50 w-full bg-background/90 shadow-sm backdrop-blur-sm">
      <ClientOnly>
        <div className="border-b-[1px] py-2">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <div className="hidden flex-row items-center justify-center md:flex">
                <Links />
              </div>
              <Button
                className="flex w-2/3 md:hidden"
                onClick={() => {
                  const section = document.getElementById("porudzbine");
                  section?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Poruči Odmah
              </Button>
              <div className="block md:hidden">
                <ModeToggle />
              </div>
              <DropDownMobileMenu />
            </div>
          </Container>
        </div>
      </ClientOnly>
    </div>
  );
};

export default Navbar;
