import { links } from "@/routes/paths";
import { ModeToggle } from "./mode-toggle";
import NavItem from "./nav-item";

const Links = () => {
  return (
    <nav>
      <ul className="flex">
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <NavItem link={link} />
            </li>
          );
        })}
        <div className="ml-4">
          <ModeToggle />
        </div>
      </ul>
    </nav>
  );
};

export default Links;
