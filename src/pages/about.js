import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { AboutTurkuaz, AboutTurkceDokuman, AboutMail, AboutHangiKredi, Strong, Svg, H3, Hr, Details } from "./../components/Styled"

import Layout from "../components/Layout"
import Title from "../components/Title"

const About = () => (
  <Layout>
    <Helmet
      title="Hakkımda"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <div className="container">
      <Title t1="Benim" t2="Hakkımda" />

      <p>
        Merhaba! Ben Ömer Gülçiçek. { new Date().getFullYear() - 1993 } yaşındayım ve İstanbul'da yaşıyorum; <AboutHangiKredi href="https://hangikredi.com/" target="_blank" rel="noopener noreferrer">hangikredi.com</AboutHangiKredi>'da uzaktan çalışıyorum.
      </p>

      <p>
        Yazılım mühendisliği alanında lisans derecem var. Frontend Developer'ım ve UI/UX alanında uzmanlaşmayı hedefliyorum. Kod benim için bir tutku.
      </p>

      <p>
        <AboutTurkuaz href="https://turkuazcss.com/" target="_blank" rel="noopener noreferrer">Turkuaz</AboutTurkuaz> ve <AboutTurkceDokuman href="https://turkcedokuman.com/" target="_blank" rel="noopener noreferrer">Türkçe Doküman</AboutTurkceDokuman> projeleri başta olmak üzere çalışmalarımın tamamı açık kaynak. Türkçe kaynak sayısını arttırmak adına yazılım alanında çeviriler yapmaktayım. Kendimi sürekli güncel tutmak ve bildiklerimi aktarabilmek adına makale <Link to="/blog/">yazıyorum</Link>.
      </p>

      <p>
        Benimle konuşmak istediğiniz bir konu varsa <AboutMail href="mailto:iletisim@omergulcicek.com">iletisim@omergulcicek.com</AboutMail> adresine detaylı bir mail atabilirsiniz. Freelance iş, özel ders yada eğitmenlik için müsaitim.
      </p>

      <Hr/>

      <H3>Eğitim & Seminer</H3>

      <ul>
        <li>
          <a href="https://www.kodluyoruz.org/bootcamp/kirikkale-front-end-web-gelistirme-101-bootcamp" target="_blank" rel="noopener noreferrer">Kırıkkale Front-End Web Geliştirme 101 Bootcamp</a> <span>- (Ocak 2021)</span>
        </li>
      </ul>

      <Hr/>

      <H3>Sevdiğim birkaç şey</H3>

      <Details open>
        <summary>UI/UX</summary>

        <p>
          Frontend birçok kişi için HTML CSS JavaScript'ten ibaret olsa da, ben bunların detaylarında kaybolmayı seviyorum. Atomic design, tasarım tutarlılığı, <code>:hover</code>, <code>:focus</code> gibi durumlarda sayfa davranışları, yazı fontlarının birbiriyle olan oranı, yazıların contrast değerleri, kullanıcı deneyimi, a11y standartları ve sayfa performansı gibi birçok kez atlanan fakat önemli konularda sıkça araştırma yapıyor ve bu alanlarda uzmanlaşmak istiyorum.
        </p>
      </Details>

      <Details>
        <summary>Küçük yaşlarda <Strong>resim</Strong> eğitimi aldım ve birçok tekniğe hakimim.</summary>

        <p>5-6 yaşlarımdan itibaren resime ilgim yüksekti. İlkokul 1. sınıfta resim dersinde öğretmenim yeteneğimi farketti ve beni ressam arkadaşına yönlendirdi. Düzenli olarak farklı tekniklerde resim eğitimi aldım.</p>

        <p>
          Hatta keşfedildiğim an ve çizdiğim resim dün gibi aklımda. O yaşlarda herkes güneş, dağ, ev çizerken; ben nehir üzerinde kayıkla ilerleyen kameramanın, ağaç dallarındaki yılanları çekmesini çizmiştim. Hocam gördüğünde "<em>bunu şimdi mi çizdin?</em>" diye sorduktan sonra "<em>resim kolusun</em>" demişti. O günden sonra çizdiğim her resim sergilendi ve çeşitli yarışmalara katıldım.
        </p>

        <p>
          Sonrasında kendimi karakalemde geliştirdim. <a href="https://instagram.com/urbansketchersistanbul/" target="_blank" rel="noopener noreferrer">@urbansketchersistanbul</a> grubu ile İstanbul'un güzelliklerini çizmeyi hedefliyorum.
        </p>
      </Details>

      <Details>
        <summary>Sıkı bir <Strong>satranç</Strong> oyuncusuyum.</summary>

        <p>
          Satranca küçük yaştan beri ilgim vardı, fakat profesyonel olarak oyun bilgim yoktu. <a href="https://youtube.com/c/Satran%C3%A7TV" target="_blank" rel="noopener noreferrer">Youtube Satranç TV</a> kanalında sevgili Cem Gündoğan başta olmak üzere birçok kanalı takip ederek kendimi geliştirdim, turnuvaları takip ettim.
        </p>

        <p>
          Ardından <a href="https://chess.com/" target="_blank" rel="noopener noreferrer">Chess.com</a>'da üyelik açarak satranç macerama başladım. Ocak 2019'da 665 elo ile başladım ve şimdilerde 1200+ elodayım, hedefim 1500 elo civarlarına gelebilmek.
        </p>

        <p>
          Globalde Magnus Carlsen, Türklerde ise Vahap Şanal taraftarıyım.
        </p>
      </Details>

      <Details>
        <summary>Yaklaşık 2 senedir olimpik <Strong>yüzüyorum</Strong>.</summary>

        <p>
          Su korkusu ile doğdum ve denize 50 metre yanaşsam ağlayan birisiydim. Hatta bırakın denizi, bir karış su bulunan oyuncak bir havuza bile girdiğimde kötü olup çıkıyordum. Zamanla cesaretimi toplayıp ayaklarımı suya sokmaya başladım. Sonrasında arkadaşlarımla düzenli havuza gittim.
        </p>

        <p>
          Su korkumu atlattığıma emin olduğumda, eğitim alarak uzmanlaşmak istedim. Önce küçük havuzda hoca eşliğinde temel eğitimle başladım ve sonrasında olimpik havuzda yüzmeye başladım. Vaktim müsait ise haftada 2 gün yüzmeye çalışıyorum.
        </p>
      </Details>
      
      <Details>
        <summary>Her hafta <Strong>halı saha maçı</Strong> yapıyorum.</summary>

        <p>
          Futbolu izlemeyi, oyununu ve gerçeğini oynamayı seviyorum. Hava koşulları farketmeksizin her hafta maç yapıyorum. Hem spor, hemde strest atmak için birebir.
        </p>
      </Details>
      
      <Details>
        <summary>Yaklaşık 1.30 dk'nın altında <Strong>rubik küp</Strong> çözebiliyorum.</summary>
        
        <p>
          Dünya şampiyonluğu getiren ve muhtemelen Türkiye'de bulamayacağınız Moyu Aolong marka 3x3 rubik küpü Çin'den aldım, kesinlikte tavsiyedir. Başlarda doğal olarak elinizin alışması ve sonuca ulaşmak zaman alsada, pratikleştikçe ortalama 1.30 dk'nın altında bitirebiliyorum. Rekorum 0.57 saniye.
        </p>
      </Details>
      
      <Details>
        <summary>Tarih alanında sıkça <Strong>araştırma</Strong> yapıyorum.</summary>

        <p>
          Tarihimizin güzelliklerini ve incelikleri keşfetmeyi çok seviyorum. Yapıları ve tarihlerini araştırıyor, detaylarına hakim olmayı seviyorum. Bu tarz programlarıda elimden geldiğince takip ediyorum.
        </p>

        <p>
          Blogumda bu tarz yazılarada yer vererek başta İstanbul olmak üzere, Türkiye'mizin güzelliklerini keşfettikçe paylaşacağım.
        </p>
      </Details>

      <Details>
        <summary><Strong>Starbucks</Strong> seviyorum ve arkadaşlarımla sıklıkla sohbet etmek için gidiyoruz.</summary>

        <p>
          Arkadaşlarımla ayda ortalama 2 kez Starbucks gidiyoruzdur. Favorilerim White Chocolate Mocha ve Toffee Nut Latte.
        </p>
      </Details>

      <Svg viewBox="0 0 200 200">
        <path fill="var(--c-theme)" d="M45.3,-52.9C60.9,-40.9,77.3,-28.7,79.5,-14.3C81.7,0.1,69.8,16.8,57.7,29.1C45.6,41.5,33.3,49.7,18.3,58.8C3.4,67.9,-14.3,77.9,-29.3,74.9C-44.3,71.9,-56.5,55.8,-59.2,39.7C-62,23.6,-55.2,7.5,-51.7,-8.5C-48.1,-24.5,-47.8,-40.5,-39.7,-53.9C-31.6,-67.2,-15.8,-77.8,-0.5,-77.2C14.9,-76.6,29.7,-64.9,45.3,-52.9Z" transform="translate(100 100)" />
      </Svg>
    </div>
  </Layout>
)

export default About