import Loader from "../Loader/Loader"
import { 
    Container,
    Content,
    Header,
    LoaderContainer,
    Title
} from "./Elements"

const Policy = ({ data, loading, error }) => {

    if(loading || error) return <LoaderContainer>{ loading ? <Loader /> : <p>No se puede mostrar el contenido</p>}</LoaderContainer>
    
    return (
        <Container>
            <Header>
                <Title>{data.node.title}</Title>
            </Header>
            <Content dangerouslySetInnerHTML={{ __html: data.node.content}} />
        </Container>
    )
}

export default Policy