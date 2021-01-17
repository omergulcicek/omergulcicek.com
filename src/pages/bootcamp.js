import React from "react"
import { Details, Strong } from "../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const Bootcamp = () => (
  <Layout>
    <SEO title="Bootcamp" />

    <section className="bootcamp">
      <Title t1="Frontend" t2="Bootcamp" />

      <Details>
        <summary><span>HTML, CSS Seçiciler</span> <date>12 Aralık 2020</date></summary>

        <p>
          Doğru HTML etiketleri kullanıp, nerede span nerede h1 kullanmamız gerektiğini üzerinde durduk.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><Strong><strong>HTML etiketleri (html, head, body, title, <a href="http://www.tasarimveyazilim.com/html-charset-nedir-ve-nasil-kullanilir/" target="_blank" rel="noopener noreferrer">UTF-8</a>, <a href="https://www.aramamotoru.com/html-lang-etiketi-nedir-nasil-kullanilir/" target="_blank" rel="noopener noreferrer">lang="tr"</a>, h1, p, span, a, img, table)</strong></Strong></li>
          <li><a href="https://www.w3schools.com/tags/tag_doctype.asp" target="_blank" rel="noopener noreferrer">DOCTYPE nedir?</a></li>
          <li><Strong><a href="https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg" target="_blank" rel="noopener noreferrer">DOM nedir?</a></Strong></li>
          <li><a href="https://fatihhayrioglu.com/meta-viewport-etiketi" target="_blank" rel="noopener noreferrer">meta viewport nedir?</a></li>
          <li><a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer">Semantic HTML nedir?</a></li>
          <li><Strong><strong>CSS seçiciler - <a href="https://fatihhayrioglu.com/cssde-tanimlamalar-ve-etkinliklerispecificity/" target="_blank" rel="noopener noreferrer">id, class, !important</a> - <a href="https://www.youtube.com/watch?v=YmiMpFaNAx4" target="_blank" rel="noopener noreferrer">inline, inline-block, block</a> - <a href="https://hakantasan.com/index/makaleler/14/css-padding-nedir-margin-nedir" target="_blank" rel="noopener noreferrer">margin, padding</a></strong></Strong></li>
          <li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">CSS kodunu hangi tarayıcı hangi versiyonda destekliyor?</a></li>
        </ul>
      </Details>

      <Details>
        <summary><span>Font, Psd to CSS</span> <date>13 Aralık 2020</date></summary>

        <p>
          Tasarımı koda döktüğümüz işlemin adı Psd to CSS.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><Strong><strong><a href="https://www.youtube.com/watch?v=AbO1dp_VtGU" target="_blank" rel="noopener noreferrer">Psd to CSS</a></strong></Strong></li>
          <li><a href="https://i.stack.imgur.com/C7oir.png" target="_blank" rel="noopener noreferrer">box-sizing nedir?</a></li>
          <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_attselector_form" target="_blank" rel="noopener noreferrer">CSS attribute seçici</a></li>
          <li><a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_placeholder" target="_blank" rel="noopener noreferrer">CSS ::placeholder seçici</a></li>
          <li><Strong><a href="https://www.youtube.com/watch?v=Bf5DCpbeTlQ" target="_blank" rel="noopener noreferrer">Google DevTools</a></Strong></li>
          <li><a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Font</a> - <a href="https://webcesi.com/web-tasarim/google-fonts-nedir-nasil-kullanilir/"  target="_blank" rel="noopener noreferrer">Google Font nasıl kullanılır?</a></li>
          <li><a href="https://github.com/necolas/normalize.css/" target="_blank" rel="noopener noreferrer">normalize.css</a> - <a href="https://medium.com/@10ursabanoglu/reset-css-normalize-css-23be4ce74ea6" target="_blank" rel="noopener noreferrer">reset.css ve normalize.css nedir?</a></li>
          <li><a href="https://github.com/omergulcicek/css-stil-rehberi" target="_blank" rel="noopener noreferrer">CSS stil rehberi</a></li>
          <li><a href="https://www.yazilimkodlama.com/web/html-form-elemanlari/" target="_blank" rel="noopener noreferrer">HTML Form Elemanları</a></li>
        </ul>

        <h6>Kullanılan Eklentiler;</h6>
        <ul>
          <li><a href="https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=tr" target="_blank" rel="noopener noreferrer">Color Zilla</a> (Sayfadaki rengi almak için)</li>
          <li><a href="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=tr" target="_blank" rel="noopener noreferrer">WhatFont</a> (Sayfadaki yazı stilini seçmek için)</li>
          <li><a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank" rel="noopener noreferrer">Emmet</a> (Hızlı HTML CSS yazmak için) - (<a href="https://medium.com/@10ursabanoglu/emmet-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-3e73e7c1ab26" target="_blank" rel="noopener noreferrer">Emmet nasıl kullanılır?</a>)</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">Live Server</a> (HTML'in anlık yenilenmesi için)</li>
        </ul>

        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><a href="https://assets.materialup.com/uploads/4ad9b2fa-266a-4611-a31b-19dfab021e5f/preview.jpg" target="_blank" rel="noopener noreferrer">Form Tasarımı</a></li>
          <li><a href="https://i1.wp.com/onaircode.com/wp-content/uploads/2018/06/blog-card.jpg?resize=1080%2C675&ssl=1" target="_blank" rel="noopener noreferrer">Kart Tasarımı</a></li>
        </ul>
      </Details>

      <Details>
        <summary><span>Pseudo class</span> <date>19 Aralık 2020</date></summary>

        <p>
          Ağırlıklı olarak CSS seçicilerin üstünde durduk.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">Frontend Roadmap</a> - (Yol haritası)</li>
          <li><Strong><strong><a href="https://www.youtube.com/watch?v=_FLV6X0druY" target="_blank" rel="noopener noreferrer">CSS position</a> - (relative, absolute, fixed)</strong></Strong></li>
          <li><Strong><strong><a href="https://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/" target="_blank" rel="noopener noreferrer">CSS seçiciler</a> -  (:hover, :focus, :nth-child, <a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_nth-child_odd_even" target="_blank" rel="noopener noreferrer">:nth-child(odd)</a> ::before, ::after)</strong></Strong></li>
        </ul>
      </Details>

      <Details>
        <summary><span>BEM, SASS, variable</span> <date>20 Aralık 2020</date></summary>

        <p>
          Kodu daha sağlıklı, anlaşılır ve kolay yazmamızı sağlayan teknolojileri tanıdık.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss3_var" target="_blank" rel="noopener noreferrer">CSS variable</a></li>
          <li><Strong><a href="http://getbem.com/naming/" target="_blank" rel="noopener noreferrer">BEM</a></Strong></li>
          <li><Strong><strong><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Flexbox - (flex, direction, justify-content, align-items)</a></strong></Strong></li>
          <li><Strong><a href="https://sass-lang.com/documentation/style-rules" target="_blank" rel="noopener noreferrer">SASS</a> - (<a href="https://sass-lang.com/documentation/style-rules#nesting" target="_blank" rel="noopener noreferrer">nesting</a>, <a href="https://sass-lang.com/documentation/variables" target="_blank" rel="noopener noreferrer">variable</a>)</Strong></li>
        </ul>

        <h6>Kullanılan Eklentiler;</h6>
        <ul>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass">Live Sass Compiler</a> (SCSS kodunu CSS'e çevirir)</li>
        </ul>

        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><a href="https://www.uistore.design/items/medi-free-meditation-web-headers-for-figma/" target="_blank" rel="noopener noreferrer">Tasarım koda dökülecek</a> - <a href="https://www.figma.com/downloads/" target="_blank" rel="noopener noreferrer">Figma İndir</a> <br/> (Eğitimde gördüğümüz her şeyi kullanmaya çalışın, BEM, SASS, variable, flex, Google fonts vb.)</li>
          <li><a href="https://tr.khanacademy.org/computing/computer-programming/html-css" target="_blank" rel="noopener noreferrer">Khan Academy Testleri Çözülecek</a></li>
        </ul>
      </Details>

      <Details>
        <summary><span>Psd to CSS</span> <date>26-27 Aralık 2020</date></summary>

        <p>
        <a href="https://www.uistore.design/items/trafalgar-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Trafalgar Langing</a> tasarımını Semantic HTML, BEM, SASS ve Bootstrap kullanarak koda döktük.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_hero" target="_blank" rel="noopener noreferrer">CSS'te background-image</a></li>
          <li><Strong><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noopener noreferrer">CSS'te flex-direction</a></strong></Strong></li>
          <li><Strong><strong><a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer">atomic design</a></strong></Strong></li>
          <li><Strong><strong><a href="https://medium.com/@protechman/mobile-first-yakla%C5%9F%C4%B1m-461c223cfb9a" target="_blank" rel="noopener noreferrer">Mobile first kavramı</a></strong></Strong></li>
          <li><Strong><strong><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_ex1" target="_blank" rel="noopener noreferrer">@media query</a></strong></Strong></li>
          <li><Strong><strong><a href="https://getbootstrap.com/docs/4.0/layout/grid/#mix-and-match" target="_blank" rel="noopener noreferrer">Bootstrap grid system</a></strong></Strong> - (<a href="https://sadikturan.com/bootstrap/bootstrap-grids/1201" target="_blank" rel="noopener noreferrer">Grid sistemi kullanımı</a>)</li>
        </ul>

        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><a href="https://www.uistore.design/items/covid-19-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Covid19 tasarımı koda dökülecek</a></li>
          <li><a href="https://www.uistore.design/items/data-warehouse-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Data warehouse tasarımı koda dökülecek</a></li>
        </ul>

        <p>
          Bootstrap'i Codepen'de Ayarlar > Css > arama kısmına Bootstrap yazarak yada <a href="https://getbootstrap.com/docs/5.0/getting-started/download/" target="_blank" rel="noopener noreferrer">sitesinden</a> indirerek yada <a href="https://cdnjs.com/libraries/twitter-bootstrap" target="_blank" rel="noopener noreferrer">CDN</a> ile kodunuza ekleyebilirsiniz.
        </p>

        <p>
          Eğitimde gördüğümüz her şeyi kullanmalıyız: <br />
          BEM, SASS, variable, flex, Google fonts, media query, Bootstrap grid system vb. <br />
          @media query'ler yardımıyla mobil ve tablet üstü için farklı kodlar yazalım; yazıların fontlarının küçülmesi, resimlerin mobilde gizlenmesi, yan yana olan şeylerin mobilde alt alta gelmesi gibi. Tasarımı yorumlamakta özgürsünüz.
        </p>

        <h6>Faydalı Kaynaklar;</h6>
        <ul>
          <li><a href="https://fatihhayrioglu.com/css-dersleri/" target="_blank" rel="noopener noreferrer">Fatih Hayrioğlu'nun CSS Dersleri</a></li>
          <li><a href="https://www.youtube.com/user/uzmanvideo" target="_blank" rel="noopener noreferrer">Prototurk Youtube kanalında HTML, CSS ve Frontend Daily oynatma listeleri</a></li>
          <li><a href="https://www.youtube.com/channel/UC1Z-a8i2Ce4oIEMV-S3iFrg" target="_blank" rel="noopener noreferrer">Adem İlter'in Sıfırdan CSS Eğitim ve HTML+CSS Öğreniyoruz oynatma listeleri</a></li>
        </ul>
      </Details>

      <Details>
        <summary><span>Git, JavaScript Temeli</span> <date>9 Ocak 2021</date></summary>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><Strong><strong><a href="https://rogerdudler.github.io/git-guide/index.tr.html" target="_blank" rel="noopener noreferrer">Git</a></strong></Strong> - (master, checkout, branch, add, commit, push, merge, pull, fetch, conflict)</li>
          <li><Strong><strong><a href="https://tr.javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript</a></strong></Strong> (script tag'i, <a href="https://www.w3schools.com/js/js_variables.asp" target="_blank" rel="noopener noreferrer">değişkenler</a> -<a href="https://www.w3schools.com/js/js_arrays.asp" target="_blank" rel="noopener noreferrer">array</a> - <a href="https://www.w3schools.com/js/js_booleans.asp" target="_blank" rel="noopener noreferrer">booleans</a>, <a href="https://www.w3schools.com/js/js_if_else.asp" target="_blank" rel="noopener noreferrer">if/else</a>, <a href="https://www.w3schools.com/js/js_loop_for.asp">for</a>, log, debugger, promp)</li>
        </ul>

        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><i>JavaScript Ödev - Pratik</i><br />
          <span>Değişken, for ve if kullanılarak aşağıdaki senaryo oluşturulacak.<br />
          Örnek çıktı şu şekilde olacaktır: <i>Ömer doğdu, Ömer 1 yaşında, Ömer 2 yaşında, ... Ömer reşit oldu, Ömer 30 yaşında evlendi</i>
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li>ad, resitYas, evlenecegiYas değişkenleri oluşturulacak</li>
              <li>evlenecegiYas değişkeni promp() ile kullanıcıya sorulacak</li>
              <li>for ile 0'dan 35'e kadar döngü oluşturulacak</li>
              <li>Kişinin yaşı 0 ise doğdu, 18 ise reşit oldu, 'evlenecegiYas' ise konsola evlendi yazacak</li>
            </ul>
          </span>
          </li>
        </ul>
      </Details>

      <Details>
        <summary><span>JavaScript</span> <date>10 Ocak 2021</date></summary>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><Strong><strong>JavaScript</strong></Strong> (<a href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp" target="_blank" rel="noopener noreferrer">Events</a>, dir, <a href="https://www.w3schools.com/jsref/jsref_foreach.asp" target="_blank" rel="noopener noreferrer">forEach</a>, <a href="https://www.w3schools.com/js/js_functions.asp" target="_blank" rel="noopener noreferrer">function</a>, <a href="https://www.w3schools.com/jsref/prop_element_classlist.asp" target="_blank" rel="noopener noreferrer">classList </a>, <a href="https://www.w3schools.com/jsref/prop_node_innertext.asp" target="_blank" rel="noopener noreferrer">innerText</a>, <a href="https://www.w3schools.com/jsref/prop_html_innerhtml.asp" target="_blank" rel="noopener noreferrer">innerHTML</a>)</li>
        </ul>
      
        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><i>JavaScript Ödev - Koyu Tema</i><br />
          <span>Butona basıldığında koyu tema atkifleştirilip, kaldırılacak.
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li>Ekranda çeşitli yazılarak olacak.</li>
              <li>"Koyu temayı aç" butonuna basılınca arkaplan ve yazı renkleri değişecek ve buton "Koyu temayı kapat" olacak.</li>
            </ul>
          </span>
          </li>
          <li><i>JavaScript Ödev - Üyelik Form Kontrol</i><br />
          <span>Ad, soyad, kullanıcı adı, email, parola, parola tekrar formu hazırlanacak.<br />
          Submit edildiğinde kurallara göre sonuç verecek.<br />
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li>Ad soyad otomatik olarak kullanıcı adı yapılacak; Ömer+Gülçiçek = ömergülçiçek</li>
              <li>Submit edildiğinde parola eşleşmiyorsa yada 8 karakterden az ise kırmızı bir div'e "Parolanız 8 karakterden az yada eşleşmiyor" yazmalı</li>
              <li>Form başarılı ise yeşil bir div'e <i>"Hoşgeldin @ömergülçiçek"</i> yazmalı</li>
            </ul>
          </span>
          </li>
          <li><i>JavaScript Ödev - Çekiliş Uygulaması (İsteğe bağlı)</i><br />
          <span>Kullanıcıdan input ile kullanıcı listesi alınacak ve rastgele hediye dağıtılacak.<br />
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li>Kullanıcı input'a virgüller ile sürüyle isim girecek (<i>"Ali, Veli, Ayşe, Zeynep" vb.</i>).</li>
              <li>Submit butonuna basıldığında bu isimler split() fonksiyonu ile diziye aktarılacak.</li>
              <li>Kullanıcı sayısı kadar rastgele bir rakam seçilip o kişiye rastgele bir hediye verilecek.</li>
              <li>Hediye kazanan kişiler ve verilen hediyeler dizilerden kaldırılmalı</li>
              <li>En son kimin ne hediye kazandığı ekrana yazdırılacak</li>
            </ul>
          </span>
          </li>
        </ul>
      </Details>

      <Details>
        <summary><span>JavaScript Pratik</span> <date>16 Ocak 2021</date></summary>

        <p>
          Geniş kapsamlı JavaScript örneği üzerinde duruldu ve genel tekrar yapıldı.
        </p>
      
        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><i>JavaScript Ödev - Tiyatro Oturma Planı</i><br />
          <span>Kimin hangi sırada oturacağını çeken JavaScript kodu geliştirilecek.
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li>Id, katılımcı ismi, tiyatroya gelecek mi checkbox'ı ve sıra numarasını alan bir input olacak.</li>
              <li>Sıra numarası varsayılan olarak disabled gelecek.</li>
              <li>Partiye gelecek mi checkbox'ı dinlenecek, eğer gelecek ise sıra numarası yazılabilir olacak.</li>
              <li>Sırayı kaydet butonuna tıklanıldığında tablodan veriler okunulacak ve konsola yazdırılacak.</li>
              <li>Çıktı içerisinde, id ve sıra numarasını tutan objeleri kapsayan bir array oluşacak.</li>
            </ul>
          </span>
          </li>
        </ul>
      </Details>

      <Details>
        <summary><span>React'a Giriş</span> <date>17 Ocak 2021</date></summary>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><Strong><strong>React</strong></Strong> (<a href="https://miro.medium.com/max/1220/1*xqGJ7fECmgHQQZq5AbgeIw.png" target="_blank" rel="noopener noreferrer">Virtual DOM</a>, <a href="https://omergulcicek.com/jsx-nedir" target="_blank" rel="noopener noreferrer">JSX</a>, <a href="https://omergulcicek.github.io/react/kurulum/reactjs-kurulumu" target="_blank" rel="noopener noreferrer">Create React App</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export" target="_blank" rel="noopener noreferrer">export default - import</a>, <a href="https://omergulcicek.github.io/react/hizli-baslangic/component-ve-props" target="_blank" rel="noopener noreferrer">components - props</a>)</li>
        </ul>
      </Details>

      <Details>
        <summary>Sıradaki işlenecek konular</summary>

        <ul>
          <li>React (state, Conditional Rendering, Handling Events, Lifecycle, Hooks)</li>
          <li>React ile Live Search Uygulaması</li>
        </ul>
      </Details>

      <br />
      <br />

      <p>
        <a href="https://docs.google.com/spreadsheets/d/1QIeF1E-gv8HGm-_QCs-1vf8SFDQPxiH0J251i6L8dKg/edit#gid=0" target="_blank" rel="noopener noreferrer">Ödevler'in Codepen linki olarak ekleneceği link</a>
      </p>
    </section>
  </Layout>
)

export default Bootcamp