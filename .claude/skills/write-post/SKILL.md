---
name: write-post
description: omergulcicek.com için Türkçe bir blog yazısı ya da kişisel site metni (hakkımda, hobi, fotoğraf altyazısı) yazarken veya düzeltirken kullan. Yazım ve üslup kurallarını içerir; kaynak doğrulaması için verify-sources'a, İngilizce sürüm için localize-post'a bağlanır.
---

# Türkçe yazı yazmak

Bu skill, Türkçe yazıların Ömer'in sesiyle ve aynı kurallarla yazılması için. Kurallar kullanıcının daha önceki düzeltmelerinden geliyor; her biri bir tercih, tartışılacak bir hata değil.

## Akış

1. **Kişisel metinse önce sor.** Hakkımda, hobi paragrafı ya da fotoğraf altyazısı yazmadan önce kısa, gruplanmış, açık uçlu sorular sor ve metni cevaplardan yaz. Tahminle ya da sitedeki mevcut bilgilerle taslak çıkarma; tahminle yazılan metinler genel ve yabancı duruyor.
2. **Yaz.** Aşağıdaki kurallara uy; doğrulanabilir her iddiaya yazdığın anda dipnot ekle (`verify-sources`, 1. bölüm).
3. **Taslağı göstermeden önce kontrol et.** Kontrol listesini geç, ardından `verify-sources`'taki temiz subagent doğrulamasını çalıştır.
4. **Onaydan sonra İngilizceye geç.** `localize-post` ile. İngilizce sürüm yazılmayacaksa doğrudan yayına geçilir: kullanıcıya `/publish-post` yazabileceğini söyle.

Akışın tamamı: `write-post` → `localize-post` → `/publish-post`. `verify-sources` bu skill'in içinde çalışır; yayımlanmış yazıları yeniden taramak için ayrıca da çağrılabilir.

## Yapı

- **Tanımla başla.** Bir aracı ya da kavramı anlatan yazı önce onun ne olduğunu söyler, sonra "şunu yaptım" kısmına geçer.
- **Kişisel metinlerde teknik konu yok.** Hakkımda sayfası kodun dışındaki Ömer'i anlatır; kariyer ve teknoloji ana sayfadadır. Bilgisayarla ya da işle açılış yapma.

## Dil

- **"ama" ve "fakat"tan önce virgül yok.** "çalışıyordu ama…" doğru, "çalışıyordu, ama…" yanlış. Bu bir İngilizce alışkanlığı; TDK'da "ama" öncesi virgülü zorunlu kılan bir kural yok ve kullanıcı virgülsüz yazmayı tercih ediyor.
- **Teknik terimler çevrilmez.** state, cache, render, prop, hook, container gibi kelimeler İngilizce kalır. Bunları "durum", "önbellek" diye Türkçeleştirmeyi önerme, yazım hatası da sayma.
- **İddialar kaynağın gücünde.** Kaynak "önerir" diyorsa yazı "zorunlu" demez. Kaynağı olmayan bir iddia ya çıkar ya da açıkça yazarın görüşü olur ("bence", "benim tercihim").

## Kişisel metinlerde

- Eşinden ya da kitaplığın kime ait olduğundan söz etme.
- "masa başı" gibi yanlış çağrışım yapabilecek ifadelere dikkat et; bu ifade hastalık gibi okunmuştu.

## Kontrol listesi

Taslağı kullanıcıya göstermeden önce:

- [ ] Metinde `, ama` ve `, fakat` arandı ve virgüller kaldırıldı mı?
- [ ] Teknik terimler İngilizce mi kaldı?
- [ ] Kavram anlatan yazı tanımla mı başlıyor?
- [ ] Doğrulanabilir her iddianın dipnotu var mı, `verify-sources` subagent raporu temiz mi?
- [ ] Kişisel metinse cevaplardan mı yazıldı, teknik içerik dışarıda mı?
