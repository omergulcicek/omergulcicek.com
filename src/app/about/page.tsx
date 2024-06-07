"use client";

import Link from "next/link";

import Container from "@/shared/container";
import Title from "@/ui/title";

export default function About() {
  return (
    <Container className="mt-56 max-w-2xl">
      <Title tag="h2">Hakkında</Title>

      <p className="text-lg leading-8 text-neutral-500 my-2">
        Merhaba 👋🏻, İstanbul'da yaşayan bir yazılım mühendisiyim. <br /> Şu anda{" "}
        <Link
          href="https://www.alisgidis.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-slate-950 font-medium underline"
        >
          @Alışgidiş
        </Link>
        'te bir NextJS projesi üzerinde çalışıyorum. <br /> UI/UX, Web Vitals,
        A11Y Project konularına tutkuluyum.
      </p>

      <p className="text-lg leading-8 text-neutral-500 my-2">
        Turkuaz ve Türkçe Doküman projeleri başta olmak üzere çalışmalarımın
        tamamı açık kaynak. Türkçe kaynak sayısını arttırmak adına yazılım
        alanında çeviriler yapmaktayım. Düzenli olarak makaleler yazıyorum.
      </p>

      <p className="text-lg leading-8 text-neutral-500 my-2">
        Bu site için tek motivasyonum, öğrendiklerimi paylaşmak ve belki birkaç
        kişiyle bağlantı kurmak.{" "}
        <Link
          href="mailto:iletisim@omergulcicek.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-slate-950 font-medium underline"
        >
          iletisim@omergulcicek.com
        </Link>{" "}
        adresinden bana ulaşabilirsin.
      </p>
    </Container>
  );
}
