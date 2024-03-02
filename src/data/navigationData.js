import {
  Armchair,
  Bookmark,
  GraduationCap,
  MessageCircle,
  PencilLine,
  Sparkles,
  User,
} from "lucide-react"

export const navigationData = [
  {
    key: "1",
    text: "Ana Sayfa",
    url: "/",
    icon: <Sparkles size={16} />,
  },
  {
    key: "2",
    text: "Yazılar",
    url: "/blog",
    icon: <PencilLine size={16} />,
  },
  {
    key: "3",
    text: "Eğitim",
    url: "/education",
    icon: <GraduationCap size={16} />,
  },
  {
    key: "4",
    text: "Hakkında",
    url: "/about",
    icon: <User size={16} />,
  },
  {
    key: "5",
    text: "Çalışma Alanı",
    url: "/workspace",
    icon: <Armchair size={16} />,
  },
  {
    key: "6",
    text: "Yer İmleri",
    url: "/bookmarks",
    icon: <Bookmark size={16} />,
  },
  {
    key: "/",
    text: "İletişim",
    icon: <MessageCircle size={16} />,
    modal: true,
  },
]
