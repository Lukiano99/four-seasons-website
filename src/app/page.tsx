import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4c60bb] to-[#020769] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Four Seasons Website
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">Great things comming soon</p>
          </div>
        </div>
        <p className="font-semibold">
          By{" "}
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/luka-stojadinovic-08ab971b9/"}
            className="italic underline"
          >
            Lukiano
          </Link>
        </p>
      </main>
    </HydrateClient>
  );
}
