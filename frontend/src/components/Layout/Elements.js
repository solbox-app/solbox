import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    /* grid-template-columns: 10rem 3fr 4rem; */
    grid-template-columns: 10rem 3fr;
    grid-gap: 1rem;
    position: relative;
    padding-top: 2rem;

    @media all and (max-width: 650px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
        padding-top: 0;
    }
`

export const Main = styled.main`
    padding: 0 2rem;
    max-width: 95rem;
    overflow: hidden;

    @media all and (max-width: 650px) {
        padding: 0 .5rem;
    }
`