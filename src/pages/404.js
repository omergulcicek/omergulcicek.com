import React, { useEffect } from "react"

import SEO from "../components/Seo"
import Layout from "../components/Layout"
import Title from "../components/Title"

export default function NotFoundPage () {
  useEffect(() => {
    setTimeout(() => {
      location.href = location.origin;
    }, 1500);
  });

  return <Layout>
    <SEO title="404: Not Found" />
    
    <section className="not-found">
      <Title t1="Sayfa" t2="Bulunamadı :(" />

      <p>
        Sadece var olmayan bir linke girdin...
      </p>
    </section>
</Layout>
}