"use client";

import { BookList } from "@/widgets/book-list";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function Books() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>Kitap</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Okuduğum kitapların listesi
      </Bookmarks.PageSubTitle>
      <Bookmarks.PageContent>
        <BookList />
      </Bookmarks.PageContent>
    </Bookmarks>
  );
}
