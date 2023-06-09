import styled from 'styled-components'

export const NotificationContainer = styled.div`
    position: fixed;
    top: 2rem;
    right: 1rem;
    background-color: ${({bgColor}) => bgColor};
    padding: 1.5rem;
    border-radius: var(--border-radius);
`