import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description }) => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<title>{title} | {data.site.siteMetadata.title}</title>
			<meta name={"description"} content={description || 'Page desc'} />
		</>
	)
}

export default Seo
