import styled from 'styled-components'

export const StylledBody = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #45484b;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
`

export const EndessusBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    mix-blend-mode: multiply;
    top: 0;
    left: 0;
`

export const ContentStylled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 15px;
    z-index: 2;
`

export const Texte = styled.p`
    font-size: ${props => props.fonts || '15px'};
    color: ${props => props.color || 'black'};
    font-weight: ${props => props.font || 'none'};
    margin-top: ${props => props.margin || '0px'};
`

export const Boxflex = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: ${props => props.margin || '10px'};
`

export const InputStyle = styled.input`
    margin-top: ${props => props.margin || '10px'};
    width: 100%;
    font-size: 16px;
    padding: 10px 0;
    color: black;
    border: none;
    border-bottom: 1px solid rgb(116, 116, 116);
    outline: none;
`

export const LeCheck = styled.input `
    transform: scale(1.5);
` 

export const Lelogo = styled.img`
    width: 25px;
    object-fit: contain;
`

export const LogoTitre = styled.h3`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #FFFFFF;
`

export const BoxStylled = styled.div`
    width: 350px;
    min-height: 15vh;
    margin-top: 10px;
    background-color: #FFFFFF;
    padding: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`

export const SpanJaune = styled.span`
    margin-top: ${props => props.margin || '0'};
    font-weight: bold;
    color: #FFD964;
    cursor: pointer;
`

export const ButtonConnecte = styled.button`
    margin-top: 30px;
    padding: 8px;
    width: 100%;
    border-radius: 5px;
    background-color: #45484b;
    color: white;
    font-size: 18px;
    cursor: pointer;
`