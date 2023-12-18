export const navigationMenu = [
  { text: "ana sayfa", link: "/" },
  {
    text: "yazılarım",
    link: "/writing",
    subMenus: [
      {
        text: "teknik yazılar",
        description: "Çeşitli konularda teknik yazılar.",
        link: "/technical-articles",
      },
      {
        text: "kişisel yazılar",
        description: "Kişisel düşünceler, deneyimler ve yorumlar",
        link: "/personal-articles",
      },
    ],
  },
  { text: "hakkında", link: "/about" },
  { text: "yer imleri", link: "/bookmarks" },
]
