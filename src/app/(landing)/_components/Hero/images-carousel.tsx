import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import img1 from "public/images/img_1.jpg";
import img2 from "public/images/img_2.jpg";
import img3 from "public/images/img_3.jpg";
import img4 from "public/images/img_4.jpg";
import img5 from "public/images/img_5.jpg";
import img6 from "public/images/img_6.jpg";
const images = [
  {
    alt: "img1",
    src: img1,
  },
  {
    alt: "img2",
    src: img2,
  },
  {
    alt: "img3",
    src: img3,
  },
  {
    alt: "img4",
    src: img4,
  },
  {
    alt: "img5",
    src: img5,
  },
  {
    alt: "img6",
    src: img6,
  },
];

interface ImagesCarouselProps {
  className?: string;
}
const ImagesCarousel = ({}: ImagesCarouselProps) => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="z-10 block w-full max-w-xs md:hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="w-full">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
              className="rounded-md object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImagesCarousel;
