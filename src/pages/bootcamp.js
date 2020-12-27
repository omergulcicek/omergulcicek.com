import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Title from "../components/Title"

const Bootcamp = () => (
  <Layout>
    <Helmet
      title="Bootcamp"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <div className="container">
      <Title t1="Frontent" t2="Bootcamp" />

      <p>
        Başlıklara tıklayarak detayları inceleyebilirsiniz.
      </p>

      <p>
        <Strong><strong>Mavi ve kalın yazılar 100% hakim olmamız gereken konular</strong></Strong>
        <br/>
        <Strong>Sadece mavi yazılar, bilmemiz gereken konular</Strong>
      </p>

      <p>
        <a href="https://docs.google.com/spreadsheets/d/1QIeF1E-gv8HGm-_QCs-1vf8SFDQPxiH0J251i6L8dKg/edit#gid=0" target="_blank" rel="noopener noreferrer">Ödevler'in Codepen linki olarak ekleneceği link</a>
      </p>

      <br/>

      <Details>
        <summary><b>1.</b> 12 Aralık 2020 - HTML, CSS Seçiciler</summary>

        <p>
          Doğru HTML etiketleri kullanıp, nerede span nerede h1 kullanmamız gerektiğini bilip robotların anlayacağı kodu yazmak üzerinde durduk.
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
        <summary><b>2.</b> 13 Aralık 2020 - Font, Psd to CSS</summary>

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
        <summary><b>3.</b> 19 Aralık 2020 - Pseudo class</summary>

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
        <summary><b>4.</b> 20 Aralık 2020 - BEM, SASS, variable</summary>

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
        <summary><b>5.</b> 26-27 Aralık 2020 - Psd to CSS</summary>

        <p>
          Gerçek bir tasarımı Semantic HTML, BEM, SASS ve Bootstrap kullanarak <a href="https://www.uistore.design/items/trafalgar-landing-page-for-figma/" target="_blank" rel="noopener noreferrer">Trafalgar Langing</a> tasarımını koda döktük.
        </p>

        <h6>İşlenen Konular;</h6>

        <ul>
          <li><a href="https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_hero" target="_blank" rel="noopener noreferrer">CSS'te background-image</a></li>
          <li><Strong><strong><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" rel="noopener noreferrer">CSS'te flex-direction</a></strong></Strong> - (Mobilde alt alta, tablette yan yana gelmesinin temel kodu)</li>
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
        <summary>Sıradaki işlenecek konular</summary>

        <ul>
          <li><Strong><strong><a href="https://prototurk.com/git" target="_blank" rel="noopener noreferrer">Git</a></strong></Strong></li>
          <li><Strong><strong><a href="https://tr.javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript</a></strong></Strong></li>
        </ul>
      </Details>
    </div>
  </Layout>
)

export default Bootcamp

const Strong = styled.span`
  color: var(--c-theme);

  a {
    text-decoration-color: var(--c-theme);
  }
`

const Details = styled.details`
  border-left: 2px solid transparent;
  padding: 24px 16px;

  &:not(:first-of-type) {
    border-top: 1px solid rgba(0,0,0,0.3);
  }

  summary {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    outline: none;
    position: relative;
    transition: var(--g-transition);

    &::after {
      background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC1kb3duIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgZmEtMngiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+");
      background-repeat: no-repeat;
      content: "";
      display: block;
      height: 18px;
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  code {
    font-size: inherit;
  }

  h6 {
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: 24px;
  }

  p {
    margin-top: 16px;
    position: relative;
    transition: var(--g-transition);
  }

  &[open] {
    background-color: #1B2125;
    border-left-color: var(--c-theme);

    summary,
    h6,
    p {
      margin-left: 16px;
    }

    summary {
      &::after {
        background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC11cCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtdXAgZmEtdy0xMCBmYS0yeCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4OC42NjIgMzUySDMxLjMzOGMtMTcuODE4IDAtMjYuNzQxLTIxLjU0My0xNC4xNDItMzQuMTQybDEyOC42NjItMTI4LjY2MmM3LjgxLTcuODEgMjAuNDc0LTcuODEgMjguMjg0IDBsMTI4LjY2MiAxMjguNjYyYzEyLjYgMTIuNTk5IDMuNjc2IDM0LjE0Mi0xNC4xNDIgMzQuMTQyeiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==");
      }
    }
  }
`