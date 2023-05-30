import styled from "styled-components"

export const Button = styled.div`
    padding: .5rem 1rem;
    min-height: 2.5rem;
    min-width: 7rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    transition: opacity .2s;

    &:hover {
        opacity: .7;
    }
`

const SecondaryButton = ({ children }) => <Button>{children}</Button>

export default SecondaryButton