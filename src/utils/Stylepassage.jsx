import styled from 'styled-components'

export const PassageInter = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    opacity: ${props => props.visible ? 1 : 0};
    transition: opacity 0.5s ease-in-out;
    pointer-events: none;
`

export const ImageFilter = styled.img`
    width: 30px;
    filter: invert(1);
`

export const Titrepassage = styled.h3`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #45484b;
`