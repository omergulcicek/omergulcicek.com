import React from "react"
import { Link } from "gatsby"
import { AboutTurkuaz, AboutTurkceDokuman, AboutMail, AboutHangiKredi, AboutFigure, Svg, Hr, H2Title, GetInTouch, Button } from "../components/Styled"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Title from "../components/Title"

const About = () => (
  <Layout>
    <SEO title="Hakkımda" />

    <section className="about">
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
      
      <Hr />

      <AboutFigure>
        <img src="" alt="" loading="lazy" />
      </AboutFigure>

      <H2Title>
        <div>Eğitim <span>& Seminer</span></div>
      </H2Title>

      <p>
        Bildiklerimi başkalarına aktarmayı seviyorum.
      </p>

      <ul>
        <li>
          <p>
            <a href="https://www.kodluyoruz.org/bootcamp/kirikkale-front-end-web-gelistirme-101-bootcamp" target="_blank" rel="noopener noreferrer">Kırıkkale Front-End Web Geliştirme 101 Bootcamp</a>
          </p>

          <p>
            12 Aralık - 24 Ocak 2021 tarihleri arasında farklı alanlardan 30 öğrenciye sıfırdan Frontend eğitimi verdim. Sırasıyla HTML, CSS, Git, JavaScript ve React anlattım. <br /> Eğitim hakkındaki detaylara <Link to="/bootcamp/">Frontend Bootcamp</Link> sayfasından erişebilirsiniz.
          </p>
        </li>
      </ul>

      <Hr />

      <H2Title>
        <div>Hakkımda <span>Birkaç Şey</span></div>
      </H2Title>

      <ul>
        <li>Minimalist yaşam felsefesini seviyorum.</li>
        <li>Küçük yaşlarda resim eğitimi aldım ve birçok tekniğe hakimim. <br/> Artık kağıt ve kalemden çok uzaklaşmış olmamdan dolayı, önümüzdeki süreçte tablet çizime yöneleceğim.</li>
        <li>Sıkı bir satranç oyuncusuyum. Yıllardır günlük 5 maç ortalamasıyla oynuyorum.</li>
        <li>Rubik küp çözebiliyorum.</li>
        <li>Olimpik havuzda yüzüyor ve her hafta halı saha maçı yapıyorum.</li>
        <li>Kişisel gelişim, tarih, tasavvuf konuları başta olmak üzere kitap okumayı seviyorum. Gelecekteki evimde büyük bir kütüphaneye sahip olmayı hedefliyorum.</li>
      </ul>

      <Hr />

      <H2Title>
        <div>Çalışma <span>Masam</span></div>
      </H2Title>

      <p>
        Kullandığım ekipmanları özenle seçiyorum ve harika vakit geçiriyorum. <Link to="/desk/">Çalışma masamı inceleyin.</Link>
      </p> 

      <AboutFigure>
        <img src="" alt="" loading="lazy" />
      </AboutFigure>

      <Svg viewBox="0 0 200 200">
        <path fill="var(--c-theme)" d="M45.3,-52.9C60.9,-40.9,77.3,-28.7,79.5,-14.3C81.7,0.1,69.8,16.8,57.7,29.1C45.6,41.5,33.3,49.7,18.3,58.8C3.4,67.9,-14.3,77.9,-29.3,74.9C-44.3,71.9,-56.5,55.8,-59.2,39.7C-62,23.6,-55.2,7.5,-51.7,-8.5C-48.1,-24.5,-47.8,-40.5,-39.7,-53.9C-31.6,-67.2,-15.8,-77.8,-0.5,-77.2C14.9,-76.6,29.7,-64.9,45.3,-52.9Z" transform="translate(100 100)" />
      </Svg>

      <Hr />
    </section>
     
    <section className="get-in-touch">
      <GetInTouch>
        <h3>Site mi yaptırmak istiyorsunuz?</h3>
        <p>Tüm detayları içeren bir mail atabilirsin.</p>

        <Button href="mailto:iletisim@omergulcicek.com">
          <span>iletisim@omergulcicek.com</span>

          <svg width="14" height="10">
            <g stroke="currentColor" fill="none" fillRule="evenodd">
              <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
              <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
            </g>
          </svg>
        </Button>
      </GetInTouch>
    </section>
  </Layout>
)

export default About