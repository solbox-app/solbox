import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 10rem 3fr 4rem;
    grid-gap: 1rem;
    position: relative;
    padding-top: 2rem;

    @media all and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
        padding-top: 0;
    }
`

export const Main = styled.main`
    margin-left: 2rem;

    @media all and (max-width: 550px) {
        margin-left: 0;
        padding: 0 .5rem;
    }
`