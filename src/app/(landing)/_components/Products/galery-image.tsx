import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

interface GalleryImageProps {
  gridClassName?: string;
  imageClassName?: string;
  image: StaticImageData;
  label: string;
  description: string;
  text: string;
}
const GalleryImage = ({
  gridClassName,
  imageClassName,
  image,
  label,
  description,
  text,
}: GalleryImageProps) => {
  const onActionClick = () => {
    document.getElementById("porudzbine")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className={cn(
        "group/item relative flex min-w-full items-center justify-center overflow-hidden rounded-2xl bg-muted shadow-xl transition-all hover:scale-[101%]",
        gridClassName,
      )}
    >
      <Image
        className={cn(
          "size-42 object-cover object-bottom transition-all md:group-hover/item:scale-105",
          imageClassName,
        )}
        src={image}
        width={800}
        height={800}
        alt="product-image"
      />
      <div
        id={`image-overlay-${image.src.toString()}`}
        className="absolute bottom-0 hidden size-full flex-col bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm transition-all group-hover/item:flex group-focus/item:flex group-active/item:flex md:group-hover/item:flex"
      >
        <div className="flex size-full flex-col items-start justify-between px-10 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold md:text-7xl">{label}</h1>
            <Separator className="bg-accent-foreground" />
            <p className="text-lg font-normal italic">{description}</p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base font-light">{text}</p>
            <Button
              className="flex w-fit animate-bounce gap-0 transition-all md:hover:gap-2"
              onClick={onActionClick}
            >
              Poruči odmah
              <ChevronRightIcon size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
