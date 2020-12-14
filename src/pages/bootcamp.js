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
        </ul>


        <h6>Verilen Ödevler;</h6>
        <ul>
          <li><a href="https://assets.materialup.com/uploads/4ad9b2fa-266a-4611-a31b-19dfab021e5f/preview.jpg" target="_blank" rel="noopener noreferrer">Form Tasarımı</a></li>
          <li><a href="https://i1.wp.com/onaircode.com/wp-content/uploads/2018/06/blog-card.jpg?resize=1080%2C675&ssl=1" target="_blank" rel="noopener noreferrer">Kart Tasarımı</a></li>
        </ul>
      </Details>

      <Details>
        <summary>Sıradaki işlenecek konular</summary>

        <ul>
          <li>Frontend Roadmap</li>
          <li><Strong><strong>CSS position</strong></Strong></li>
          <li><Strong><strong>CSS seçiciler (:hover, :focus, :nth-child, ::before, ::after)</strong></Strong> - Açılır menü örneği</li>
          <li>CSS variable</li>
          <li><Strong>BEM</Strong></li>
          <li><Strong><strong>CSS Flexbox</strong></Strong></li>
          <li><Strong><strong>media query, responsive web, mobile first</strong></Strong></li>
          <li><Strong>SASS</Strong></li>
          <li><Strong><strong>Bootstrap</strong></Strong></li>
        </ul>
      </Details>
    </div>
  </Layout>
)

export default Bootcamp

const Strong = styled.span`
  color: var(--c-theme);
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