import styled from "styled-components"

export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContainer = styled.div`
    width: 20rem;
    height: 20rem;
    padding: 2rem;

    border: 1px solid var(--soft-gray);
    border-radius: var(--border-radius);
`

export const Form = styled.form`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    height: 2rem;
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    border: 1px solid var(--soft-gray);

    &::placeholder {
        font-size: 1rem;
    }
`

export const Error = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    top: 45%;
    right: .5rem;
    transform: translateY(-50%);
`

export const GeneralError = styled.p`
    color: var(--alert);
`

export const ButtonsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.button``

export const TooltipIcon = styled.i`
    position: absolute;
    top: 50%;
    right: -1.1rem;
    transform: translateY(-50%);
    font-size: .8rem;
    cursor: pointer;
`

export const TooltipText = styled.p`
    position: absolute;
    font-size: .8rem;
    display: none;
`
