import { cn } from "@/lib/utils";
import { FadeText } from "./magicui/fade-text";

interface HeaderSectionProps {
  title: string;
  description?: string;
  className?: string;
}

const HeaderSection = ({
  title,
  description,
  className,
}: HeaderSectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 md:gap-4",
        className && className,
      )}
    >
      <FadeText
        text={title}
        className="text-4xl font-bold md:text-6xl"
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
  );
};

export default HeaderSection;
