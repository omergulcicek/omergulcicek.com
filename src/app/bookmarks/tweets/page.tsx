"use client";

import { Tweet } from "react-tweet";

import Bookmarks from "@/layouts/bookmarks-layout";
import { tweetData } from "@/data/tweetData";

export default function Tweets() {
  if (!tweetData) return null;

  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Tweets</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Yazılım alanında yararlı tweetler
      </Bookmarks.PageSubTitle>

      <Bookmarks.PageContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {tweetData.map(({ id }) => (
            <Tweet key={id} id={id} />
          ))}
        </div>
      </Bookmarks.PageContent>
    </Bookmarks>
  );
}
