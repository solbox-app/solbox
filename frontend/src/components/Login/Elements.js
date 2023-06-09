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
    background-color: #fff;
    z-index: 999;
`

export const FormContainer = styled.div`
    width: 25rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    position: relative;
    bottom: 3rem;

    @media all and (max-width: 400px) {
        box-shadow: none;
    }
`

export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    margin: 1rem auto 2rem auto;

    @media all and (max-wdidth: 550px) {
        width: 4rem;
        height: 4rem;
    }
`

export const Form = styled.form`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    width: 100%;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Input = styled.input`
    height: 2.5rem;
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

export const Note = styled.p`
    text-align: center;
    margin-bottom: 1.5rem;
`

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
