import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
    position: relative;
    width: 10rem;
`

export const Inner = styled.div`
    position: fixed;
    top: .5rem;
    left: .5rem;
    width: 10rem;
    max-width: 25%;
    min-height: 30rem;
    height: calc(100vh - 1rem);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    /* background-color: #ededed;
    border-radius: var(--border-radius); */
`

export const Head = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-top: .5rem;
    height: 6rem;
`

export const Logo = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
`

export const Body = styled.div`
    margin-top: .5rem;
    height: 100%;
`

export const Links = styled.nav`
    display: flex;
    flex-direction: column;
`

export const LinkContainer = styled(Link)`
    position: relative;
    display: flex;
    /* background-color: ${({active}) => active ? 'var(--soft-gray)' : 'transparent'}; */
    padding: .5rem 0;

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        border-radius: 500px;
        width: 5px;
        height: 5px;
        background-color: var(--main-blue);
        display: ${({active}) => active ? 'block' : 'none'};
    }
`

export const LinkIcon = styled.i`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkLabel = styled.span`

`

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-bottom: 1rem;
`

export const FooterLink = styled(Link)`
    font-size: .7rem;
    margin-bottom: .2rem;
    letter-spacing: .5px;
`