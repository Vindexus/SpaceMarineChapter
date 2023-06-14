import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Link} from "gatsby";
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from "../components/seo";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src={"../images/marines.png"}
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title={"Home Page"} />
