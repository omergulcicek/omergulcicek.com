---
name: verify-sources
description: omergulcicek.com için Türkçe bir blog yazısı yazarken ve taslak kullanıcıya gösterilmeden önce kullan. Her iddia yazıldığı anda dipnot alır; taslak bitince yazıyı görmemiş temiz bir subagent her iddiayı kaynağından alıntıyla doğrular. Yayınlanmış yazıları yeniden taramak için de kullanılır.
---

# Kaynakları doğrulamak

Bu skill, blog yazılarındaki her bilginin kaynağında gerçekten yazdığını garanti etmek için. Akıcı ve inandırıcı bir cümle kanıt değildir; kanıt, kaynağın içindeki alıntıdır. Kontrol Türkçe yazılırken yapılır; İngilizce sürümde yalnızca fark kontrolü yapılır (`localize-post`).

## 1. Yazarken: dipnotsuz iddia yok

- Sayı, tarih, sürüm, alıntı, "X şunu öneriyor" ya da "X'e göre" içeren her cümle yazıldığı anda bir GFM dipnotu alır: `cümle.[^kaynak]`. Tanımlar yazının sonunda durur: `[^kaynak]: [Başlık](url)`. Site bunları "Kaynaklar" listesine çeviriyor; ayrı bir "## Kaynaklar" bölümü yazma.
- Dipnot kaynağa verilir, alıntıya değil: aynı kaynak her geçtiğinde aynı etiketi kullanır.
- Kaynağı açıp ilgili cümleyi okumadan dipnot yazma. Arama sonucundaki özet ya da hafızadaki bilgi kaynak değildir.
- Kaynağı bulunamayan iddia yazıdan çıkar ya da yazarın kendi görüşü olarak açıkça yazılır ("bence", "benim tercihim").
- Kesin ifadeleri kaynağın gücüne göre ayarla: kaynak "önerir" diyorsa yazı "zorunlu" demez, kaynak "ikiden fazla" diyorsa yazı "iki" demez.
- Kendi ölçümlerin (dosya boyutu, süre, sayım) kaynak yerine geçer ama nasıl ölçüldüğü yazıda durur.
- Kendi ürün ve projelerine giden linkler (ViraStack, GitHub repoları) kaynak değildir; satır içi link olarak kalır.
- Tablolardaki dipnotlar Markdown tablolarında çalışır; `MdxTable` gibi JSX bileşenlerinin içinde çalışmaz. Orada dipnotu bileşenden önceki ya da sonraki cümleye koy.

## 2. Taslak bitince: temiz bağlamda doğrulama

Taslağı yazan oturum kendi cümlelerini doğru sanar. Doğrulamayı bu yüzden yazıyı yazmamış bir subagent yapar. Agent tool ile `general-purpose` bir subagent başlat ve ona yalnızca MDX dosyasının yolunu ve aşağıdaki talimatı ver; yazım sürecinden bilgi taşıma.

Subagent'a verilecek talimat:

> `<dosya yolu>` dosyasındaki blog yazısını doğrula. Yazıyı daha önce görmedin, yazarına güvenme.
>
> 1. Yazıdaki doğrulanabilir her iddiayı çıkar: sayılar, tarihler, sürümler, alıntılar, bir kaynağa atfedilen her öneri ve tanım.
> 2. Her iddia için bağlı dipnotun kaynağını aç ve iddiayı destekleyen cümleyi birebir alıntıla. WebFetch'e "şu cümleyi birebir alıntıla" diye sor; özet yetmez. Sayfa açılmazsa (403, 404, JavaScript) ham metni curl ile, PDF'i Read ile ya da yerleşik tarayıcıyla dene.
> 3. Alıntı bulamazsan sonucu "yok" yaz; tahmin yürütme, genel bilginle doldurma.
> 4. Dipnotu olmayan doğrulanabilir iddiaları da listele.
> 5. Her linkin açıldığını kontrol et (yönlendirmeleri izle).
> 6. Kod örneklerini ve ölçülebilir sayıları mümkünse kendin çalıştır ya da ölç.
>
> Sonucu şu tabloyla döndür: `İddia | Dipnot | Alıntı | Sonuç`. Sonuç değerleri: `doğru`, `kısmen` (fark nerede), `yok`, `dipnotsuz`, `açılmıyor`. Dosyada değişiklik yapma.

## 3. Sonuca göre düzeltme

- `doğru`: dokunma.
- `kısmen`: cümleyi kaynağın söylediğine göre yeniden yaz; kesinliği ve kapsamı kaynağa eşitle.
- `yok` ve `dipnotsuz`: kaynak bul ve oku; bulamazsan iddiayı çıkar ya da yazarın görüşü olarak yaz.
- `açılmıyor`: kaynağın yeni adresini bul; yoksa aynı bilgiyi veren başka bir birincil kaynak kullan.
- Düzeltmeden sonra yalnızca değişen iddialar için subagent'ı yeniden çalıştır.

Kullanıcıya taslakla birlikte kısa bir rapor ver: kaç iddia kontrol edildi, neler düzeltildi, neler doğrulanamadı (nedeniyle). Doğrulanamayanı doğrulanmış gibi sunma.

## Kaynak önceliği

1. Birincil kaynak: resmî doküman, standart (W3C, WHATWG), kaynak kod, resmî blog, mevzuat metni.
2. Yazarın kendi yazısı: bir kişinin görüşü aktarılıyorsa onun yazısı.
3. İkincil kaynak (haber, özet, başka bir blog): yalnızca birincil kaynak yoksa ve yazıda ikincil olduğu belli olacak şekilde.

## Yayınlanmış yazıları yeniden taramak

Sürüm, durum ve sayı içeren yazılar eskir. Büyük bir sürüm çıktığında ya da yılda bir, aynı subagent talimatını yayınlanmış yazıya uygula. Kaynak değişmişse cümleyi bugünkü duruma göre güncelle. Yayındaki bir yazıyı Supabase'de güncellemeden önce, kullandığın render özelliklerinin (dipnot gibi) canlıda olduğundan emin ol.

## Kontrol listesi

Taslağı kullanıcıya göstermeden önce:

- [ ] Doğrulanabilir her iddianın bir dipnotu var mı?
- [ ] Subagent raporunda `yok`, `dipnotsuz` ya da `açılmıyor` kalmadı mı?
- [ ] Kesin ifadeler (her zaman, mutlaka, standart, %X) kaynağın söylediğiyle aynı güçte mi?
- [ ] Her link açılıyor mu?
- [ ] Doğrulanamayanlar kullanıcıya açıkça söylendi mi?
