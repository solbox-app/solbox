import styled from "styled-components"

export const Container = styled.article`
    display: flex;
    flex-direction: column;
`

export const Head = styled.div`
    position: relative;
    width: 100%;
    height: 20rem;
`

export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
`

export const TextContainer = styled.div`
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    position: relative;
    color: #fff;
    font-size: 3rem;

    &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 7rem;
        height: 2px;
        background-color: #fff;
    }
`

export const Subtitle = styled.h3`
    color: var(--main-blue);
`

export const Body = styled.div`
    width: 80%;
    margin: 3rem auto;
`

export const Content = styled.div`
    p {
        font-size: 1.2rem;
    }
`

export const LoaderContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`