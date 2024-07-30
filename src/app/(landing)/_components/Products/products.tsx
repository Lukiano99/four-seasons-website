"use client";

import img1 from "@/components/assets/products/img_1.jpg";
import img2 from "@/components/assets/products/img_2.jpg";
import img3 from "@/components/assets/products/img_3.jpg";
import img4 from "@/components/assets/products/img_4.jpg";
import img5 from "@/components/assets/products/img_5.jpg";
import img6 from "@/components/assets/products/img_6.jpg";
import img7 from "@/components/assets/products/img_7.webp";
import img8 from "@/components/assets/mock/img_8.png";
import Container from "@/components/container";
import { cn } from "@/lib/utils";
import GalleryImage from "./galery-image";
import SubheaderSection from "@/components/subheader-section";
import Image from "next/image";
import HeaderSection from "@/components/header-section";

const images = [
  {
    image: img1,
    label: "PD",
    description: "Pravougaona daska",
    text: "Ulepšajte svakodnevicu onih koje volite sa našim unikatnim daskama za serviranje. Ručno rađene i inspirisane lepotom mora, naše daske su savršen poklon za svaku priliku. Iznenadite ih elegancijom i praktičnošću",
  },
  {
    image: img2,
    label: "PD & OD",
    description: "Sjajan tandem",
    text: "Poklonite komadić mora sa našim prelepim daskama za serviranje. Svaka daska je ručno izrađena sa pažnjom i ljubavlju, pružajući jedinstven i nezaboravan doživljaj. Idealan poklon za one koji cene lepotu i kvalitet",
  },
  {
    image: img3,
    label: "OD",
    description: "Okrugla daska",
    text: "Unesite talase radosti u život voljenih osoba sa našim daskama za serviranje. Ručno rađene i održive, ove daske su savršen spoj funkcionalnosti i estetike. Učinite svaki obrok posebnim",
  },
  {
    image: img4,
    label: "OD",
    description: "Okrugla daska",
    text: "Probudite osmeh na licu uz poklon koji odiše elegancijom i umetnošću. Naše daske za serviranje, inspirisane morskim motivima, donose unikatnost i toplinu svakom stolu. Savršeno za posebne trenutke",
  },
  {
    image: img5,
    label: "OD",
    description: "Okrugla daska",
    text: "Oduševite svoje najdraže sa ručno rađenim daskama za serviranje koje kombinuju prirodne materijale i epoksi smolu. Svaka daska priča priču o ljubavi prema detaljima i posvećenosti kvalitetu. Nezaboravan poklon za sve prilike.",
  },
  {
    image: img6,
    label: "PD & OD",
    description: "Elegancija",
    text: "Poklonite luksuz i praktičnost u jednom sa našim daskama za serviranje. Ručno rađene i dizajnirane da inspirišu, ove daske su savršen dar za svakoga ko uživa u lepoti i funkcionalnosti. Neka vaši pokloni budu posebni",
  },
  {
    image: img7,
    label: "PD & OD",
    description: "Tandem iz snova",
    text: "Učinite posebne trenutke još posebnijim sa našim prelepim daskama za serviranje. Savršen poklon za one koji vole eleganciju i kvalitet, naše daske donose toplinu i radost svakom domu. Iznenadite ih jedinstvenim darom",
  },
];

const Products = () => {
  const handleAction = () => {
    const section = document.getElementById("kontakt");
    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      id="proizvodi"
      className="flex w-full flex-col items-center justify-start pt-28 md:min-h-screen md:pt-32"
    >
      <Container className="flex w-full flex-col items-center justify-center space-y-20 overflow-hidden py-4 md:space-y-12">
        <div className="flex flex-col items-center justify-center space-y-12 md:flex-row md:justify-between md:space-y-0">
          <Image
            className={cn(
              "hidden h-[700px] w-1/2 object-cover transition-all md:block md:hover:rotate-12 md:hover:scale-125",
            )}
            src={img8}
            width={1200}
            height={1200}
            alt="product-image"
          />
          <HeaderSection
            className="flex md:hidden"
            title="Proizvodi"
            description="Neka vam naši talasi uzburkaju osećanja"
          />
          <SubheaderSection
            title="Umetnost u svakom detalju 💎"
            // title="Four Seasons Design. Elegancija, održivost, jedinstvenost."
            description="Pogledajte našu kolekciju ručno rađenih dasaka za serviranje, svaka daska je jedinstvena kreacija inspirisana lepotom mora. Otkrijte savršen spoj estetike i funkcionalnosti kroz našu galeriju"
            classNameTitle="w-1/2"
            label="Naši proizvodi"
            features={[
              "75% naših dasaka je personalizovano",
              "Svaka daska je unikatna",
              "Savršeno za serviranje i dekoraciju",
            ]}
            action={handleAction}
            actionTitile="Kontaktirajte nas"
          />
        </div>
        <HeaderSection
          title="Galerija"
          description="Zavirite u našu kolekciju slika i uživajte"
        />

        <div className="grid w-full auto-rows-[500px] grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img, idx) => {
            return (
              <GalleryImage
                key={idx}
                gridClassName={cn(idx != 0 && idx % 3 === 0 && "md:col-span-2")}
                imageClassName={cn(idx != 0 && idx % 3 === 0 && "md:rotate-90")}
                image={img.image}
                description={img.description}
                label={img.label}
                text={img.text}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Products;
{
  /* <Image
              className="size-42 rounded-3xl object-cover object-bottom"
              src={circleBoardImg}
              width={800}
              height={800}
              alt="product-image"
            /> */
}
