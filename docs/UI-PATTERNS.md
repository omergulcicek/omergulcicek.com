# UI Patterns — Link, Typography & Card Standards

> **SSOT:** Prose typography, inline links, section headings, and interactive project cards. Implementation lives in `src/components/shared/`; do not duplicate class strings in feature code.

---

## Typography hierarchy

**Styles:** `src/components/shared/prose.styles.ts`

| Level | SSOT | Classes | Use |
| --- | --- | --- | --- |
| Page title | `PageHeader` | `text-lg font-semibold tracking-tight text-foreground` | Sayfa `h1` |
| Section title | `SectionHeading` | `text-base font-semibold tracking-tight text-foreground` | Bölüm `h2` |
| Card / list title | inline | `text-base font-medium` | Kart başlığı, deneyim satırı |
| Body | `proseParagraphClass` | `text-base leading-relaxed text-muted-foreground` | Paragraflar |
| Prose flow gap | `proseFlowClass` | `flex flex-col gap-4` | Ardışık paragraflar / liste maddeleri arası boşluk |
| Bleed section | `bleedSectionClass` | `mx-auto w-full max-w-5xl px-4 sm:px-6` | Container dışı marquee, GitHub takvimi |
| Inline emphasis | `ProseEmphasis` | `font-medium text-foreground` | Paragraf içi vurgu |
| Link | `ProseLink` | `text-foreground underline` | Tıklanabilir metin |

**Görsel sıra (güçlü → zayıf):** page title → section title → link → emphasis → body → card title (bağlam içinde)

### Body paragraph

```tsx
import { proseParagraphClass } from "@/components/shared/prose.styles"

<p className={proseParagraphClass}>…</p>
```

### Prose flow (paragraph spacing)

Hero ve sayfa metinlerinde ardışık paragraflar arası boşluk: **`gap-4`** (16px). SSOT: `proseFlowClass`.

```tsx
import { proseFlowClass, proseParagraphClass } from "@/components/shared/prose.styles"

<div className={proseFlowClass}>
  <p className={proseParagraphClass}>Paragraf 1</p>
  <p className={proseParagraphClass}>Paragraf 2</p>
</div>
```

Referans: `src/features/home/components/Hero.tsx`, `src/features/about/components/about-page.tsx`.

### Inline emphasis (not bold)

`font-medium text-foreground` — `<strong>` veya `font-semibold` kullanma.

```tsx
import { ProseEmphasis } from "@/components/shared/prose-emphasis"

<p className={proseParagraphClass}>
  Özellikle <ProseEmphasis>frontend kaynaklarımı</ProseEmphasis> burada tutuyorum.
</p>
```

### Section heading

```tsx
import { SectionHeading } from "@/components/shared/SectionHeading"

<SectionHeading>Uygulamalar</SectionHeading>
```

### Named entities vs links

Aynı isim hem tanım hem bağlantı ise **her zaman `ProseLink`** — `<strong>` ile değiştirme.

```tsx
<ProseLink href={EXTERNAL_LINKS.virastack}>ViraStack</ProseLink>, bir frontend projesine…
```

### Bans

- Raw `<strong>` in prose (use `ProseEmphasis`)
- `text-base font-medium` on section `h2` (too close to card titles)
- Duplicating paragraph/heading class strings

### Literary italic

Hero gibi duygusal vurgu için `<em>` kullanılabilir; ağırlık vurgusu için `ProseEmphasis`.

---

## Prose links (Hero standard)

**Component:** `ProseLink`, `ProseIconLink`, `ProseRouterLink` — `src/components/shared/prose-link.tsx`

Reference implementation: `src/features/home/components/Hero.tsx`

### Default (body copy)

Use inside paragraphs and page intros. Always underlined; foreground text color (not `text-primary`).

```tsx
import { ProseLink } from "@/components/shared/prose-link"

<ProseLink href={EXTERNAL_LINKS.virastack}>ViraStack</ProseLink>
```

**Classes (default):** `text-foreground underline`

- `http` hrefs: `target="_blank"` + `rel="noopener noreferrer"` applied automatically
- `mailto:` and internal paths: no `target` / `rel`

### With leading icon

Underline only the label; icon sits inline.

```tsx
import { ProseIconLink } from "@/components/shared/prose-link"

<ProseIconLink href={EXTERNAL_LINKS.email} icon={<Mail className="size-3.5 shrink-0" strokeWidth={2} />}>
  e-posta
</ProseIconLink>
```

**Classes:** `text-foreground inline-flex items-center gap-1.5` + child `<span className="underline">`

### Internal route

```tsx
import { ProseRouterLink } from "@/components/shared/prose-link"

<ProseRouterLink to="/projects">Tüm projeler</ProseRouterLink>
```

### Muted variant (secondary lists only)

Archive links, bookmark preview rows — de-emphasized; not for hero/body prose.

```tsx
<ProseLink href={url} variant="muted">Turkuaz</ProseLink>
```

**Classes:** `text-muted-foreground text-sm underline-offset-4 hover:underline`

### Bans

- `text-primary underline-offset-4 hover:underline` in prose (legacy pattern)
- Raw `<a>` with duplicated link classes in feature pages — use `ProseLink` family

---

## Interactive cards (project cards)

**Styles:** `src/components/shared/interactive-card.styles.ts`  
**Component:** `FeaturedProjectCard` — `src/features/projects/components/featured-project-card.tsx`

Shared by home (`FeaturedProjects`) and `/projects` — single component, no duplication.

### Live card

```ts
getInteractiveCardClassName(false)
// group flex flex-col gap-3 rounded-xl border p-4 ring-1 ring-offset-4
// border-border bg-[#fff] ring-border ring-offset-[#fcfcfc]
// hover:border-foreground/10 hover:ring-foreground/8
// dark:bg-[#0b0b0b] dark:ring-offset-[#0f0f0f]
```

Hover affordance: `ChevronRight` with `interactiveCardChevronClass` (scale 0.25→1, opacity 0→1, `cubic-bezier(0.2, 0, 0, 1)`).

### Coming soon card (`status: coming_soon`)

```ts
getInteractiveCardClassName(true)
// border-dashed border-border/70 bg-muted/20 ring-border/60
// hover:border-border hover:bg-muted/30
```

- Icon: `opacity-45 saturate-50`
- Title: `text-muted-foreground`
- Badge: amber pill + pulse dot (`ComingSoonBadge` in `featured-project-card.tsx`)
- Chevron replaced by badge

### Usage

```tsx
import { FeaturedProjectCard } from "@/features/projects/components/featured-project-card"

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
  {projects.map((project) => (
    <FeaturedProjectCard key={project.id} project={project} />
  ))}
</div>
```

New clickable card surfaces that match project cards must import `getInteractiveCardClassName` from `interactive-card.styles.ts` — do not fork ring/hover values.

---

## Related

- Section CTAs with arrow: `ArrowLink` — `src/components/shared/ArrowLink.tsx`
- Cursor rules: `.cursor/rules/ui-components.mdc`
- Projects page spec: `docs/PROJECTS.md`
