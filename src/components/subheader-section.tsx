import { cn } from "@/lib/utils";
import { FadeText } from "./magicui/fade-text";
import { Badge } from "./ui/badge";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

interface SubheaderSectionProps {
  title: string;
  description?: string;
  label?: string;
  features?: string[];
  action?: () => void;
  actionTitile?: string;
  classNameTitle?: string;
  classNameDescription?: string;
}
const SubheaderSection = ({
  title,
  description,
  label,
  features,
  action,
  actionTitile,
  classNameTitle,
  classNameDescription,
}: SubheaderSectionProps) => {
  return (
    <div className="flex w-full flex-col space-y-12 md:w-1/2">
      <div className="flex flex-col gap-4">
        {label && (
          <Badge className="flex w-fit items-center justify-center border border-accent-foreground bg-background py-1 text-sm font-normal text-accent-foreground hover:bg-background">
            {label}
          </Badge>
        )}

        <FadeText
          text={title}
          className={cn(
            "text-4xl font-semibold tracking-wide md:text-5xl",
            classNameTitle && classNameTitle,
          )}
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
        />
      </div>
      {description && (
        <FadeText
          text={description}
          className={cn(
            "text-lg font-normal text-accent-foreground/70",
            classNameDescription && classNameDescription,
          )}
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
        />
      )}
      {features && (
        <div className="grid grid-cols-1 gap-4 md:w-fit md:grid-cols-2">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="flex w-full items-center justify-start gap-2"
            >
              <CheckIcon className="flex items-center justify-center rounded-full bg-muted p-1 text-accent-foreground" />
              <p>{feat}</p>
            </div>
          ))}
        </div>
      )}
      {action && (
        <div className="flex items-center justify-normal">
          <Button
            className="flex items-center gap-2 transition-all md:hover:gap-4"
            onClick={action}
          >
            {actionTitile ?? "Saznaj vise"}
            <ChevronRightIcon size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SubheaderSection;
