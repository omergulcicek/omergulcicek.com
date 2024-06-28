"use client";

import Link from "next/link";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function Tweets() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Tweets</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Yazılım alanında yararlı tweetler
      </Bookmarks.PageSubTitle>
    </Bookmarks>
  );
}
