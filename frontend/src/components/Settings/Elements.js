import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media all and (max-width: 650px) {
        padding: 0 2rem;
        padding: 0 2rem 0 .5rem;
    }
`

export const Title = styled.h2`
    margin-top: 1.2rem;
`

export const Subtitle = styled.h4``

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;
    padding: 1.5rem 0 2rem 0;
    border-bottom: 1px solid var(--soft-gray);
    position: relative;
`

export const InputContainer = styled.div`
    position: relative;
`

export const Divider = styled.hr`
    width: 100%;
    height: 1px;
    background-color: var(--soft-gray);
`

export const InputLabel = styled.label`
    margin-bottom: .8rem;
    font-size: .9rem;
`

export const Input = styled.input`
    height: 2.5rem;
    width: 100%;
    padding: 0 1rem;
    font-size: 1rem;
    border: 1px solid var(--soft-gray);
    margin-top: .5rem;

    &::placeholder {
        font-size: 1rem;
    }
`

export const Error = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    top: 2.7rem;
    right: .5rem;
    transform: translateY(-50%);
`

export const RevealIcon = styled.i`
    position: absolute;
    top: 3.3rem;
    right: -1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
`

export const Button = styled.button`
    display: flex;
`

export const GeneralError = styled.p`
    color: var(--alert);
    font-size: .8rem;
    position: absolute;
    bottom: 0;
    left: 0;
`