import type { UsesLogo } from "@/features/uses/constants/uses-logos.constants"
import type { FileRouteTypes } from "@/routeTree.gen"

type Localized = { tr: string; en: string }

export type UsesItem = {
  /** A product name as written everywhere, or words that need a translation. */
  name: string | Localized
  /** An outside page; opens in a new tab. */
  href?: string
  /** A page on this site, such as the library. */
  to?: FileRouteTypes["to"]
  /** Shown before the name; one logo per row. The hardware rows have none. */
  logos?: readonly UsesLogo[]
  /** One line on what it is for, or why. */
  note: Localized
}

export type UsesSection = { id: string; title: Localized; items: readonly UsesItem[] }

/*
 * A draft from what v10, the CV and this repo already say. Every item answers "what for";
 * the tech list stays short, since the home page strip and the CV already list it all.
 */
/** Change with the list, so readers can tell how current it is. `YYYY-MM-DD`. */
export const USES_UPDATED = "2026-11-09"

export const USES_SECTIONS: readonly UsesSection[] = [
  {
    id: "machine",
    title: { tr: "Donanım", en: "Hardware" },
    items: [
      {
        name: 'MacBook Pro 13" (M1, 2020)',
        note: {
          tr: "16 GB RAM. 2021'den beri aynı makine; hâlâ her işe yetiyor.",
          en: "16 GB of RAM. The same machine since 2021; still enough for everything."
        }
      },
      {
        name: "ASUS ROG Swift OLED PG27UCDM",
        href: "https://rog.asus.com/tr/monitors/27-to-31-5-inches/rog-swift-oled-pg27ucdm/",
        note: {
          tr: "4K OLED monitör; kod ve tasarım için keskin yazı ve doğru renkler.",
          en: "A 4K OLED monitor; sharp text and true colors for code and design."
        }
      },
      {
        name: "Logitech G513",
        href: "https://www.logitechg.com/tr-tr/shop/p/g513-backlit-mechanical-gaming-keyboard.920-009322",
        note: { tr: "Mekanik, arka aydınlatmalı klavye.", en: "A backlit mechanical keyboard." }
      },
      {
        name: "Logitech G703 HERO",
        href: "https://www.logitechg.com/tr-tr/shop/p/g703-hero-wireless-gaming-mouse.910-005640",
        note: { tr: "Kablosuz fare.", en: "A wireless mouse." }
      },
      {
        name: "Logitech G733",
        href: "https://www.logitechg.com/tr-tr/shop/p/g733-rgb-wireless-headset.981-000864",
        note: { tr: "Kablosuz kulaklık.", en: "A wireless headset." }
      }
    ]
  },
  {
    id: "editor",
    title: { tr: "Editör ve terminal", en: "Editor and terminal" },
    items: [
      {
        name: "Cursor",
        logos: ["cursor"],
        href: "https://cursor.com",
        note: {
          tr: "Kodu okumak ve küçük düzenlemeler için. İşin çoğunu artık Claude Code ile yapıyorum.",
          en: "For reading code and small edits. Most of the work now happens in Claude Code."
        }
      },
      {
        name: "macOS Terminal",
        logos: ["terminal"],
        note: {
          tr: "Ayrı bir terminal uygulamasına ihtiyaç duymadım.",
          en: "I never needed a separate terminal app."
        }
      },
      {
        name: "pnpm",
        logos: ["pnpm"],
        href: "https://pnpm.io",
        note: {
          tr: "Paket yöneticisi; ViraStack Start da onunla kurulur.",
          en: "The package manager; ViraStack Start installs with it too."
        }
      },
      {
        name: "Git",
        logos: ["git"],
        href: "https://git-scm.com",
        note: { tr: "Sürüm kontrolü.", en: "Version control." }
      }
    ]
  },
  {
    id: "ai",
    title: { tr: "Yapay zekâ", en: "AI" },
    items: [
      {
        name: "Claude Code",
        logos: ["claude"],
        href: "https://claude.com/claude-code",
        note: {
          tr: "Terminalde eşli programlama. Mimari gibi dikkat isteyen işlerde en güçlü modeli, günlük işlerde hızlı olanı seçiyorum.",
          en: "Pair programming in the terminal. The strongest model for work that needs care, such as architecture; the fast one for everyday tasks."
        }
      },
      {
        name: "ViraStack AI",
        logos: ["virastack-ai"],
        href: "https://github.com/virastack/ai",
        note: {
          tr: "Ajanın uyduğu mimari kurallar; bu site de onlarla yazılıyor.",
          en: "The architecture rules the agent follows; this site is written with them too."
        }
      },
      {
        name: "emilkowalski/skills",
        logos: ["emil-skills"],
        href: "https://github.com/emilkowalski/skills",
        note: { tr: "Animasyon ve etkileşim detayları.", en: "Animation and interaction details." }
      },
      {
        name: "jakubkrehel/skills",
        logos: ["jakub-skills"],
        href: "https://github.com/jakubkrehel/skills",
        note: {
          tr: "Yüzey ve erişilebilirlik detayları.",
          en: "Surface and accessibility details."
        }
      }
    ]
  },
  {
    id: "stack",
    title: { tr: "Teknoloji", en: "Stack" },
    items: [
      {
        name: "TypeScript",
        logos: ["typescript"],
        href: "https://www.typescriptlang.org",
        note: { tr: "Her projede, strict modda.", en: "In every project, in strict mode." }
      },
      {
        name: "React",
        logos: ["react"],
        href: "https://react.dev",
        note: {
          tr: "2017'den beri arayüzlerin temeli.",
          en: "The base of my interfaces since 2017."
        }
      },
      {
        name: "Next.js",
        logos: ["nextjs"],
        href: "https://nextjs.org",
        note: {
          tr: "Sunucuda render edilen büyük uygulamalar.",
          en: "Large server-rendered apps."
        }
      },
      {
        name: "TanStack Start, Router, Query",
        logos: ["tanstack"],
        href: "https://tanstack.com",
        note: {
          tr: "Tip güvenli rotalar ve sunucu verisi; bu site TanStack Start ile geliştirildi.",
          en: "Type-safe routes and server data; this site is built with TanStack Start."
        }
      },
      {
        name: "Tailwind CSS",
        logos: ["tailwind"],
        href: "https://tailwindcss.com",
        note: { tr: "Stillerin tamamı.", en: "All of the styling." }
      },
      {
        name: "shadcn/ui",
        logos: ["shadcn"],
        href: "https://ui.shadcn.com",
        note: {
          tr: "Tasarım sistemimin zemini; erişilebilir bileşenleri projeye göre uyarlıyorum.",
          en: "The ground of my design system; accessible components I adapt to each project."
        }
      },
      {
        name: "React Hook Form",
        logos: ["react-hook-form"],
        href: "https://react-hook-form.com",
        note: {
          tr: "Formlar; ViraStack Mask ve Password bunun üstünde.",
          en: "Forms; ViraStack Mask and Password build on it."
        }
      },
      {
        name: "Zod",
        logos: ["zod"],
        href: "https://zod.dev",
        note: {
          tr: "Formlar, API cevapları ve ortam değişkenleri için tek doğrulama.",
          en: "One validation for forms, API responses and environment variables."
        }
      },
      {
        name: "Zustand",
        logos: ["zustand"],
        href: "https://zustand.docs.pmnd.rs",
        note: {
          tr: "Sunucudan gelmeyen, uygulama genelindeki state.",
          en: "App-wide state that does not come from the server."
        }
      },
      {
        name: "Supabase",
        logos: ["supabase"],
        href: "https://supabase.com",
        note: {
          tr: "Veritabanı gereken yan projeler; bu blogun yazıları da orada.",
          en: "Side projects that need a database; this blog's posts live there too."
        }
      }
    ]
  },
  {
    id: "infra",
    title: { tr: "Altyapı, tasarım ve tarayıcı", en: "Infrastructure, design and browser" },
    items: [
      {
        name: "Vercel",
        logos: ["vercel"],
        href: "https://vercel.com",
        note: { tr: "Yayına çıkış.", en: "Deployment." }
      },
      {
        name: "GitHub, GitHub Actions",
        logos: ["github"],
        href: "https://github.com/omergulcicek",
        note: {
          tr: "Kod, incelemeler ve yayından önce çalışan kontroller.",
          en: "Code, reviews and the checks that run before anything ships."
        }
      },
      {
        name: "Figma",
        logos: ["figma"],
        href: "https://figma.com",
        note: { tr: "Arayüz tasarımı.", en: "Interface design." }
      },
      {
        name: "Chrome",
        logos: ["chrome"],
        href: "https://www.google.com/chrome/",
        note: {
          tr: "Hem geliştirme hem günlük kullanım için tek tarayıcı.",
          en: "One browser for both development and everyday use."
        }
      }
    ]
  },
  {
    id: "offline",
    title: { tr: "Ekran dışında", en: "Off screen" },
    items: [
      {
        name: { tr: "Kitaplık", en: "Library" },
        logos: ["library"],
        to: "/{-$lang}/library",
        note: {
          tr: "Çoğu tarih ve İslam düşüncesi üzerine kitaplar.",
          en: "Books, mostly on history and Islamic thought."
        }
      },
      {
        name: { tr: "Film ve diziler", en: "Films and series" },
        logos: ["films"],
        to: "/{-$lang}/films",
        note: { tr: "En sevdiklerim.", en: "My favorites." }
      },
      {
        name: { tr: "Müzik", en: "Music" },
        logos: ["music"],
        to: "/{-$lang}/music",
        note: { tr: "Dinlediklerim.", en: "What I listen to." }
      },
      {
        logos: ["hobbies"],
        name: {
          tr: "Satranç, fotoğrafçılık, ney, resim",
          en: "Chess, photography, the ney, painting"
        },
        note: {
          tr: "Kodun dışında vakit ayırdıklarım.",
          en: "What I make time for away from code."
        }
      }
    ]
  }
]
