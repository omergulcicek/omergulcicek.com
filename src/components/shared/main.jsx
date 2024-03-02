"use client";

import { usePathname } from "next/navigation";

import { Container } from "@/shared/container";

const Main = () => {
  const pathname = usePathname();

  return (
    <>
      <main className="flex-1 py-4">
        <Container>Aktif Sayfa: {pathname}</Container>
      </main>
    </>
  );
};

export { Main };
