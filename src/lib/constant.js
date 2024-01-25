export const navigationMenu = [
  { text: "Ana Sayfa", link: "/" },
  {
    text: "Yazılar",
    link: "/writing",
    subMenus: [
      {
        text: "Teknik Yazılar",
        description: "HTML, CSS, JavaScript, ES6+, React, NextJS",
        link: "/technical-articles",
        color: "#10b981",
      },
      {
        text: "Kişisel Yazılar",
        description: "Kişisel düşünce, deneyim ve yorumlarım",
        link: "/blog",
        color: "#38bdf8",
      },
    ],
  },
  {
    text: "Eğitim",
    subMenus: [
      {
        text: "Serbest Çalışma",
        link: "/freelance",
        description: "Freelance iş fırsatları",
        color: "#10b981",
      },
      {
        text: "Özel Ders",
        link: "/private-lesson",
        description: "Birebir yada grupça eğitim",
        color: "#38bdf8",
      },
      {
        text: "Bootcamp",
        link: "/bootcamp",
        description: "Frontend kod eğitimi",
        color: "#eab308",
      },
      {
        text: "Yol Haritası",
        link: "/roadmap",
        description: "Frontend yol haritası",
        color: "#ec4899",
      },
    ],
  },
  {
    text: "Hakkında",
    subMenus: [
      {
        text: "Ben Kimim?",
        link: "/about",
        description: "İlgi alanlarım ve sosyal medya hesaplarım",
        color: "#10b981",
      },
      {
        text: "Çalışma Alanım",
        link: "/workspace",
        description: "Bilgisayar, telefon ve kullandığım ekipmanlarım",
        color: "#38bdf8",
      },
    ],
  },
  {
    text: "Yer İşaretleri",
    description: "Yer işaretleri ve kaynakların koleksiyonu.",
    subMenus: [
      {
        text: "Araçlar",
        link: "/stack",
        description: "Kullandığım uygulamalar",
        color: "#10b981",
      },
      {
        text: "Frontend",
        link: "/frontend",
        description: "Frontend ile ilgili kaynaklarım",
        color: "#38bdf8",
      },
      {
        text: "Kitap",
        link: "/books",
        description: "Okuduğum kitapların listesi",
        color: "#eab308",
      },
      {
        text: "Makaleler",
        link: "/reading",
        description: "Okuduğum makalelerin listesi",
        color: "#ef4444",
      },
      {
        text: "Tasarım",
        link: "/design",
        description: "Tasarım ile ilgili kaynaklar",
        color: "#0f766e",
      },
      {
        text: "Tweets",
        link: "/tweets",
        description: "Yazılım alanında yararlı tweetler",
        color: "#0f1419",
        isDarkThemeLogoWhite: true,
      },
      {
        text: "VS Code",
        link: "/vscode",
        description: "Visual Studio Code eklentilerim",
        color: "#33a3eb",
      },
      {
        text: "Web Siteler",
        link: "/websites",
        description: "Karşılaştığım güzel siteler",
        color: "#171717",
        isDarkThemeLogoWhite: true,
      },
      {
        text: "Yazı Tipleri",
        link: "/font",
        description: "Yazı tipi koleksiyonu",
        color: "#ec4899",
      },
    ],
  },
]
