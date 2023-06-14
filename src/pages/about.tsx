import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="About Me">
			About Page
		</Layout>
		)
}

export default IndexPage

export const Head: HeadFC = () => <title>About Page</title>
