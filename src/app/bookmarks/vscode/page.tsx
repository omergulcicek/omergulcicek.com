"use client";

import { VSCodeList } from "@/widgets/vscode-list";

import Bookmarks from "@/layouts/bookmarks-layout";

export default function VSCode() {
  return (
    <Bookmarks>
      <Bookmarks.PageTitle>VS Code</Bookmarks.PageTitle>
      <Bookmarks.PageSubTitle>
        Visual Studio Code eklentilerim
      </Bookmarks.PageSubTitle>
      <Bookmarks.PageContent>
        <VSCodeList />
      </Bookmarks.PageContent>
    </Bookmarks>
  );
}
