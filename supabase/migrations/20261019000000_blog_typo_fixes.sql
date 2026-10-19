-- Blog yazım düzeltmeleri.
-- Kaynak liste: yazim-hatalari.md (105 yazının Türkçe olanları).
--
-- 1) Her hedefli düzeltme tam olarak bir yazıyı etkilemeli; eşleşmezse migration
--    hata verir ve geri alınır (sessiz atlama yok).
-- 2) Toplu kalıp düzeltmeleri yalnızca locale = 'tr' için çalışır.
-- 3) İçeriği değişen satırlarda content_html ve headings sıfırlanır. Okuma katmanı
--    boş olanları çalışma anında derler; kalıcı olarak yeniden üretmek için
--    migration'dan sonra `scripts/migrate-blog-html.ts` çalıştırılır.

DO $fix$
DECLARE
	fix record;
	hit integer;
	pattern text;
	replacement text;
BEGIN
	-- Önceki hâl: hangi satırların değiştiğini sonda karşılaştırmak için.
	CREATE TEMP TABLE _typo_before ON COMMIT DROP AS
		SELECT id, md5(content) AS content_md5, md5(title || '|' || description) AS meta_md5
		FROM blog_posts;

	CREATE TEMP TABLE _typo_fixes (slug text, old_text text, new_text text) ON COMMIT DROP;

	INSERT INTO _typo_fixes (slug, old_text, new_text) VALUES
		-- Başlıklar ve açıklamalar
		($$/frontendin-parlayan-yildizi-shadcn-ui-ile-tanisin$$, $$Frontend''in$$, $$Frontend'in$$),
		($$/csste-min-max-ve-clamp-fonksiyonlari$$, $$CSS''te$$, $$CSS'te$$),
		($$/box-shadowa-guclu-alternatif-drop-shadow$$, $$Box Shadow''a güçlü alternatif: Drop Shadow$$, $$Box Shadow'a Güçlü Alternatif: Drop Shadow$$),
		($$/turkiye-israil-savasi-buyuk-hesaplasma$$, $$konusunda ki düşüncelerim$$, $$konusundaki düşüncelerim$$),
		($$/ilgi-alanlarinizi-tek-tikla-takviminize-ekleyin$$, $$güncellenmesiyle ilgili alanlarına tek tıkla$$, $$güncellenmesiyle ilgi alanlarınızı tek tıkla$$),
		($$/css-container-sorgulari$$, $$Medya sorgularına complement olarak$$, $$Medya sorgularını tamamlayıcı olarak$$),
		($$/gelenekten-gelecege-ramazan-adabi-ve-teknik-hedefler$$, $$Razaman'a$$, $$Ramazan'a$$),

		-- "ki" ayrı yazılanlar
		($$/2019-degerlendirmesi$$, $$işlerimde ki$$, $$işlerimdeki$$),
		($$/gunumuz-turkiyesi-2019$$, $$okullarda ki$$, $$okullardaki$$),
		($$/reading-time-paketi$$, $$uzunlukta ki$$, $$uzunluktaki$$),
		($$/resimlerde-srcset-kullanimi$$, $$genişliğinde ki$$, $$genişliğindeki$$),
		($$/resimlerde-srcset-kullanimi$$, $$o an ki$$, $$o anki$$),
		($$/sait-kosk-hemdem$$, $$Listede ki$$, $$Listedeki$$),
		($$/jquery-ile-css-important$$, $$CSS'te ki$$, $$CSS'teki$$),

		-- Bitişik yazılan "de/da" ve ekler
		($$/2018-yili-hedeflerim$$, $$yılınıda$$, $$yılını da$$),
		($$/2018-yili-hedeflerim$$, $$tamamınında$$, $$tamamında$$),
		($$/2018-yili-hedeflerim$$, $$yandanda$$, $$yandan da$$),
		($$/2018-yili-hedeflerim$$, $$görsemde$$, $$görsem de$$),
		($$/2018-yili-hedeflerim$$, $$aşamayıda$$, $$aşamayı da$$),
		($$/2020-degerlendirmesi$$, $$maskeyede, virüsede$$, $$maskeye de, virüse de$$),
		($$/2020-degerlendirmesi$$, $$barındırsada$$, $$barındırsa da$$),
		($$/2020-degerlendirmesi$$, $$vermesede$$, $$vermese de$$),
		($$/2020-degerlendirmesi$$, $$biriside$$, $$birisi de$$),
		($$/2020-degerlendirmesi$$, $$Yeni yılıda$$, $$Yeni yılı da$$),
		($$/2020-degerlendirmesi$$, $$hiçte$$, $$hiç de$$),
		($$/2021-degerlendirmesi$$, $$hayatınında$$, $$hayatının da$$),
		($$/2021-hedeflerim$$, $$çokta$$, $$çok da$$),
		($$/2021-hedeflerim$$, $$tabikide$$, $$tabii ki$$),
		($$/2022-hedeflerim$$, $$profilimide$$, $$profilimi de$$),
		($$/2022-hedeflerim$$, $$haftasonlarını$$, $$hafta sonlarını$$),
		($$/2022-degerlendirmesi$$, $$haftasonu$$, $$hafta sonu$$),
		($$/devtools-ile-javascript-debug$$, $$gelerekte$$, $$gelerek de$$),
		($$/devtools-ile-javascript-debug$$, $$olduğnu$$, $$olduğunu$$),
		($$/devtools-ile-javascript-debug$$, $$kulanalım$$, $$kullanalım$$),
		($$/devtools-ile-javascript-debug$$, $$2 değişkende string$$, $$2 değişken de string$$),
		($$/devtools-ile-javascript-debug$$, $$debug yapmak !$$, $$debug yapmak!$$),
		($$/devtools-ile-javascript-debug$$, $$iyi kodlamalar !$$, $$iyi kodlamalar!$$),
		($$/gitstats$$, $$bölerekte$$, $$bölerek de$$),
		($$/gitstats$$, $$bunuda$$, $$bunu da$$),
		($$/gitstats-v2-github-api$$, $$farkedip$$, $$fark edip$$),
		($$/gitstats-v2-github-api$$, $$yazıyıda$$, $$yazıyı da$$),
		($$/css-object-view-box$$, $$yöntemide$$, $$yöntemi de$$),
		($$/izmir-marmaris-oludeniz-tatili$$, $$aklım kalsada$$, $$aklım kalsa da$$),
		($$/izmir-marmaris-oludeniz-tatili$$, $$geyreğini$$, $$gevreğini$$),
		($$/japonizm$$, $$sonrada$$, $$sonra da$$),
		($$/javascript-selectorlerinin-calisma-hizlari$$, $$olsamda$$, $$olsam da$$),
		($$/javascript-selectorlerinin-calisma-hizlari$$, $$kapsayısında$$, $$kapsayıcısında$$),
		($$/kartvizit-tasarimim$$, $$seçeneğide$$, $$seçeneği de$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$ikiside$$, $$ikisi de$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$sürümüde$$, $$sürümü de$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$çalışıyorsada$$, $$çalışıyorsa da$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$bitsinde$$, $$bitsin de$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$çalıştırsada$$, $$çalıştırsa da$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$sağlasada$$, $$sağlasa da$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$dönüştücüde$$, $$dönüştürücü de$$),
		($$/macbook-pro-m1-deneyimlerim$$, $$konfigrasyonlularda$$, $$konfigürasyonlularda$$),
		($$/miyop-lazer-goz-ameliyati$$, $$doktorumunda$$, $$doktorumun da$$),
		($$/miyop-lazer-goz-ameliyati$$, $$hissetsenizde$$, $$hissetseniz de$$),
		($$/miyop-lazer-goz-ameliyati$$, $$Bir kerede$$, $$Bir kere de$$),
		($$/miyop-lazer-goz-ameliyati$$, $$tabiki$$, $$tabii ki$$),
		($$/miyop-lazer-goz-ameliyati$$, $$gözlede$$, $$gözle de$$),
		($$/miyop-lazer-goz-ameliyati$$, $$yardımızla$$, $$yardımıyla$$),
		($$/miyop-lazer-goz-ameliyati$$, $$ıslandırıp$$, $$ıslatıp$$),
		($$/photopea-com$$, $$uzantılarınıda$$, $$uzantılarını da$$),
		($$/photopea-com$$, $$formatlarınıda$$, $$formatlarını da$$),
		($$/photopea-com$$, $$örneğide$$, $$örneği de$$),
		($$/photopea-com$$, $$parametrelerinide$$, $$parametrelerini de$$),
		($$/photopea-com$$, $$Pull requets$$, $$Pull requests$$),
		($$/photopea-com$$, $$kullanıbilir$$, $$kullanılabilir$$),
		($$/reading-time-paketi$$, $$başkalarınında$$, $$başkalarının da$$),
		($$/reading-time-paketi$$, $$Yinede$$, $$Yine de$$),
		($$/walter-isaacson-gelecegi-kesfedenler$$, $$yinede$$, $$yine de$$),
		($$/walter-isaacson-gelecegi-kesfedenler$$, $$sayısıda$$, $$sayısı da$$),
		($$/walter-isaacson-gelecegi-kesfedenler$$, $$buda size$$, $$bu da size$$),
		($$/walter-isaacson-gelecegi-kesfedenler$$, $$katacaktr$$, $$katacaktır$$),
		($$/walter-isaacson-gelecegi-kesfedenler$$, $$biran önce$$, $$bir an önce$$),
		($$/mjml-ile-responsive-mail-template$$, $$Hele birde$$, $$Hele bir de$$),
		($$/mjml-ile-responsive-mail-template$$, $$tamamiyle$$, $$tamamıyla$$),
		($$/position-sticky$$, $$birde top$$, $$bir de top$$),
		($$/css-container-sorgulari$$, $$hemde$$, $$hem de$$),
		($$/css-container-sorgulari$$, $$duyrulan$$, $$duyurulan$$),
		($$/sait-kosk-hemdem$$, $$ne yaparda$$, $$ne yapar da$$),

		-- Yazım ve harf hataları
		($$/2024-degerlendirmesi$$, $$Fronetend$$, $$Frontend$$),
		($$/2024-degerlendirmesi$$, $$istatisliklerine$$, $$istatistiklerine$$),
		($$/2024-degerlendirmesi$$, $$ünvanım$$, $$unvanım$$),
		($$/2025ten-2026ya-degerlendirme-ve-hedefler$$, $$Ünvan almayı$$, $$Unvan almayı$$),
		($$/2025ten-2026ya-degerlendirme-ve-hedefler$$, E'href: "/blog/2025-hedeflerim/",\n\t\t\tlabel: "2025 Yılında', E'href: "/blog/2025-yilinda-frontend-developer-olmak/",\n\t\t\tlabel: "2025 Yılında'),
		($$/2025ten-2026ya-degerlendirme-ve-hedefler$$, $$Değerlendirme ve Yıl Değerlendirmesi$$, $$Değerlendirme ve Hedefler$$),
		($$/2026-icin-react-ve-yapay-zeka-stacki$$, $$bileşent$$, $$bileşen$$),
		($$/cep-herkulu-naim-suleymanoglu$$, $$uyalanan$$, $$uyarlanan$$),
		($$/css-framework-anket-sonuclari$$, $$kalıcığı$$, $$kalıcılığı$$),
		($$/css-framework-anket-sonuclari$$, $$framworklerini$$, $$framework'lerini$$),
		($$/css-framework-anket-sonuclari$$, $$yazığım$$, $$yazdığım$$),
		($$/css-mantiksal-ozellikler$$, $$mantıktal$$, $$mantıksal$$),
		($$/frontend-ekosistemi-insa-etmek$$, $$arenasinda$$, $$arenasında$$),
		($$/gatsbyden-nextjse-gecis$$, $$eğitiminlerindeki$$, $$eğitimlerindeki$$),
		($$/logolari-css-ile-hizalama$$, $$farkedebilirsiniz$$, $$fark edebilirsiniz$$),
		($$/react-virtualization-buyuk-verilerin-ekranda-verimli-gosterimi$$, $$paketileri$$, $$paketleri$$),
		($$/renk-kontrastini-hesaplama$$, $$formulü$$, $$formülü$$),
		($$/renk-kontrastini-hesaplama$$, $$arkaplana$$, $$arka plana$$),
		($$/resimleri-gorunurse-yuklemek$$, $$koordinantları$$, $$koordinatları$$),
		($$/resimlerde-srcset-kullanimi$$, $$genişiliğini$$, $$genişliğini$$),
		($$/resimlerde-srcset-kullanimi$$, $$kullanıındaki$$, $$kullanımındaki$$),
		($$/styled-component-ile-dinamik-css-yazmak$$, $$ikinisi$$, $$ikincisi$$),
		($$/turkiye-israil-savasi-buyuk-hesaplasma$$, $$vaadedilmiş$$, $$vaat edilmiş$$),
		($$/2025-yilinda-frontend-developer-olmak$$, $$developerlara$$, $$developer'lara$$),
		($$/tanstack-start-vs-nextjs$$, $$Next.js hala oldukça$$, $$Next.js hâlâ oldukça$$),
		($$/tanstack-start-vs-nextjs$$, $$için hala en mantıklı$$, $$için hâlâ en mantıklı$$),

		-- Noktalama
		($$/box-shadowa-guclu-alternatif-drop-shadow$$, $$inceleyebilirsiniz :$$, $$inceleyebilirsiniz:$$);

	FOR fix IN SELECT * FROM _typo_fixes LOOP
		-- Tam kelime eşleşmesi: "çokta" ifadesi "çoktan" içinde eşleşmemeli.
		pattern := '(?<![A-Za-zçğıöşüÇĞİÖŞÜâîû])'
			|| regexp_replace(fix.old_text, '([.\\()\[\]{}*+?^$|])', '\\\1', 'g')
			|| '(?![A-Za-zçğıöşüÇĞİÖŞÜâîû])';
		replacement := replace(fix.new_text, '\', '\\');

		UPDATE blog_posts
		SET content = regexp_replace(content, pattern, replacement, 'g'),
			title = regexp_replace(title, pattern, replacement, 'g'),
			description = regexp_replace(description, pattern, replacement, 'g')
		WHERE slug = fix.slug
			AND (content ~ pattern OR title ~ pattern OR description ~ pattern);

		GET DIAGNOSTICS hit = ROW_COUNT;

		IF hit <> 1 THEN
			RAISE EXCEPTION 'Typo fix did not match exactly one post: % / %', fix.slug, fix.old_text;
		END IF;
	END LOOP;

	-- Toplu kalıplar (yalnızca Türkçe yazılar).
	UPDATE blog_posts
	SET content = regexp_replace(regexp_replace(regexp_replace(regexp_replace(regexp_replace(regexp_replace(
			content,
			'\myada\M', 'ya da', 'g'),
			'\mYada\M', 'Ya da', 'g'),
			'\mbir çok\M', 'birçok', 'g'),
			'\mBir çok\M', 'Birçok', 'g'),
			'Merhaba !', 'Merhaba!', 'g'),
			'Github', 'GitHub', 'g'),
		title = regexp_replace(regexp_replace(title, '\myada\M', 'ya da', 'g'), 'Github', 'GitHub', 'g'),
		description = regexp_replace(regexp_replace(description, '\myada\M', 'ya da', 'g'), 'Github', 'GitHub', 'g')
	WHERE locale = 'tr';

	-- İçeriği değişenlerin türetilmiş alanlarını sıfırla; updated_at'i güncelle.
	UPDATE blog_posts p
	SET content_html = CASE WHEN md5(p.content) <> b.content_md5 THEN NULL ELSE p.content_html END,
		headings = CASE WHEN md5(p.content) <> b.content_md5 THEN NULL ELSE p.headings END,
		updated_at = now()
	FROM _typo_before b
	WHERE b.id = p.id
		AND (
			md5(p.content) <> b.content_md5
			OR md5(p.title || '|' || p.description) <> b.meta_md5
		);
END
$fix$;
