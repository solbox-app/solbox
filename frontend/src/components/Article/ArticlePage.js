import { useLocation } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"
import Article from "./Article"

const GET_POST_BY_SLUG = gql`
query NewQuery($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    content
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    slug
    title
  }
}
`

const ArticlePage = () => {

  const { pathname } = useLocation()
  const slug = pathname.replace("/articulos", "")

  const { data, loading, error } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      slug: slug
    }
  })

  return <Article post={data?.post} loading={loading} error={error} />
}

export default ArticlePage