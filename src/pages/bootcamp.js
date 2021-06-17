import React from "react"
import { Article } from "../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Title from "../components/Title"

const Bootcamp = () => (
  <Layout>
    <SEO title="Bootcamp" />

    <section className="bootcamp">
      <Title t1="Frontend" t2="Bootcamp" />

      <Article>
        <div><h2>HTML, CSS Seçiciler</h2> <date>12 Aralık 2020</date></div>

        <p>
          Doğru HTML etiketleri kullanıp, nerede span nerede h1 kullanmamız gerektiğini üzerinde durduk.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li>HTML etiketleri (html, head, body, title, <a href="http://www.tasarimveyazilim.com/html-charset-nedir-ve-nasil-kullanilir/" target="_blank" rel="noopener noreferrer">UTF-8</a>, <a href="https://www.aramamotoru.com/html-lang-etiketi-nedir-nasil-kullanilir/" target="_blank" rel="noopener noreferrer">lang="tr"</a>, h1, p, span, a, img, table)</li>
          <li><a href="https://www.w3schools.com/tags/tag_doctype.asp" target="_blank" rel="noopener noreferrer">DOCTYPE nedir?</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg" target="_blank" rel="noopener noreferrer">DOM nedir?</a></li>
          <li><a href="https://fatihhayrioglu.com/meta-viewport-etiketi" target="_blank" rel="noopener noreferrer">meta viewport nedir?</a></li>
          <li><a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer">Semantic HTML nedir?</a></li>
          <li>CSS seçiciler - <a href="https://fatihhayrioglu.com/cssde-tanimlamalar-ve-etkinliklerispecificity/" target="_blank" rel="noopener noreferrer">id, class, !important</a> - <a href="https://www.youtube.com/watch?v=YmiMpFaNAx4" target="_blank" rel="noopener noreferrer">inline, inline-block, block</a> - <a href="https://hakantasan.com/index/makaleler/14/css-padding-nedir-margin-nedir" target="_blank" rel="noopener noreferrer">margin, padding</a></li>
          <li><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">CSS kodunu hangi tarayıcı hangi versiyonda destekliyor?</a></li>
        </ul>
      </Article>

      <Article>
        <div><h2>Font, Psd to CSS</h2> <date>13 Aralık 2020</date></div>

        <p>
          Tasarımı koda döktüğümüz işlemin adı Psd to CSS.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://www.youtube.com/watch?v=AbO1dp_VtGU" target="_blank" rel="noopener noreferrer">Psd to CSS</a></li>
          <li><a href="https://i.stack.imgur.com/C7oir.png" target="_blank" rel="noopener noreferrer">box-sizing nedir?</a></li>
          <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_attselector_form" target="_blank" rel="noopener noreferrer">CSS attribute seçici</a></li>
          <li><a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_placeholder" target="_blank" rel="noopener noreferrer">CSS ::placeholder seçici</a></li>
          <li><a href="https://www.youtube.com/watch?v=Bf5DCpbeTlQ" target="_blank" rel="noopener noreferrer">Google DevTools</a></li>
          <li><a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Font</a> - <a href="https://webcesi.com/web-tasarim/google-fonts-nedir-nasil-kullanilir/"  target="_blank" rel="noopener noreferrer">Google Font nasıl kullanılır?</a></li>
          <li><a href="https://github.com/necolas/normalize.css/" target="_blank" rel="noopener noreferrer">normalize.css</a> - <a href="https://medium.com/@10ursabanoglu/reset-css-normalize-css-23be4ce74ea6" target="_blank" rel="noopener noreferrer">reset.css ve normalize.css nedir?</a></li>
          <li><a href="https://github.com/omergulcicek/css-stil-rehberi" target="_blank" rel="noopener noreferrer">CSS stil rehberi</a></li>
          <li><a href="https://www.yazilimkodlama.com/web/html-form-elemanlari/" target="_blank" rel="noopener noreferrer">HTML Form Elemanları</a></li>
        </ul>

        <b>Kullanılan Eklentiler;</b>
        <ul>
          <li><a href="https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=tr" target="_blank" rel="noopener noreferrer">Color Zilla</a> (Sayfadaki rengi almak için)</li>
          <li><a href="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=tr" target="_blank" rel="noopener noreferrer">WhatFont</a> (Sayfadaki yazı stilini seçmek için)</li>
          <li><a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank" rel="noopener noreferrer">Emmet</a> (Hızlı HTML CSS yazmak için) - (<a href="https://medium.com/@10ursabanoglu/emmet-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-3e73e7c1ab26" target="_blank" rel="noopener noreferrer">Emmet nasıl kullanılır?</a>)</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">Live Server</a> (HTML'in anlık yenilenmesi için)</li>
        </ul>

        <b>Verilen Ödevler;</b>
        <ul>
          <li><a href="https://assets.materialup.com/uploads/4ad9b2fa-266a-4611-a31b-19dfab021e5f/preview.jpg" target="_blank" rel="noopener noreferrer">Form Tasarımı</a></li>
          <li><a href="https://i1.wp.com/onaircode.com/wp-content/uploads/2018/06/blog-card.jpg?resize=1080%2C675&ssl=1" target="_blank" rel="noopener noreferrer">Kart Tasarımı</a></li>
        </ul>
      </Article>

      <Article>
        <div><h2>Pseudo class</h2> <date>19 Aralık 2020</date></div>

        <p>
          Ağırlıklı olarak CSS seçicilerin üstünde durduk.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://roadmap.sh/frontend" target="_blank" rel="noopener noreferrer">Frontend Roadmap</a> - (Yol haritası)</li>
          <li><a href="https://www.youtube.com/watch?v=_FLV6X0druY" target="_blank" rel="noopener noreferrer">CSS position</a> - (relative, absolute, fixed)</li>
          <li><a href="https://fatihhayrioglu.com/pseudo-siniflari-ve-pseudo-elementleri/" target="_blank" rel="noopener noreferrer">CSS seçiciler</a> -  (:hover, :focus, :nth-child, <a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_nth-child_odd_even" target="_blank" rel="noopener noreferrer">:nth-child(odd)</a> ::before, ::after)</li>
        </ul>
      </Article>

      <Article>
        <div><h2>BEM, SASS, variable</h2> <date>20 Aralık 2020</date></div>

        <p>
          Kodu daha sağlıklı, anlaşılır ve kolay yazmamızı sağlayan teknolojileri tanıdık.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss3_var" target="_blank" rel="noopener noreferrer">CSS variable</a></li>
          <li><a href="http://getbem.com/naming/" target="_blank" rel="noopener noreferrer">BEM</a></li>
          <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Flexbox - (flex, direction, justify-content, align-items)</a></li>
          <li><a href="https://sass-lang.com/documentation/style-rules" target="_blank" rel="noopener noreferrer">SASS</a> - (<a href="https://sass-lang.com/documentation/style-rules#nesting" target="_blank" rel="noopener noreferrer">nesting</a>, <a href="https://sass-lang.com/documentation/variables" target="_blank" rel="noopener noreferrer">variable</a>)</li>
        </ul>

        <b>Kullanılan Eklentiler;</b>
        <ul>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass">Live Sass Compiler</a> (SCSS kodunu CSS'e çevirir)</li>
        </ul>

        <b>Verilen Ödevler;</b>
        <ul>
          <li><a href="https://www.uistore.design/items/medi-free-meditation-web-headers-for-figma/" target="_blank" rel="noopener noreferrer">Tasarım koda dökülecek</a> - <a href="https://www.figma.com/downloads/" target="_blank" rel="noopener noreferrer">Figma İndir</a> <br/> (Eğitimde gördüğümüz her şeyi kullanmaya çalışın, BEM, SASS, variable, flex, Google fonts vb.)</li>
          <li><a href="https://tr.khanacademy.org/computing/computer-programming/html-css" target="_blank" rel="noopener noreferrer">Khan Academy Testleri Çözülecek</a></li>
        </ul>
      </Article>

      <Article>
        <div><h2>Psd to CSS</h2> <date>26-27 Aralık 2020</date></div>

        <p>
        <a href="https://www.uistore.design/items/trafalgar-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Trafalgar Langing</a> tasarımını Semantic HTML, BEM, SASS ve Bootstrap kullanarak koda döktük.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_hero" target="_blank" rel="noopener noreferrer">CSS'te background-image</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noopener noreferrer">CSS'te flex-direction</a></li>
          <li><a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer">atomic design</a></li>
          <li><a href="https://medium.com/@protechman/mobile-first-yakla%C5%9F%C4%B1m-461c223cfb9a" target="_blank" rel="noopener noreferrer">Mobile first kavramı</a></li>
          <li><a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_ex1" target="_blank" rel="noopener noreferrer">@media query</a></li>
          <li><a href="https://getbootstrap.com/docs/4.0/layout/grid/#mix-and-match" target="_blank" rel="noopener noreferrer">Bootstrap grid system</a> - (<a href="https://sadikturan.com/bootstrap/bootstrap-grids/1201" target="_blank" rel="noopener noreferrer">Grid sistemi kullanımı</a>)</li>
        </ul>

        <b>Verilen Ödevler;</b>
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

        <b>Faydalı Kaynaklar;</b>
        <ul>
          <li><a href="https://fatihhayrioglu.com/css-dersleri/" target="_blank" rel="noopener noreferrer">Fatih Hayrioğlu'nun CSS Dersleri</a></li>
          <li><a href="https://www.youtube.com/user/uzmanvideo" target="_blank" rel="noopener noreferrer">Prototurk Youtube kanalında HTML, CSS ve Frontend Daily oynatma listeleri</a></li>
          <li><a href="https://www.youtube.com/channel/UC1Z-a8i2Ce4oIEMV-S3iFrg" target="_blank" rel="noopener noreferrer">Adem İlter'in Sıfırdan CSS Eğitim ve HTML+CSS Öğreniyoruz oynatma listeleri</a></li>
        </ul>
      </Article>

      <Article>
        <div><h2>Git, JavaScript Temeli</h2> <date>9 Ocak 2021</date></div>

        <p>
          Git ile temel komutları gösterip JavaScript temellerini gördük.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://rogerdudler.github.io/git-guide/index.tr.html" target="_blank" rel="noopener noreferrer">Git</a> - (master, checkout, branch, add, commit, push, merge, pull, fetch, conflict)</li>
          <li><a href="https://tr.javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript</a> (script tag'i, <a href="https://www.w3schools.com/js/js_variables.asp" target="_blank" rel="noopener noreferrer">değişkenler</a> -<a href="https://www.w3schools.com/js/js_arrays.asp" target="_blank" rel="noopener noreferrer">array</a> - <a href="https://www.w3schools.com/js/js_booleans.asp" target="_blank" rel="noopener noreferrer">booleans</a>, <a href="https://www.w3schools.com/js/js_if_else.asp" target="_blank" rel="noopener noreferrer">if/else</a>, <a href="https://www.w3schools.com/js/js_loop_for.asp">for</a>, log, debugger, promp)</li>
        </ul>

        <b>Verilen Ödevler;</b>
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
      </Article>

      <Article>
        <div><h2>JavaScript</h2> <date>10 Ocak 2021</date></div>

        <b>İşlenen Konular;</b>

        <ul>
          <li>JavaScript (<a href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp" target="_blank" rel="noopener noreferrer">Events</a>, dir, <a href="https://www.w3schools.com/jsref/jsref_foreach.asp" target="_blank" rel="noopener noreferrer">forEach</a>, <a href="https://www.w3schools.com/js/js_functions.asp" target="_blank" rel="noopener noreferrer">function</a>, <a href="https://www.w3schools.com/jsref/prop_element_classlist.asp" target="_blank" rel="noopener noreferrer">classList </a>, <a href="https://www.w3schools.com/jsref/prop_node_innertext.asp" target="_blank" rel="noopener noreferrer">innerText</a>, <a href="https://www.w3schools.com/jsref/prop_html_innerhtml.asp" target="_blank" rel="noopener noreferrer">innerHTML</a>)</li>
        </ul>
      
        <b>Verilen Ödevler;</b>
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
      </Article>

      <Article>
        <div><h2>JavaScript Pratik</h2> <date>16 Ocak 2021</date></div>

        <p>
          Geniş kapsamlı JavaScript örneği üzerinde duruldu ve genel tekrar yapıldı.
        </p>
      
        <b>Verilen Ödevler;</b>
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
      </Article>

      <Article>
        <div><h2>React'a Giriş</h2> <date>17 Ocak 2021</date></div>

        <p>
          CRA ile React temellerini gördük.
        </p>

        <b>İşlenen Konular;</b>

        <ul>
          <li>React (<a href="https://miro.medium.com/max/1220/1*xqGJ7fECmgHQQZq5AbgeIw.png" target="_blank" rel="noopener noreferrer">Virtual DOM</a>, <a href="https://omergulcicek.com/jsx-nedir" target="_blank" rel="noopener noreferrer">JSX</a>, <a href="https://omergulcicek.github.io/react/kurulum/reactjs-kurulumu" target="_blank" rel="noopener noreferrer">Create React App</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export" target="_blank" rel="noopener noreferrer">export default - import</a>, <a href="https://omergulcicek.github.io/react/hizli-baslangic/component-ve-props" target="_blank" rel="noopener noreferrer">components - props</a>)</li>
        </ul>
      </Article>

      <Article>
        <div><h2>React</h2> <date>23 Ocak 2021</date></div>

        <b>İşlenen Konular;</b>

        <ul>
          <li>React (<a href="https://reactjs.org/docs/hooks-reference.html" target="_blank" rel="noopener noreferrer">Hooks</a>, <a href="https://omergulcicek.github.io/react/hizli-baslangic/state-ve-lifecycle" target="_blank" rel="noopener noreferrer">State</a>,  <a href="https://omergulcicek.github.io/react/hizli-baslangic/sartli-render" target="_blank" rel="noopener noreferrer">Conditional Rendering</a>, <a href="https://dmitripavlutin.com/controlled-inputs-using-react-hooks/" target="_blank" rel="noopener noreferrer">Handling Event</a>)</li>
        </ul>

        <b>Kullanılan Eklentiler;</b>

        <ul>
          <li><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" target="_blank" rel="noopener noreferrer">React Developer Tools</a> - (DevTools'ta React componentlerini görmek için)</li>
        </ul>
      </Article>

      <Article>
        <div><h2>React Router, JSON Server, Axios</h2> <date>24 Ocak 2021</date></div>

        <b>İşlenen Konular;</b>

        <ul>
          <li><a href="https://github.com/omergulcicek/react-router" target="_blank" rel="noopener noreferrer">React Router</a></li>
          <li><a href="https://www.npmjs.com/package/json-server" target="_blank" rel="noopener noreferrer">JSON Server</a></li>
          <li><a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a></li>
        </ul>

        <b>Verilen Ödevler;</b>
        <ul>
          <li><i>React Ödev - Objeden header oluşturma ve state pratikleri</i><br />
          <span>Verilen <code>headerLinks</code> dizisi ile <a href="https://github.com/omergulcicek/bootcamp/blob/master/React/README.md#react-%C3%B6devi" target="_blank" rel="noopener noreferrer">istenilen layout ve ve isimlerde</a> geliştirme tamamlanacaktır.
            <p>
              <u>Yapılacaklar:</u>
            </p>
            <ul>
              <li><code>headerLinks</code> dizisi <code>&lt;Header /&gt;</code> componentine parametre olarak gönderilecek ve menü renderlanacak.</li>
              <li><code>&lt;input&gt;</code>'a girilen değer anlık olarak <code>&lt;UserCard /&gt;</code> componentine gönerilip, ekrana yazılacak.</li>
            </ul>
          </span>
          </li>
        </ul>
      </Article>

      <Article>
        <div><h2>Bitirme Projesi</h2> <date>Son Gün: 28 Şubat 2021</date></div>

        <p>
          Bitirme projesi olarak daha önce geliştirdiğimiz <a href="https://www.uistore.design/items/covid-19-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Covid19 tasarımı React ile koda dökülecek</a>. İsteyen kişiler şartları sağlayan ve işlediğimiz konuları içeren herhangi bir başka proje geliştirilebilir.
        </p>

        <b>Proje Şartları;</b>

        <ul>
          <li>Proje <b>Create React App</b> başlangıç kiti ile koda dökülecek.</li>
          <li><b>Semantic HTML</b> etiketleri kullanılacak.</li>
          <li>CSS kısmında <b>SASS/LESS</b> yada <b>Styled Component</b> kullanılabilir (<i>Düz CSS kullanmayın</i>).</li>
          <li>SASS yada LESS ile geliştirenler <b>BEM</b> kullanmalı.</li>
          <li><b>Bootstrap</b> grid sistemi ile mobil öncelikli geliştirilecek.</li>
          <li><b>React Router</b> ile geliştirilecek (<i>Tasarımdaki section'ları farklı sayfalarda geliştirin</i>).</li>
          <li>Statik yazılar hariç her yazı, <a href="https://github.com/omergulcicek/bootcamp/blob/master/React/README.md#bitirme-projesi" target="_blank" rel="noopener noreferrer">verilen obje render'lanarak</a> ekrana yazılacak.</li>
          <li><b>Hook</b> (<i>useState ve useEffect</i>) kullanın.</li>
          <li>Proje <b>GitHub'a atılacak</b>.</li>
        </ul>

        <b>Bitirme Projesi Hakkında Notlar;</b>

        <ul>
          <li>Tasarımın mobil ve tablet versiyonu olmadığı için buralarda esnek davranmanız serbest. Yazı boyutları ve margin/padding'leri azaltarak mobile göre sığdırmaya çalışabilirsiniz. Fakat mobilde (<i>arkaplan görselleri hariç</i>) herhangi bir başlık, yazı yada resmi gizlemeyin.</li>
          <li>Projeyi bitirdikten sonra proje şartlarını sağlayıp sağlamadığını mutlaka kontrol edin.</li>
          <li>Tasarımda farklı farklı butonlar mevcut. Standart olması açısından 1 tanesini component olarak geliştirip, her yere bu componenti çağırın.</li>
          <li>Tasarımı 100% tutturmaya çalışmaya gerek yok, bir kaç px'lik kaymalar yada farklar sorun değil, göze batan çok büyük hatalar olmasın kafi; önemli olan React yapısı.</li>
          <li>Sizlere verilen diziyi projenize dahil edip, axios (<i>yada herhangi bir istek atan kütüphane ile</i>) ile ulaşıp kullanın.</li>
        </ul>
      </Article>
    </section>
  </Layout>
)

export default Bootcamp