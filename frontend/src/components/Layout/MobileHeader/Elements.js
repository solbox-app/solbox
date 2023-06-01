import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;

    @media all and (min-width: 550px) {
        display: none;
    }
`

export const Logo = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: contain;
`

export const MenuIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    cursor: pointer;

    span {
        display: block;
        width: 1.3rem;
        height: 2px;
        border-radius: 500px;
        margin-bottom: 3px;
        background-color: var(--main-blue);
    }
`