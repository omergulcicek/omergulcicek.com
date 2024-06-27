"use client";

import Link from "next/link";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function Frontend() {
  return (
    <>
      <Bookmarks>
        <Bookmarks.PageTitle>Frontend</Bookmarks.PageTitle>
        <Bookmarks.PageSubTitle>
          Frontend ile ilgili kaynaklarım
        </Bookmarks.PageSubTitle>
      </Bookmarks>
    </>
  );
}
