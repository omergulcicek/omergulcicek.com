---
name: blog-post
description: Workflow for writing, editing and publishing a new post on omergulcicek.com — technical posts under /blog and personal notes under /notlar. Use when the user asks to draft, outline, edit, title, tag or publish a post or note, or to prepare its Supabase row or images. Always use together with the writing-voice skill.
---

# Blog post

Posts live in Supabase (`blog_posts`) and render through the blog feature. This skill covers new posts only: never rewrite, retitle or retag existing posts unless the user names them.

Read and follow the `writing-voice` skill first. Everything here adds to it.

## 1. Pick the section

| Category | Route | Use for | Tag pool |
| --- | --- | --- | --- |
| `technical` | `/blog/{slug}` | Frontend, architecture, tools, ViraStack, project internals | `BLOG_TECHNICAL_TAG_POOL` |
| `personal` | `/notlar/{slug}` | Yearly reviews, experiences, books, films, travel, thoughts | `BLOG_PERSONAL_TAG_POOL` |

Tag pools are in `src/features/blog/constants/blog.constants.ts`. Use at most 3 tags, all from the matching pool. A new tag needs the user's approval, then an entry in the pool and an icon in `src/features/blog/components/blog-tag-icon.tsx`.

If the category is unclear (career advice, a personal project), ask.

## 2. Metadata

- **Title:** short, concrete, no clickbait. Prefer `Konu: alt başlık` ("TanStack Start mı, Next.js mi? 2026 Karşılaştırması", "Satranç: Blitz Deneyimim", "Footy: Futbol Bilgini Sahaya Yansıt"). A real question is allowed as a title.
- **Slug:** starts with `/`, lowercase ASCII, Turkish letters transliterated (ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u), words joined by `-`. Example: `/satranc-blitz-deneyimim`. Never reuse or change an existing slug.
- **Description:** one sentence with a verb, ~120–160 characters, no hype. It is the list summary and the SEO description.
- **Locale:** `tr` unless the whole post is in English (`en`).
- **Interactive:** `true` only when the post embeds a live demo component.
- **Featured:** technical posts only; add the slug to `featuredPosts` in `src/constants/me.json` (max 6) when the user asks.

## 3. Structure

Default length 400–900 words. Write long form only when the user asks.

- **Intro:** 1–2 sentences of problem or context. Never "Bu yazıda…".
- **Body:** 2–4 `##` sections with concrete headings ("Ne Yapıyor?", "Kaynak Seçimi", "Neden Blitz?"). Short paragraphs; lists only when the content is truly a list.
- **Closing:** one practical sentence and, if relevant, one link (GitHub, product, source). Personal reviews may end with a score (`4/5`) and a soft recommendation. No "Sonuç olarak".

Templates by type:

- **Technical / decision:** context → what changed or what it does → why (the reasoning) → practical result + link.
- **Product (ViraStack):** the problem it removes → Ne Yapıyor? → install or one example → what it guarantees (provable) → site + GitHub links.
- **Personal review (book, film, series):** short summary without spoilers → what worked (concrete scenes) → what did not (honest, then balanced) → Genel Değerlendirme with score.
- **Personal experience / yearly review:** the concrete fact first (years, numbers) → 2–3 sections on what it taught or changed → one honest admission → short closing thought.

## 4. Reference paragraphs (match rhythm, do not copy)

Technical opening:

> Yapay zekâ ajanlarıyla çalışmak işi hızlandırdı, fakat kod yazmayı ve okumayı da azalttı. Temeller zamanla aklımızdan siliniyor; öğrenmek istediğimizde de hangi kaynağa güveneceğimizi seçmek başlı başına zaman alıyor.

Personal opening with concrete facts and an admission:

> 2018'den beri chess.com'da 5+0 blitz oynuyorum. Turnuva hedefim yok; yatmadan önce birkaç maç atmak yıllardır süren bir alışkanlık. Usta değilim - ama bu hobi bana kendi seviyemde bir şeyler öğretmeye yetti.

Reasoning without hype:

> Her şeyi sıfırdan icat etmedim. Değişenler framework, veri kaynağı ve birkaç arayüz dokunuşu.

## 5. Formatting and MDX

- **Bold** for one key concept per section at most; *italic* for titles of books, films and series.
- Code blocks always declare the language. Keep snippets short and runnable.
- Custom MDX components (registered in `src/features/blog/lib/blog-mdx-components.ts`):
  - `BlogNotice`: a warning or info box.
  - `BookInfo`: book details in a review.
  - `MediaInfo`: film or series details.
  - `ImagesCarousel`: several images in one block.
  - `LinksReview`: a curated list of links.
  - `MdxTable`: a table.
  - `ChartAreaLinear`: a simple chart.
  - Live demos (set `interactive: true`): `ViraMaskDemo`, `ViraPasswordDemo`, and the CSS demos `ClipPath`, `CornerShape`, `PickerIcon`, `SiblingIndex`, `Stretch`, `TextBox`.
- Internal links use the section path: `/blog/{slug}` for technical, `/notlar/{slug}` for personal.

## 6. Images

- Path: `public/blog/YYYY/MM-DD/{name}.{ext}`, where `YYYY/MM-DD` is the post's `published_at` date. **Month first, then day** (`2026/08-17`, never `17-08`). Supabase content references these paths, so a wrong folder means a 404.
- Lowercase, hyphenated file names; prefer `.webp`.
- Every image has meaningful Turkish alt text.
- The cover image path goes into `og_image_path`; leave it null to use the generated OG image.

## 7. Saving to Supabase

Table `blog_posts` columns: `slug` (unique, leading `/`), `title`, `description`, `content` (MDX body only, no frontmatter), `category` (`technical` | `personal`), `tags` (`text[]`, max 3), `locale` (`tr` | `en`), `medium_url`, `interactive`, `published`, `published_at`, `og_image_path`.

- **Never write to Supabase without approval.** Show the full `INSERT`/`UPDATE` SQL as a preview first and wait for an explicit yes.
- Insert new posts with `published = false`. The user flips `published` to `true`; there is no scheduled publishing.
- `published_at` is the date shown on the site and the image folder date.

## 8. Checklist

1. Category, route and tags match the section's pool.
2. Title, slug and description follow section 2.
3. Intro is 1–2 sentences, 2–4 sections, closing has no template phrase.
4. `writing-voice` checklist passes.
5. Images exist under the correct `YYYY/MM-DD` folder and have alt text.
6. SQL was previewed and approved before any write; the row is inserted with `published = false`.
