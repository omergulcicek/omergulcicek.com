---
name: writing-voice
description: Ömer Gülçiçek's Turkish writing voice for omergulcicek.com. Use whenever you write or edit any Turkish text a reader will see — page copy (src/constants/site-copy.constants.ts), facts and descriptions in src/constants/me.json, SEO meta descriptions, project/experience summaries, blog posts, notes, social bios. Not for code, comments or commit messages.
---

# Writing voice

Write like Ömer talks: calm, practical, short and honest. The models are Lee Robinson and Josh W. Comeau — first person, concrete, warm without trying. The anti-model is a LinkedIn bio full of adjectives.

Applies to new and edited text only. Never rewrite existing blog posts or notes unless asked.

## Core rules

1. **First person, reader is "sen".** "Bana yazabilirsin", "öğrendiklerini uygula". Never formal "siz" in new text.
2. **Facts, not adjectives.** Names, years, numbers, links. If a claim can't be checked, cut it or make it concrete.
   - ❌ "Yüksek performanslı mimariler kurgulayan tutkulu bir mühendisim."
   - ✅ "2017'den beri frontend yazıyorum. Alışgidiş'te ekibi ve mimariyi sıfırdan kurdum."
3. **One idea per sentence.** Prefer two short sentences over one long one. Avoid semicolon chains.
4. **Show the work, never praise it.** No "gurur duyuyorum", "uzmanıyım", "mükemmel", "harika". Let the project, number or link speak.
5. **Say what is happening now.** Bios and intros include the current focus (today: ViraStack).
6. **One human touch is enough.** A city, a hobby, a small admission. Never a paragraph of it.
7. **Honest admissions are welcome.** "Usta değilim", "farkındayım, yine de devam ediyorum". They make the text human; keep them light, not self-deprecating.

## Patterns that read as AI-written — never use

- **Aphorisms with bold lead-ins:** "**Desen bir araçtır.** Mimari yavaşlatınca değiştiririm." A bold phrase, a period, then a maxim.
- **Symmetric triads:** three bullets or clauses of the same length and rhythm ("Hızlı, sade ve güvenilir.").
- **Template openers and closers:** "Bu yazıda … ele alacağız", "Sonuç olarak", "Peki ama neden?", "Gelin birlikte bakalım".
- **Hype words:** tutku/tutkulu, büyük bir tutku, yenilikçi, devrim (niteliğinde), oyun değiştirici, sınırları zorlamak, değer katmak, deneyim inşa etmek, ekosistemin kalbi, yolculuk (as a metaphor).
- **Stacked abstractions:** "sürdürülebilir kullanıcı deneyimleri inşa ediyorum". Replace with what was actually built.
- **Emoji and exclamation marks** in body text. At most one exclamation in a whole post.
- **Rhetorical question headings** in page copy. (A question title is fine for a blog post when it is the real question.)

## Turkish style

- Correct spelling: "ya da" (not "yada"), "birçok" (not "bir çok"), "hâlâ" (still) vs "hala" (aunt), "her şey", "unvan" (not "ünvan"), "yapay zekâ".
- Dash inside sentences: spaced hyphen ` - `. Do not use the em dash `—` in prose; it is reserved for page title separators that already exist.
- Straight quotes `"…"`, never `''` as a quote mark.
- English technical terms stay English (React, state, loader, SSR). Explain an uncommon one once in parentheses on first use. Do not translate product names.
- Numbers: digits for anything measurable ("7 bin maç", "10 kişilik ekip", "Lighthouse 90+"). Turkish thousands separator: `1.341`.
- Turkish suffixes after names use an apostrophe: "ViraStack'e", "Next.js'te", "2017'den".

## Lengths

| Text | Length |
| --- | --- |
| Page intro (PageHeader) | 1 sentence |
| Card / project description | 4–10 words, no trailing hype |
| Experience summary | 1–2 sentences, one concrete result |
| Meta description | 1 sentence, ~120–160 characters, contains a verb |
| Bio / About intro | 3–5 short sentences |
| Blog post | see the `blog-post` skill |

## Before / after

| ❌ Before | ✅ After |
| --- | --- |
| "Detaylara ve kaliteye büyük bir tutku duyuyorum; projelerim aracılığıyla insanlara faydalı olmayı seviyorum." | "React ve TanStack ile arayüz mimarisi kuruyorum." |
| "10 yılı aşkın tecrübemle AI destekli, yüksek performanslı mimariler kurguluyorum." | "2017'den beri React ekosisteminde ürün geliştiriyorum. Son yıllarda ekip yönettim, mimari kurdum." |
| "**Kural otomatik denetlenir.** Yazılı kural unutulur, lint unutmaz." | "Kod kurallarımı ViraStack AI'da topladım; kendi projelerimde de aynı kuralları kullanıyorum." |
| "Frontend'in parlayan yıldızı: shadcn/ui ile tanışın!" | "shadcn/ui: Tanışma" |

## Where text lives

Edit the source, not the component: page copy in `src/constants/site-copy.constants.ts`, facts and project/experience/journey text in `src/constants/me.json`, SEO descriptions via `SITE_COPY.meta`. Components only compose these values.

## Checklist

Before finishing, reread the text and confirm:

1. Every sentence carries one idea and could be checked (name, year, number, link).
2. No word from the hype list, no aphorism, no symmetric triad, no template opener or closer.
3. First person, reader is "sen".
4. Spelling and dash rules above are followed.
5. Read it aloud: it sounds like a person talking, not a press release.
