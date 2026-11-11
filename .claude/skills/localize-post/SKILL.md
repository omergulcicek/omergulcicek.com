---
name: localize-post
description: omergulcicek.com'daki Türkçe bir blog yazısının İngilizce sürümünü yazarken kullan. Birebir çeviri değil, İngilizce okura göre yerelleştirme; Supabase'e taslak ekleme ve çeviri bağlantısı dahil.
---

# Yazıyı İngilizceye yerelleştirmek

Bu skill, onaylanmış bir Türkçe yazının İngilizce sürümünü yazmak için. Amaç cümleleri çevirmek değil, yazının anlatmak istediği konuyu İngilizce okura en iyi şekilde aktarmak. İki dilde de okur yazıdan kopmamalı.

Türkçe yazı onaylanmadan İngilizceye geçme.

## Temel ilkeler

1. **Teknik terimler İngilizce kalır.** Türkçe yazıda da İngilizce yazılan kelimeler (state, cache, container, render, prop, hook) olduğu gibi kalır. Türkçe metinde bunları hata sayma, Türkçeleştirmeyi önerme.
2. **Birebir çeviri yok, yerelleştirme var.** Cümle cümle çevirme. Bir cümle İngilizce okura daha anlaşılır olacaksa baştan yaz, birleştir ya da böl. Ölçüt, iki yazının aynı fikri en iyi şekilde aktarması.
3. **Yerel örnekler okurun yerine göre değişir.** Türkçe yazıdaki yer adları İngilizcede okurun tanıdığı yerlere döner: İstanbul, Kadıköy → Paris, Montmartre; il, ilçe, mahalle → ülke, şehir, semt.
4. **Türkiye'ye özgü veriler evrensel karşılıklarıyla değişir.** Örneğin ViraStack Mask yazısında TCKN ve vergi numarası, İngilizcede kredi kartı numarası, telefon ve para birimi örneklerine döner. Örnek değişse de anlattığı ders aynı kalmalı.

## Dil ve üslup

- **Özel adlar:** Ürün ve marka adları olduğu gibi kalır: ViraStack, Claude Opus 5.5, TanStack Start. Türkçede kalın yazılanlar İngilizcede de kalın yazılır.
- **Kültürel kavramlar:** Yabancı okurun bilmediği Türkçe kavramları yarım cümleyle açıkla: "Keşfet, Turkish for Explore", "Gülçiçek means rose flower in Turkish", çintemani'nin ne olduğu.
- **Deyimler:** Türkçe deyimleri birebir çevirme, aynı anlamı veren doğal bir İngilizce ifade kullan.
- **Yazım standardı:** Amerikan İngilizcesi. Başlıklar sentence case, mevcut İngilizce yazılardaki gibi.
- **Ses:** Yazarın sesi korunur. Birinci tekil şahıs, alçakgönüllü ifadeler ve kişisel notlar kaybolmaz.

## Örnekler ve biçimler

- **Sayı, tarih ve para:** Okurun alıştığı biçimi kullan: 1.000 → 1,000; ₺ → $ ya da €; "4 Kas" → "Nov 4". Yazının konusu zaten Türkçe biçimlerse (Yerelleştirme yazısı gibi) olduğu gibi bırak.
- **Türkiye'ye özgü bölümler:** Bir bölüm sadece Türk okuru ilgilendiriyorsa (örneğin bir genelge) kısalt ya da genel bir çerçeveye taşı. Yazının tamamı öyleyse yazmadan önce çevirmeye değer mi diye sor.
- **Kaynaklar:** Türkçe bir kaynağın İngilizce karşılığı varsa onu ver, örneğin MDN'in İngilizce sayfası.

## Linkler ve teknik ayrıntılar

- **İç linkler:** Linklenen yazının İngilizcesi varsa ona link ver. Yoksa Türkçe yazıya link ver ve yanına "(in Turkish)" yaz. Linkleri dil öneki olmadan yaz (`/blog/x`); site `/en`'i kendisi ekliyor.
- **Kod:** Kod blokları aynen kalır. Sadece açıklayıcı yorumlar ve örnek arayüz metinleri çevrilir.
- **Görseller ve MDX bileşenleri:** Aynen kalır. Görselin alt metnini çevir; sitede altyazı olarak görünüyor.
- **Etiketler:** Supabase'de Türkçe kalır, İngilizcesi `src/features/blog/constants/blog-tag-labels.constants.ts` dosyasından gelir. Yeni bir etiket gerekirse o dosyaya İngilizcesini, `blog-tag-order.constants.ts` dosyasına sırasını ekle.

## Başlık, açıklama ve adres

- **Başlık ve açıklama:** Çevirme, İngilizce arama düşünülerek yeniden yaz. Açıklama en fazla 155 karakter.
- **Slug:** İngilizce ve açıklayıcı, örneğin `/react-state-management-architecture`.

## Yayın akışı

1. MDX'i `docs/blog/en/<slug>.mdx` olarak yaz (bu klasör git'te değil, yerel kopya).
2. Supabase `blog_posts` tablosuna taslak olarak ekle:
   - `locale: "en"`, `published: false`, `published_at: null`
   - `category`, `tags`, `og_image_path` Türkçe yazıdakiyle aynı; `featured_rank` dil başına ayrı (1 ilk sırada, öne çıkmıyorsa `null`), İngilizce öne çıkanlardaki sırayı kullanıcıya sor
   - `translation_slug`: Türkçe yazının slug'ı
   - Taslaklar RLS'yi aştığı için service role anahtarı gerekiyor. `.env.local`'deki `SUPABASE_SERVICE_ROLE_KEY` ile REST üzerinden ekle, anahtarı asla ekrana yazdırma.
3. Kullanıcıya localdeki adresi ver: `/en/blog/<slug>`. Taslaklar yalnızca `pnpm dev`'de görünür.
4. Kullanıcı onaylayınca:
   - İngilizce yazıda `published: true` ve `published_at: now()`.
   - Türkçe yazının `translation_slug` alanına İngilizce slug'ı yaz. Bunu yayından önce yapma; Türkçe sayfa yayımlanmamış bir sayfaya link vermesin.
5. Canlıda kontrol et: yazı 200 dönüyor, hreflang iki dili gösteriyor, `/en/blog/<türkçe-slug>` 301 ile İngilizceye yönleniyor.

## Kontrol listesi

Kullanıcıya göstermeden önce:

- [ ] Her bölüm iki dilde de aynı fikri veriyor mu? Eksik ya da fazladan eklenmiş bir fikir yok mu?
- [ ] Uyarlanan her örnek orijinaldeki dersi hâlâ anlatıyor mu?
- [ ] Uydurma bir bilgi eklenmedi mi? Örnek değişebilir, olgular değişmez.
- [ ] Teknik terimler İngilizce mi, marka adları aynen mi?
- [ ] İç linkler doğru dile gidiyor mu, "(in Turkish)" notları yerinde mi?
- [ ] Açıklama 155 karakterin altında mı?
