import styled from 'styled-components'

export const Container = styled.aside`
    position: relative;
    width: 5rem;
`

export const Inner = styled.div`
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    width: 5rem;
    max-width: 10%;
    min-height: 19.5rem;
    height: 100vh;
    display: flex;
    justify-content: center;

    @media all and (max-width: 650px) {
        display: none;
    }
`

export const UserAvatar = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 500px;
    margin-top: 5px;
    /* background-color: #ededed; */
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: var(--main-blue);
        font-size: 2rem;
    }
`