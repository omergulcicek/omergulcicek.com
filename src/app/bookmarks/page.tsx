"use client";

import Link from "next/link";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function BookmarksPage() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Feyz</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>Tüm yer imlerim</Bookmarks.PageSubTitle>
    </Bookmarks>
  );
}
