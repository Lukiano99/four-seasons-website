import useActiveSection from "@/hooks/use-active-section";
import { FadeText } from "./magicui/fade-text";
import { links } from "@/routes/paths";

interface HeaderSectionProps {
  title: string;
  description?: string;
}

const HeaderSection = ({ title, description }: HeaderSectionProps) => {
  const currentSection = useActiveSection(links.map((link) => link.sectionId));
  return (
    <>
      {currentSection === "o-nama" && (
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <FadeText
            text={title}
            className="text-4xl font-bold"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
          />
          {description && (
            <FadeText
              text={description}
              className="text-sm font-light text-accent-foreground/80 md:text-lg"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HeaderSection;
