"use client";

import Link from "next/link";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function WebSites() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Web Siteler</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Karşılaştığım güzel siteler
      </Bookmarks.PageSubTitle>
    </Bookmarks>
  );
}
