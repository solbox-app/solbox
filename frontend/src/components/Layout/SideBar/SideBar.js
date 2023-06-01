import { useState } from 'react'
import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import {
    Container,
    Inner,
    Head,
    Logo,
    Body,
    Links,
    LinkContainer,
    LinkIcon,
    Footer,
    LinkLabel,
    FooterLink,
    MobileClose,
} from './Elements'

const SideBar = ({ mobileMenuOpen, setMobileMenuOpen}) => {

    const [active, setActive] = useState("")

    const handleLinkClick = (id) => {
        setActive(id)
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <Container mobileMenuOpen={mobileMenuOpen} >
            <Inner>
                <Head>
                    <Logo src="assets/logos/logo-light-blue.png" alt="solbox logo" />
                </Head>
                <Body>
                    <Links>
                        <LinkContainer to="/" onClick={() => handleLinkClick("dash")} active={active === "dash"}>
                            <LinkIcon><MdOutlineSpaceDashboard /></LinkIcon>
                            <LinkLabel>Escritorio</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/blog" onClick={() => handleLinkClick("blog")} active={active === "blog"}>
                            <LinkIcon><GrArticle /></LinkIcon>
                            <LinkLabel>Blog</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => handleLinkClick("contact")} active={active === "contact"}>
                            <LinkIcon><GrSend /></LinkIcon>
                            <LinkLabel>Contacto</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => handleLinkClick("config")} active={active === "config"}>
                            <LinkIcon><RiSettingsLine /></LinkIcon>
                            <LinkLabel>Config.</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <LinkIcon><BiLogInCircle /></LinkIcon>
                            <LinkLabel>Login</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => handleLinkClick("")}>
                            <LinkIcon><BiLogOutCircle /></LinkIcon>
                            <LinkLabel>Logout</LinkLabel>
                        </LinkContainer>
                    </Links>
                </Body>
                <Footer>
                    <Links>
                        <FooterLink to="/politicas-confidencialidad" onClick={() => setActive("")}>Política de confidencialidad</FooterLink>
                        <FooterLink to="/">Sitio web de Solbox</FooterLink>
                    </Links>
                </Footer>
            </Inner>
            {
                mobileMenuOpen ?
                <MobileClose onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>X</MobileClose> :
                null
            }
        </Container>
    )
}

export default SideBar