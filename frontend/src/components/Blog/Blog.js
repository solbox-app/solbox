import {
  Container,
  Card,
  CardImage,
  Content,
  Skeleton,
  Title,
  Summary,
} from './Elements'

const Blog = ({ posts, loading, error }) => {

  return (
    <Container>
      {error ? <p>{error}</p> : null}
      {
        loading ?
          [...Array(12)].map((item, index) => <Card key={index}><Skeleton /></Card>)
          :
          posts.map(post => {
            return (
              <Card key={post.node.date} to={`/articulos/${post.node.slug}`}>
                <CardImage src={post.node.featuredImage.node.sourceUrl} alt="" />
                <Content>
                  <Title>{post.node.title}</Title>
                  <Summary dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </Content>
              </Card>
            )
          })
      }
    </Container>
  )
}

export default Blog