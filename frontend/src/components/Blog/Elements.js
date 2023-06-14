import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1.5rem;
`

export const Card = styled(Link)`
    background-color: #fff;
    position: relative;
    overflow: hidden;
    min-height: 25rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
`

export const CardImagePlaceholder = styled.div`
    height: 10rem;
    width: 100%;
    background-color: #ededed;
    display: grid;
    place-items: center;
`

export const Placeholder = styled.i`
    text-align: center;

    svg {
        font-size: 4rem;
        opacity: .3;
    }
`

export const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 10rem;
    object-fit: cover;
`

export const Content = styled.div`
    padding: 1rem 2rem 2rem 2rem;
`

export const Title = styled.h2`
    font-size: 1.2rem;
    margin-bottom: .9rem;
    padding-bottom: .7rem;
    border-bottom: 1px solid var(--soft-gray);
`

export const Summary = styled.div`
    font-size: .9rem;
    color: var(--dark-gray);
`

const loading = keyframes`
  to {
    background-position-x: -20%;
  }
`

export const Skeleton = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--soft-gray);
    background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, .5) 50%,
        rgba(255, 255, 255, 0) 60%
    ) var(--soft-gray);
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1s ${loading} ease-in-out infinite;
    z-index: 100;
`