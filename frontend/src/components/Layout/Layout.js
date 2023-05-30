import { Container } from './Elements'
import SecondarySideBar from './SecondarySideBar/SecondarySideBar'
import SideBar from './SideBar/SideBar'

const Layout = ({ children }) => {
    return (
        <Container>
            <SideBar />
            {children}
            <SecondarySideBar />
        </Container>
    )
}

export default Layout