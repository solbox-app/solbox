import {
    Container,
    Logo,
    MenuIcon,
} from './Elements'

const MobileHeader = ({ mobileMenuOpen, setMobileMenuOpen }) => {

    // USE PICTURE INSTEAD OF IMAGE TAG FOR LOGO

    return (
        <Container>
            <Logo src="assets/logos/logo-light-blue.png" alt="solbox logo" />
            <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </MenuIcon>
        </Container>
    )
}

export default MobileHeader