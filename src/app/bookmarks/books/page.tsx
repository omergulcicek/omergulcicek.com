"use client";

import Link from "next/link";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function Books() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Kitap</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Okuduğum kitapların listesi
      </Bookmarks.PageSubTitle>
    </Bookmarks>
  );
}
