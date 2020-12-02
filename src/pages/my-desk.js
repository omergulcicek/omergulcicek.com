import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"
import Title from "../components/Title"

import MacbookPro from "../images/desk/macbook-pro.png"
import iPhone12mini from "../images/desk/iphone-12-mini.png"
import LogitechG513 from "../images/desk/logitech-g513.png"
import MagicTrackpad2 from "../images/desk/magic-trackpad-2.png"
import SamsungSpace from "../images/desk/samsung-space.png"
import AirpodsPro from "../images/desk/airpods-pro.png"
import BekantMasa from "../images/desk/bekant-masa.png"
import WatchSeries6 from "../images/desk/watch-series-6.png"
import LogitechG231 from "../images/desk/logitech-g231.png"

const MyDesk = () => (
  <Layout>
    <Helmet
      title="Çalışma Masam"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <div className="container">
      <Title t1="Çalışma" t2="Masam" />

      <Grid>
        <article disabled>
          <figure>
            <img src={MacbookPro} alt='Apple Macbook Pro (M1, 13", 2020)' />
            <figcaption>
              <h5>Apple Macbook Pro (M1, 13", 2020)</h5>
              <span>Dizüstü Bilgisayar</span>
            </figcaption>
          </figure>
        </article>
        
        <article disabled>
          <figure>
            <img src={MagicTrackpad2} alt="Magic Trackpad 2" />
            <figcaption>
              <h5>Magic Trackpad 2</h5>
              <span>Kablosuz Mouse</span>
            </figcaption>
          </figure>
        </article>
        
        <article>
          <figure>
            <img src={LogitechG513} alt="Logitech G513 Carbon" />
            <figcaption>
              <h5>Logitech G513 Carbon</h5>
              <span>Bilgisayar Klavyesi</span>
            </figcaption>
          </figure>
        </article>
        
        <article>
          <figure>
            <img src={SamsungSpace} alt="Samsung Space" />
            <figcaption>
              <h5>Samsung Space</h5>
              <span>32" 4K Monitör</span>
            </figcaption>
          </figure>
        </article>
        
        <article>
          <figure>
            <img src={LogitechG231} alt="Logitech G231" />
            <figcaption>
              <h5>Logitech G231</h5>
              <span>Kulaküstü Kulaklık</span>
            </figcaption>
          </figure>
        </article>
        
        <article disabled>
          <figure>
            <img src={BekantMasa} alt="Bekant Sağ Köşe Çalışma Masası" />
            <figcaption>
              <h5>Bekant Sağ Köşe Çalışma Masası</h5>
              <span>Çalışma Masam</span>
            </figcaption>
          </figure>
        </article>
        
        <article disabled>
          <figure>
            <img src={iPhone12mini} alt="Apple iPhone 12 Mini" />
            <figcaption>
              <h5>Apple iPhone 12 Mini</h5>
              <span>Cep Telefonu</span>
            </figcaption>
          </figure>
        </article>
        
        <article disabled>
          <figure>
            <img src={WatchSeries6} alt="Apple Watch Series 6" />
            <figcaption>
              <h5>Apple Watch Series 6</h5>
              <span>Akıllı Saat</span>
            </figcaption>
          </figure>
        </article>
        
        <article disabled>
          <figure>
            <img src={AirpodsPro} alt="Airpods Pro" />
            <figcaption>
              <h5>Airpods Pro</h5>
              <span>Kablosuz Kulaklık</span>
            </figcaption>
          </figure>
        </article>
      </Grid>
    </div>
  </Layout>
)

export default MyDesk

const Grid = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  article {
    &[disabled] {
      img {
        filter: blur(4px);
        opacity: 0.5;
      }
    }

    figure {
      margin: 0;

      img {
        display: block;
        height: 240px;
        margin: 0 auto 32px;
        max-width: 100%;
        object-fit: contain;
        vertical-align: middle;
      }

      figcaption {
        h5 {
          color: var(--c-text);
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }

        span {
          color: var(--c-grey);
          font-size: 16px;
          font-weight: 100;
        }
      }
    }
  }
`