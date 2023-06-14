import Loader from '../Loader/Loader'
import { BsCardImage } from 'react-icons/bs'
import {
    Container,
    Head,
    HeroImage,
    HeroPlaceholder,
    Placeholder,
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
                {
                  post.featuredImage !== null ?
                  <HeroImage src={post.featuredImage.node.sourceUrl} alt="" /> :
                  <HeroPlaceholder>
                    <Placeholder><BsCardImage /></Placeholder>
                  </HeroPlaceholder>
                }
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