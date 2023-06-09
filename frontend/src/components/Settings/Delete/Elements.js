import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;
    padding: 1rem 0 2rem 0;
    border-bottom: 1px solid var(--soft-gray);
    position: relative;
`

export const Text = styled.p`
    font-size: .9rem;
    color: var(--dark-gray);
`

export const Button = styled.button`
    display: flex;
`