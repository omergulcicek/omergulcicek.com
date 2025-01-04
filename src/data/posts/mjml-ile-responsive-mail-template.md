---
date: "2020-11-13"
path: "/mjml-ile-responsive-mail-template"
title: "MJML ile Responsive Mail Template"
category: "Teknik"
keywords: ["HTML"]
medium: "https://omergulcicek.medium.com/mjml-ile-responsive-mail-template-4a49d507f0e"
---

Frontend Developer'ların en büyük baş belası sanırım mail template kodlamaktır. Hem her CSS koduna izin vermiyor, hemde e-posta servisleri (_Gmail, Outlook, Yandex Mail vb._) arasındaki destek uyumsuzlukları başınızı ağrıtıyor. Hele birde kodlayacağınız arayüzün responsive olması istendiyse vay halinize!

Neyse ki <a href="https://mjml.io/" target="_blank" rel="noreferrer noopener">MJML</a> var; MJML responsive mail arayüz kodlamayı oldukça kolay hale getiriyor. <a href="https://mjml.io/templates" target="_blank" rel="noreferrer noopener">Templates</a> sayfasında oluşturdukları hazır şablonları kullanabilir yada sıfırdan mail template'inizi geliştirebilirsiniz.

![MJML Kod Syntax'ı](/img/blog/2020-11-13/mjml.png)

## Kısa Bir MJML Eğitim Turu

<a href="https://mjml.io/getting-started/1" target="_blank" rel="noreferrer noopener">Getting started</a> sayfasına girdiğinizde kısa bir eğitim veriliyor.

Eğitim özeti şu şekilde;

- Responsive e-postalar tasarlamak için `<mj-section></mj-section>` ile tasarımınızı bölümlere ayıracaksınız. `background` parametresi alabiliyor.
- Ardından resim, metin yada butonları kapsayacak olan `<mj-column></mj-column>` etiketi ile section'ımızı kolonlara böleceğiz.
- Bir yazıyı `<mj-text></mj-text>` etiketleri arasında yazmalıyız; `align="left/right/center"` parametresi alabiliyor.
- Resim eklemek için `<mj-image src="..."></mj-image>` etiketi kullanılıyor.
- Buton için `<mj-button></mj-button>` etiketleri kullanılıyor; `background-color`, `border-radius` vb. bir çok CSS özelliğini attribute olarak ekleyebilirsiniz.

`<mj-` syntax'ı ile başlayan bu etiketler yardımıyla sayfanızı geliştirdiğinizde, MJML sizin için HTML çıktısını tablolar ile oluşturarak hazırlıyor.

## Kurulum

<a href="https://mjml.io/documentation/" target="_blank" rel="noreferrer noopener">Dokümantasyon</a> sayfasında da belirtildiği gibi ister `npm install mjml` (_yada yarn_) yada kurulum yapmak istemiyorsanız <a href="https://mjml.io/try-it-live" target="_blank" rel="noreferrer noopener">online düzenleyici</a> ile geliştirebilirsiniz.

Online düzenleyici oldukça başarılı, kodu anlık ekrana yansıtması ve hatalı kullanım yaptığınızda uyarıları işinizi kolaylaştırıyor; sağ üstteki butonlar yardımıyla mobil/masaüstü tasarım çıktısını görebiliyor ve HTML çıktısına kolayca ulaşabiliyorsunuz.

## Kullanım

Varsayılan olarak 600px genişliğinde bir layout çalıştırır (_isteğe bağlı değiştirilebilir_).

Eğer section içerisine bir adet column oluşturursanız otomatik olarak 100%'ünü kapsar, eğer iki adet column oluşturursanız 50% (_varsayılan 300px_) olacak şekilde yan yana olacak şekilde düzenler. Manuel olarak `width="400px"` gibi genişlik belirleyebilirsiniz.

MJML etiket sırası önemli, bu sırayı değiştirdiğinizde sizi uyaracaktır;

```html
<mjml>
	<mj-body>
		<mj-section>
			<mj-column>
				<!-- İçeriğiniz -->
			</mj-column>
		</mj-section>
	</mj-body>
</mjml>
```

Aslında MJML, componentlerini sizin oluşturduğunuz ve bunları `<table>` etiketlerine dönüşmesine yardımcı olan bir framework. Örneğin `<mj-button>Buton</mj-button>` etiketleri ile bir buton oluşturduğunuzda MJML bunu aşağıdaki koda derliyor;

```html
<table
	cellpadding="0"
	cellspacing="0"
	style="border:none;border-radius:3px;"
	align="center"
>
	<tbody>
		<tr>
			<td
				style="background-color:#414141;border-radius:3px;color:#ffffff;cursor:auto;"
				align="center"
				valign="middle"
				bgcolor="#414141"
			>
				<a
					class="mj-content"
					href="#"
					style="display:inline-block;text-decoration:none;background-color:#414141;border:1px solid #414141;border-radius:3px;color:#ffffff;font-size:13px;font-weight:bold;padding:15px 30px;"
					target="_blank"
				>
					Buton
				</a>
			</td>
		</tr>
	</tbody>
</table>
```

- `<mj-attributes>` etiketi ile diğer etiketlerin varsayılan değerlerini,
- `<mj-breakpoint width="320px" />` etiketi ile masaüstü/mobil kırılım noktasını,
- `<mj-font>` ile varsayılan yazı stilini,
- `<mj-title>` ile mailin başlığını,
- `<mj-preview>` ile maildeki önizleme yazısını değiştirebilirsiniz.

## CSS Sınıfları

Ve `<mj-style>` yardımı ile MJML'nin en büyük güzelliği! Mail template geliştirirken sürekli table açıp inline CSS yazma derdini tamamiyle ortadan kaldırıyor.

MJML etiketlerine ekleyeceğiniz `css-class` attribute ile `<mj-style>` etiketi içerisine alışık olduğumuz şekilde CSS yazabilirsiniz. Bunları en sonda oluşturulan HTML'in içerisine ekleyecektir; eğer bu CSS'leri inline şekilde tablolara eklemesini isterseniz `<mj-style inline="inline">` olarak değiştirmeniz kafi.

## Daha Fazlası

Mail template içerisinde akordiyon mu? (<a href="https://mjml.io/try-it-live/components/accordion" target="_blank" rel="noreferrer noopener">Akordiyon örneği</a>)

Etiketlerde kullanabileceğiniz CSS attribute'leri ve onlarce örnek için dokümantasyonu inceleyebilirsiniz.

### Kaynaklar

- <a href="https://mjml.io/documentation" target="_blank" rel="noreferrer noopener">https://mjml.io/documentation</a>
