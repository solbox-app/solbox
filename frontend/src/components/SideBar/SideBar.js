import { GrArticle, GrSend } from 'react-icons/gr'
import { RiSettingsLine } from 'react-icons/ri'
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
    return (
        <Container> 
            <Inner>
                <Head>
                    <Logo src="assets/logos/logo-light-blue.png" alt="solbox logo" />
                </Head>
                <Body>
                    <Links>
                        <LinkContainer to="/">
                            <LinkIcon><GrArticle /></LinkIcon>
                            <LinkLabel>Blog</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <LinkIcon><GrSend /></LinkIcon>
                            <LinkLabel>Contacto</LinkLabel>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <LinkIcon><RiSettingsLine /></LinkIcon>
                            <LinkLabel>Config.</LinkLabel>
                        </LinkContainer>
                    </Links>
                </Body>
                <Footer>
                    <Links>
                        <FooterLink to="/">Políticas de privacidad</FooterLink>
                        <FooterLink to="/">Términos y condiciones</FooterLink>
                    </Links>
                </Footer>
            </Inner>
        </Container>
    )
}

export default SideBar