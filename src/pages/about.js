import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className="mx-auto max-w-prose flex flex-col space-y-2 mt-5">
        <p>Hi there! I'm Julio, from Brazil.</p>
        <p>I work as an web developer since 2000.</p>
        <p>Nowadays I'm working most with PHP, Laravel, JavaScript and DevOps.</p>
        <p>I also run an <a className="underline" href="https://www.somadev.com.br" title="SOMADev">web development agency in Brazil</a> with my great partners!</p>
        <p>Check out my <a className="underline" href="https://juliobitencourt.dev" title="Julio Bitencourt">writings</a> and my <a className="underline" href="https://twitter.com/juliobitencourt" title="Twitter account">Twitter account</a>.</p>
      </section>
    </Layout>
  )
}

export default AboutPage