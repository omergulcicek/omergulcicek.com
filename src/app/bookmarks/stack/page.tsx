import Link from "next/link";

import Container from "@/shared/container";
import Title from "@/ui/title";

export default function About() {
  return (
    <Container className="mt-10 md:mt-24 max-w-2xl">
      <Title tag="h2">Araçlar</Title>
      <Title tag="h3">Kullandığım uygulamalar</Title>
    </Container>
  );
}