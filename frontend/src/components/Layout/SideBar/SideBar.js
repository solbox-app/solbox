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
} from './Elements'

const SideBar = () => {

    const [active, setActive] = useState("")

    return (
        <Container>
            <Inner>
                <Head>
                    <Logo src="assets/logos/logo-light-blue.png" alt="solbox logo" />
                </Head>
                <Body>
                    <Links>
                        <LinkContainer to="/" onClick={() => setActive("dash")} active={active === "dash"}>
                            <LinkIcon><MdOutlineSpaceDashboard /></LinkIcon>
                            <LinkLabel>Escritorio</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/blog" onClick={() => setActive("blog")} active={active === "blog"}>
                            <LinkIcon><GrArticle /></LinkIcon>
                            <LinkLabel>Blog</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => setActive("contact")} active={active === "contact"}>
                            <LinkIcon><GrSend /></LinkIcon>
                            <LinkLabel>Contacto</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => setActive("config")} active={active === "config"}>
                            <LinkIcon><RiSettingsLine /></LinkIcon>
                            <LinkLabel>Config.</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <LinkIcon><BiLogInCircle /></LinkIcon>
                            <LinkLabel>Login</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/" onClick={() => setActive()}>
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
        </Container>
    )
}

export default SideBar