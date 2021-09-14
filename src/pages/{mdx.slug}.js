import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import SEO from "../components/seo"
import ShareButtons from "../components/share"
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const BlogPost = ({ data }) => {
  const image = data.mdx.frontmatter.image
    ? data.mdx.frontmatter.image.childImageSharp.resize
    : null

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        image={image}
      />
      <article>
        <ShareButtons></ShareButtons>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        title
      }
    },
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      body
    }
  }
`

export default BlogPost