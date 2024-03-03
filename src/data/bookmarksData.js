import {
  Book,
  Star,
  BookType,
  Braces,
  Bug,
  Twitter,
  Paintbrush,
} from "lucide-react"

export const bookmarksData = [
  {
    text: "Frontend",
    url: "/bookmarks/frontend",
    icon: <Bug size={16} />,
  },
  {
    text: "Kitap",
    url: "/bookmarks/books",
    icon: <Book size={16} />,
  },
  {
    text: "Tasarım",
    url: "/bookmarks/design",
    icon: <Paintbrush size={16} />,
  },
  {
    text: "Tweets",
    url: "/bookmarks/tweets",
    icon: <Twitter size={16} />,
  },
  {
    text: "VS Code",
    url: "/bookmarks/vscode",
    icon: <Braces size={16} />,
  },
  {
    text: "Yararlı Siteler",
    url: "/bookmarks/websites",
    icon: <Star size={16} />,
  },
  {
    text: "Yazı Stili",
    url: "/bookmarks/fonts",
    icon: <BookType size={16} />,
  },
]
