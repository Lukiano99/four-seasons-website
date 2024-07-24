import WordFadeIn from "@/components/magicui/word-fade-in";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
  width?: string;
}
const Header = ({ className, width }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 md:items-start md:justify-start",
        width,
      )}
    >
      <WordFadeIn
        className={cn(className)}
        words="Daske koje donose morske talase na tvom stolu."
      />
      <p className={cn("w-5/6", className)}>
        Plavi talasi i pena od epoksi smole čine naše daske savršenim za
        posluživanje sa stilom. Održive, ručno rađene i očaravajuće.
      </p>
    </div>
  );
};

export default Header;
