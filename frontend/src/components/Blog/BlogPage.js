import { gql, useQuery } from "@apollo/client"
import Blog from "./Blog"

const GET_POSTS = gql`
  query NewQuery {
    posts {
      edges {
        node {
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          slug
          title
          date
          excerpt
        }
      }
    }
  }
`

const BlogPage = () => {

  const { loading, error, data } = useQuery(GET_POSTS)

  error && console.log(error)

  return <Blog posts={data?.posts.edges} loading={loading} error={error} />
}

export default BlogPage