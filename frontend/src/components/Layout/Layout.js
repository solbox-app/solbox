import { useState } from 'react'
import { Container, Main } from './Elements'
import SecondarySideBar from './SecondarySideBar/SecondarySideBar'
import SideBar from './SideBar/SideBar'
import MobileHeader from './MobileHeader/MobileHeader'

const Layout = ({ children }) => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Container>
            <MobileHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <SideBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <Main>
                {children}
            </Main>
            {/* <SecondarySideBar /> */}
        </Container>
    )
}

export default Layout