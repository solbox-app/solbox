import { Container, Main } from './Elements'
import SecondarySideBar from './SecondarySideBar/SecondarySideBar'
import SideBar from './SideBar/SideBar'

const Layout = ({ children }) => {
    
    return (
        <Container>
            <SideBar />
            <Main>
                {children}
            </Main>
            <SecondarySideBar />
        </Container>
    )
}

export default Layout