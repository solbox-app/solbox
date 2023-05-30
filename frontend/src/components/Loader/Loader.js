import styled, { keyframes } from "styled-components"

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const stretch = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dashoffset: -124px;
    }
`

const Svg = styled.svg`
    height: ${({h}) => h ? h : '16px'};
    width: ${({w}) => w ? w : '16px'};
    vertical-align: middle;
    transform-origin: center;
    animation: ${rotate} 2s linear infinite;
`

const Circle = styled.circle`
    fill: none;
    stroke: ${({color}) => color ? color : '#fff'};
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${stretch} calc(2s * 0.75) ease-in-out infinite;
`

const Loader = ({ w, h, color }) => {
    return (
        <Svg viewBox="25 25 50 50" stroke-width="5" w={w} h={h}>
            <Circle cx="50" cy="50" r="20" color={color} />
        </Svg>
    )
}

export default Loader
