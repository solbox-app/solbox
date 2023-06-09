import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
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

    const { pathname } = useLocation()
    const [active, setActive] = useState("")

    const handleLinkClick = (id) => {
        setActive(id)
        setMobileMenuOpen(!mobileMenuOpen)
    }

    useEffect(() => {

        pathname === '/' && setActive("dash")
        pathname === '/blog' && setActive("blog")
        pathname === '/contacto' && setActive("contact")
        pathname === '/configuracion' && setActive("config")

    }, [])

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
                        <LinkContainer to="/configuracion" onClick={() => handleLinkClick("config")} active={active === "config"}>
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
                <MobileClose onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><AiFillCloseCircle /></MobileClose> :
                null
            }
        </Container>
    )
}

export default SideBar