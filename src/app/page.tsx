import Hero from "@/ui/hero";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 pt-56">
      <Hero>
        <div>
          <Hero.Hello />
          <Hero.Name />
        </div>

        <div className="max-w-3xl text-[32px] leading-[44px]">
          <Hero.Strong /> <Hero.Desc />
        </div>
      </Hero>
    </main>
  );
}
