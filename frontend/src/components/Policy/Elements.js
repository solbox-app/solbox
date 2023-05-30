import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    flex-direction: column;
`

export const Header = styled.div`
    padding-left: 1rem;
`

export const Title = styled.h1`

`

export const Content = styled.div`
    padding: 1rem;

    p {
        margin-bottom: 1rem;
    }

    ul {
        margin-bottom: 1rem;
        padding-left: 2rem;
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