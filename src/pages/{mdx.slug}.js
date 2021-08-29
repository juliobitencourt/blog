import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
// import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const BlogPost = ({ data }) => {
  // let disqusConfig = {
  //   url: `${data.url}`,
  //   identifier: data.mdx.frontmatter.slug,
  //   title: data.mdx.frontmatter.title,
  // }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
          {/* <Disqus config={disqusConfig} /> */}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost