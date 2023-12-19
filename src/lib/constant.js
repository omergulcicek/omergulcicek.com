export const navigationMenu = [
  { text: "Ana Sayfa", link: "/" },
  {
    text: "Yazılarım",
    link: "/writing",
    subMenus: [
      {
        text: "Teknik Yazılar",
        description: "HTML, CSS, JavaScript, ES6+, React, NextJS",
        link: "/technical-articles",
      },
      {
        text: "Kişisel Yazılar",
        description: "Kişisel düşünce, deneyim ve yorumlarım",
        link: "/personal-articles",
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
      },
      {
        text: "Özel Ders",
        link: "/private-lesson",
        description: "Birebir yada grupça eğitim",
      },
      {
        text: "Bootcamp",
        link: "/bootcamp",
        description: "Frontend kod eğitimi",
      },
      {
        text: "Yol Haritası",
        link: "/roadmap",
        description: "Frontend yol haritası",
      },
    ],
  },
  {
    text: "Hakkında",
    subMenus: [
      {
        text: "Ben Kimim?",
        link: "/about",
        description: "İlgi alanlarım",
      },
      {
        text: "Çalışma Alanım",
        link: "/workspace",
        description: "Bilgisayar, telefon ve kullandığım ekipmanlarım",
      },
    ],
  },
  {
    text: "Yer İşaretleri",
    description: "Yer işaretleri ve kaynakların koleksiyonu.",
    subMenus: [
      {
        text: "Uygulamalar ve Araçlar",
        link: "/tools",
        description: "Kullandığım uygulamalar ve araçlar",
      },
      {
        text: "Yazı Tipleri",
        link: "/font",
        description: "Yazı tipi koleksiyonu",
      },
      {
        text: "Frontend",
        link: "/frontend",
        description: "Frontend ile ilgili kaynaklarım",
      },
      {
        text: "Kitap",
        link: "/book",
        description: "Okuduğum kitap listesi",
      },
      {
        text: "VS Code",
        link: "/vscode",
        description: "Visual Studio Code eklentilerim",
      },
      {
        text: "Yardımcı Araçlar",
        link: "/tools",
        description: "Hayatı kolaylaştıran araçlar",
      },
    ],
  },
]
