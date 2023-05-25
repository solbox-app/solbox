import styled from "styled-components"

export const Button = styled.div`
    padding: .5rem 1rem;
    min-height: 2rem;
    min-width: 7rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-gray);
    border-radius: 3px;
    transition: opacity .2s;

    &:hover {
        opacity: .7;
    }
`

const PrimaryButton = ({ children }) => <Button>{children}</Button>

export default PrimaryButton