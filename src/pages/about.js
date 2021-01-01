import React from "react"
import { Link } from "gatsby"
import { AboutTitle, AboutTurkuaz, AboutTurkceDokuman, AboutMail, AboutHangiKredi, AboutFigure, Svg, Hr } from "../components/Styled"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Title from "../components/Title"

const About = () => (
  <Layout>
    <SEO title="Hakkımda" />

    <div className="container">
      <Title t1="Benim" t2="Hakkımda" />

      <p>
        Merhaba! Ben Ömer Gülçiçek. { new Date().getFullYear() - 1993 } yaşındayım ve İstanbul'da yaşıyorum.
      </p>

      <p>
        Yazılım mühendisliği alanında lisans derecem var. Frontend Developer'ım; <AboutHangiKredi href="https://hangikredi.com/" target="_blank" rel="noopener noreferrer">hangikredi.com</AboutHangiKredi>'da uzaktan çalışıyorum. UI/UX alanında uzmanlaşmayı hedefliyorum. Kod benim için bir tutku.
      </p>

      <p>
        <AboutTurkuaz href="https://turkuazcss.com/" target="_blank" rel="noopener noreferrer">Turkuaz</AboutTurkuaz> ve <AboutTurkceDokuman href="https://turkcedokuman.com/" target="_blank" rel="noopener noreferrer">Türkçe Doküman</AboutTurkceDokuman> projeleri başta olmak üzere çalışmalarımın tamamı açık kaynak. Türkçe kaynak sayısını arttırmak adına yazılım alanında çeviriler yapmaktayım. Kendimi sürekli güncel tutmak ve bildiklerimi aktarabilmek adına makale <Link to="/blog/">yazıyorum</Link>.
      </p>

      <p>
        Benimle konuşmak istediğiniz bir konu varsa <AboutMail href="mailto:iletisim@omergulcicek.com">iletisim@omergulcicek.com</AboutMail> adresine detaylı bir mail atabilirsiniz. Freelance iş, özel ders yada eğitmenlik için müsaitim.
      </p>

      <AboutFigure>
        <img src="" alt="" />
      </AboutFigure>

      <AboutTitle>Eğitim & Seminer</AboutTitle>

      <p>
        Bildiklerimi başkalarına aktarmayı seviyorum.
      </p>

      <ul>
        <li>
          <a href="https://www.kodluyoruz.org/bootcamp/kirikkale-front-end-web-gelistirme-101-bootcamp" target="_blank" rel="noopener noreferrer">Kırıkkale Front-End Web Geliştirme 101 Bootcamp</a>

          <p>
            12 Aralık - 24 Ocak 2021 tarihleri arasında her hafta sonu Cumartesi ve Pazar günleri saat 10:00 - 15:00 arası gerçekleşecek.
          </p>
        </li>
      </ul>

      <Hr />

      <AboutTitle>Hakkımda birkaç şey:</AboutTitle>

      <ul>
        <li>Minimalist yaşam felsefesini seviyorum.</li>
        <li>Küçük yaşlarda resim eğitimi aldım ve birçok tekniğe hakimim. <br/> Artık kağıt ve kalemden çok uzaklaşmış olmamdan dolayı, önümüzdeki süreçte tablet çizime yöneleceğim.</li>
        <li>Sıkı bir satranç oyuncusuyum. Yıllardır günlük 5 maç ortalamasıyla oynuyorum.</li>
        <li>Rubik küp çözebiliyorum.</li>
        <li>Olimpik havuzda yüzüyor ve her hafta halı saha maçı yapıyorum.</li>
        <li>Kişisel gelişim, tarih, tasavvuf konuları başta olmak üzere kitap okumayı seviyorum. Gelecekteki evimde büyük bir kütüphaneye sahip olmayı hedefliyorum.</li>
      </ul>



      <Svg viewBox="0 0 200 200">
        <path fill="var(--c-theme)" d="M45.3,-52.9C60.9,-40.9,77.3,-28.7,79.5,-14.3C81.7,0.1,69.8,16.8,57.7,29.1C45.6,41.5,33.3,49.7,18.3,58.8C3.4,67.9,-14.3,77.9,-29.3,74.9C-44.3,71.9,-56.5,55.8,-59.2,39.7C-62,23.6,-55.2,7.5,-51.7,-8.5C-48.1,-24.5,-47.8,-40.5,-39.7,-53.9C-31.6,-67.2,-15.8,-77.8,-0.5,-77.2C14.9,-76.6,29.7,-64.9,45.3,-52.9Z" transform="translate(100 100)" />
      </Svg>
    </div>
  </Layout>
)

export default About