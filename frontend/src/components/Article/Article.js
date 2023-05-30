import Loader from '../Loader/Loader'
import {
    Container,
    Head,
    HeroImage,
    Overlay,
    TextContainer,
    Title,
    Subtitle,
    Body,
    Content,
    LoaderContainer,
} from './Elements'

const Article = ({ post, loading, error }) => {

    if (error) return <LoaderContainer><p>No se pudo cargar este artículo</p></LoaderContainer>

    if (loading) return <LoaderContainer><Loader w="100px" h="100px" color="var(--main-blue)" /></LoaderContainer>

    return (
        <Container>
            <Head>
                <HeroImage src={post.featuredImage.node.sourceUrl} alt="" />
                <Overlay />
                <TextContainer>
                    <Subtitle>Solbox Blog</Subtitle>
                    <Title>{post.title}</Title>
                </TextContainer>
            </Head>
            <Body>
                <Content dangerouslySetInnerHTML={{ __html: post.content}} />
            </Body>
        </Container>
    )
}

export default Article