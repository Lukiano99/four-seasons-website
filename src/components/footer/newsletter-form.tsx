import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterForm = () => {
  return (
    <div className="flex size-full flex-col items-start justify-center space-y-4 md:w-9/12">
      <h1 className="text-3xl font-semibold">Prijavi se na newsletter</h1>
      <div className="flex h-28 w-full flex-col items-center justify-center space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <Input
          placeholder="example@gmail.com"
          className="h-1/2 border-none bg-muted font-semibold"
        />
        <Button className="h-1/2 w-full md:w-fit">Potvrdi</Button>
      </div>
      <p className="pb-10 text-sm font-light text-accent-foreground/80 md:p-0">
        Klikom na dugme pristajete na obradu vaših ličnih podataka i na primanje
        specijalnih ponuda
      </p>
      <h2 className="pb-6 md:p-0">
        © Copyright 2024, All Rights Reserved by{" "}
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/luka-stojadinovic-08ab971b9/"}
          className="font-bold underline underline-offset-4"
        >
          Lukiano
        </Link>
      </h2>
    </div>
  );
};

export default NewsletterForm;
