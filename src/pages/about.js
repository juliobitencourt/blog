import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className="mx-auto max-w-prose">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </section>
    </Layout>
  )
}

export default AboutPage