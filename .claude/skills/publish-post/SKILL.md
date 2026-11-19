---
name: publish-post
description: omergulcicek.com'da onaylanmış bir blog yazısını (Türkçe ve varsa İngilizce sürümüyle) yayına almak ve X ile LinkedIn paylaşım metinlerini hazırlamak için. Yalnızca kullanıcı /publish-post yazınca çalışır.
disable-model-invocation: true
---

# Yazıyı yayımlamak ve paylaşmak

Bu skill blog akışının son adımı: `write-post` → `localize-post` → `publish-post`. Canlı veritabanına yazdığı ve herkese açık paylaşım hazırladığı için yalnızca kullanıcı çağırınca çalışır. Her adımın onayı ayrı alınır; bir onay sonraki adıma geçmez.

Başlamadan önce Türkçe yazı `write-post` ile onaylanmış, İngilizce sürüm yazılacaksa `localize-post` ile Supabase'e taslak olarak eklenmiş olmalı.

## 1. Yayından önce kontrol

- **Görseller:** Yeni görseller `public/blog/<yıl>/<ay-gün>/` altında olmalı. `pnpm blog:images` PNG ve JPG'leri WebP'ye çevirir, `-672` varyantlarını üretir ve `blog-image-sizes.json` dosyasını günceller. MDX'teki yollar yazdırılan `.webp` yollarına işaret etmeli. `pnpm test` içindeki manifest testi eksik bir görseli yakalar.
- **Taslak localde açılıyor mu:** `pnpm dev` ile `/blog/<slug>` (ya da `personal` kategoride `/notes/<slug>`) ve İngilizce için `/en/blog/<slug>` açılmalı. Taslaklar yalnızca dev'de görünür.
- **Doğrulama:** `pnpm lint && pnpm typecheck` ve `pnpm test` geçmeli.

## 2. Öne çıkanlar

Ana sayfa en fazla 3 öne çıkan yazı gösterir. Kalan satırlar son yazılardan dolar (`get-home-posts.ts`), yani öne çıkmayan yeni bir yazı da ana sayfada görünür. `featured_rank` her dil için ayrı tutulur: 1 ilk sıradır, öne çıkmayan yazıda değer `null` olur.

Supabase'de her iki dilin `featured_rank` listesini çek ve kullanıcıya tek bir tabloyla sun: yazı ilk 3'e girmeli mi, girerse kaçıncı sıraya, hangi yazı aşağı iner. Ölçütler sırasıyla:

1. **Kalıcı öğreti ve geniş okur:** Herkese yarayan, zamanla eskimeyen rehberler. Tek bir olayı anlatan vaka çalışmaları genelde girmez; örneğin "Dağınık Arayüzden Tasarım Sistemine" yerine daha genel olan "Design Token Mimarisi" seçildi.
2. **En güçlü alanın vitrini:** Tasarım sistemi, mimari, React.
3. **Çeşitlilik:** Üç yazı aynı konuda olmasın.
4. **Güncellik:** Yalnızca eşitlik durumunda belirleyici olur.

Kararı kullanıcı verir. Onay almadan `featured_rank` değiştirme.

## 3. Yayına alma

Taslaklar RLS'yi aştığı için service role anahtarı gerekir. `.env.local`'deki `SUPABASE_SERVICE_ROLE_KEY` ile REST üzerinden yaz ve anahtarı asla ekrana yazdırma. Kullanıcı onayladıktan sonra:

1. Türkçe yazıda `published: true` ve `published_at: now()` olarak güncelle, onaylanan `featured_rank` değerini yaz.
2. İngilizce sürüm varsa onda da aynısını yap.
3. Ancak iki sürüm de yayındayken Türkçe yazının `translation_slug` alanına İngilizce slug'ı yaz. Türkçe sayfa yayımlanmamış bir sayfaya link vermemeli.
4. Görseller ya da kod değiştiyse commit at. Push için kullanıcıya sor.

## 4. Canlıda kontrol

- Yazı 200 dönüyor mu?
- hreflang iki dili de gösteriyor mu?
- `/en/blog/<türkçe-slug>` 301 ile İngilizce slug'a yönleniyor mu?
- OG görseli (`/og/...`) açılıyor mu?

## 5. Paylaşım metinleri

Paylaşımı kullanıcı kendisi yapar. Tarayıcıdan LinkedIn'e ya da X'e girip post atma; metni hazırla, göster ve onaydan sonra hazır metinli paylaşım bağlantısını ver.

- **X:** İngilizce yaz, İngilizce sürümün linkini kullan. Yazının tek bir fikrini öne çıkaran kısa bir post hazırla; yazı birden çok bulgu içeriyorsa kısa bir thread öner. Bağlantı: `https://x.com/intent/post?text=<url-encoded metin>&url=<yazı linki>`.
- **LinkedIn:** Metni kullanıcıya hangi dilde olacağını sorarak yaz. Okur kitlesi daha geniş olduğu için X'ten daha uzun olabilir: yazının neden yazıldığını ve en önemli bulgusunu anlatan birkaç paragraf. Bağlantı: `https://www.linkedin.com/sharing/share-offsite/?url=<yazı linki>`. LinkedIn bu bağlantıya metin almaz, bu yüzden metni ayrıca kopyalanacak şekilde ver.
- **Üslup:** Türkçe metinlerde `write-post` kuralları geçerli. Yazıda olmayan bir iddiayı ya da abartılı bir ifadeyi paylaşım metnine ekleme. Hashtag en fazla 2-3 tane olmalı ve yalnızca öneri olarak sunulmalı.

## Kontrol listesi

- [ ] Görseller WebP mi, manifest güncel mi, testler geçiyor mu?
- [ ] Öne çıkan önerisi tabloyla sunuldu ve onaylandı mı?
- [ ] `translation_slug` yalnızca iki sürüm de yayındayken mi yazıldı?
- [ ] Canlıda 200, hreflang, 301 ve OG kontrol edildi mi?
- [ ] Paylaşım metinleri onaylandı mı, bağlantılar kullanıcıya verildi mi?
