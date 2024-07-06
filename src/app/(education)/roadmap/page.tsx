import Link from "next/link";

import Container from "@/shared/container";
import Title from "@/ui/title";

export default function Roadmap() {
  return (
    <>
      <Container className="mt-10 md:mt-24 max-w-2xl">
        <Title tag="h1">Yol Haritası</Title>
        <Title tag="h2">Frontend yol haritası</Title>
      </Container>

      <div className="mt-10 md:mt-24">
        <iframe
          src="https://roadmap.sh/r/embed?id=65ed002373b4b18a31f6f307"
          width="100%"
          height="1000px"
        ></iframe>
      </div>
    </>
  );
}
