"use client";

import Hero from "@/components/widgets/hero";
import Container from "@/shared/container";

export default function Home() {
  return (
    <Container className="gap-6 pt-56">
      <Hero>
        <div>
          <Hero.Hello />
          <Hero.Name />
        </div>

        <div className="max-w-3xl text-[32px] leading-[44px]">
          <Hero.Strong /> <Hero.Desc />
        </div>
      </Hero>
    </Container>
  );
}
