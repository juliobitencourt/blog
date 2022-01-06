import * as React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Hi I'm Julio Bitencourt, web developer from Brazil">
      <SEO title={data.site.siteMetadata.title} />
      <div className="max-w-prose mx-auto mt-12">
        <h2 className="text-2xl font-bold text-indigo-700">My Writings</h2>
      </div>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default IndexPage