"use client";

import Bookmarks from "@/layouts/bookmarks-layout";
import { DesignList } from "@/widgets/design-list";

export default function Design() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Tasarım</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Tasarım ile ilgili kaynaklarım
      </Bookmarks.PageSubTitle>
      <Bookmarks.PageContent>
        <DesignList />
      </Bookmarks.PageContent>
    </Bookmarks>
  );
}
