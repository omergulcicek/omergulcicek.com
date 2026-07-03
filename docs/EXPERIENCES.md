# omergulcicek.com — Deneyimler

> **Agent onboarding:** `/experiences` zaman çizelgesi ve CV için tek kaynak. Veri taşınırken referans: `_legacy/src/features/experience/data/experience.data.tsx`.

---

## Sayfa

**Rota:** `/experiences`  
**Başlık:** Deneyimler  
**Badge:** `SITE_FLAGS.isOpenToWork` → `docs/ABOUT.md`  
**Footer:** ikincil nav (`docs/SITE-CONTENT.md`)

---

## Giriş (`experiencesIntro`)

10 yılı aşkın tecrübemle, React ekosisteminde AI destekli ve yüksek performanslı mimariler kurgulayarak sürdürülebilir kullanıcı deneyimleri inşa ediyorum.

---

## UI

- Dikey zaman çizelgesi: şirket logosu (`/company/{icon}.jpeg`) + rol + dönem + **1 cümle** özet
- Teknoloji etiketleri: muted badge (legacy gibi)
- **CV:** `public/omer-gulcicek-cv.pdf` — indirme + önizleme modal (`ResumeModal` davranışı; legacy referans)
- CV düğmesi: yalnızca `/experiences` (ana sayfada yok)
- **v1:** Kayıt giriş animasyonu yok

---

## Veri (SSOT)

Görseller: `public/company/` — legacy asset'ler taşınır.

| Şirket | Rol | Dönem | Özet (1 cümle) |
| --- | --- | --- | --- |
| Machinarium | Frontend Team Lead | Ağu 25 – Kas 25 | 10 kişilik frontend ekibine teknik liderlik ettim; AI destekli kod standartları ve ortak bileşen kütüphanesiyle PIM, CMS ve OMS panellerindeki teknik borcu ve kod tutarsızlığını giderdim. |
| Alışgidiş | Senior Frontend Engineer | Mar 24 – Haz 25 | alisgidis.com FE mimarisini sıfırdan kurdum; takım lideri olarak tasarım-backend koordinasyonunu yönetip UI kütüphanesi ve Lighthouse ile hız ve SEO performansını artırdım. |
| Gordion | Senior Frontend Engineer | Oca 22 – Şub 24 | Otel, uçak bileti ve kültür turu rezervasyon sayfalarını geliştirdim; merkezi UI Kit ve GraphQL entegrasyonuyla teknik borcu azaltıp ekipler arası tutarlılığı sağladım. |
| HangiKredi | Frontend Developer | Eyl 20 – Oca 22 | hangikredi.com geliştirmesinde Figma tasarımlarını koda döktüm; performans iyileştirmeleri ve yeniden kullanılabilir JS kütüphaneleriyle kod tekrarını azalttım. |
| Kodluyoruz | Frontend Eğitmeni | Ara 20 – Şub 21 | 30 öğrenciye Frontend 101 eğitimi verdim; HTML, CSS, JavaScript, Git ve React konularında uygulamalı dersler yürüttüm, sektörel tecrübe aktarımı ve sorulara yanıt verdim. |
| Akinon | Frontend Developer | Haz 19 – Kas 19 | Vakko, A101 ve birçok e-ticaret sitesi için Zeplin tasarımlarını modüler bileşenlerle koda döktüm; component dokümantasyonuyla süreci sürdürülebilir kıldım. |
| Turkcell | Frontend Developer | Tem 18 – Kas 18 | Canlı sistemdeki kritik arayüz hatalarına anında müdahale ederek ekibin geliştirmeye kesintisiz devam etmesini sağladım. |
| Ziraat Teknoloji | Frontend Developer | Tem 17 – Haz 18 | Kendo UI tabanlı kurumsal admin panelini uçtan uca geliştirdim; arayüzü tam responsive hale getirerek kullanılabilirliği artırdım. |

Ana sayfa: son 3 kayıt. Tam liste yalnızca bu sayfada.

---

## CV

| Alan | Değer |
| --- | --- |
| Dosya | `public/omer-gulcicek-cv.pdf` |
| İndirme adı | `omer-gulcicek-cv.pdf` |
| Bileşen | `ResumeModal` — dialog/drawer önizleme + indir (legacy UX) |
