import styled, { keyframes } from "styled-components"
import { BsChevronCompactRight, BsChevronCompactLeft, BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'
import { Link } from "react-router-dom"

export default function Sidebar(params) {


    const handleDirectionArrow = (direction, path) => {
        switch (direction) {
            case 'up':
                return (<StyledLink to={path} ><BsChevronCompactUp className="button-up" /></StyledLink>)
            case 'down':
                return (<StyledLink to={path} > <BsChevronCompactDown className="button-down" /> </StyledLink>)
            case 'left':
                return (<StyledLink to={path} ><BsChevronCompactLeft className="button-left" /></StyledLink>)
            case 'right':
                return (<StyledLink to={path} ><BsChevronCompactRight className="button-right" /> </StyledLink>)
            default:
                return undefined
        }
    }
    return (
        <Body onClick={params.onClick} direction={params.direction}>
            <ArrowWrapper direction={params.direction}>
                {handleDirectionArrow(params.direction, params.path)}
            </ArrowWrapper>
            <Title direction={params.direction}>{params.title}</Title>

        </Body>

    )
};

const StyledLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    `



const Title = styled.div`
    opacity:0;
    transition: opacity 0.3s ease-in-out;
    font-size:1.75rem;
    
    @media (max-width: 850px) and (max-width: 1201px)  {
        opacity:1;
        font-size:1em;
    }

    ${props => {
        if (props.direction === 'left') {
            return `
                transform:rotate(-90deg);
            `
        }
        if (props.direction === 'right') {
            return `
                transform:rotate(90deg);
            `
        }

    }}
`

const ArrowWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:0.5%; 
    align-items:center;
    width:100%;
    height:100%;

`

const Body = styled.div`

    position:absolute;
    display:flex;
    align-items:center;
    &:hover ${Title}{
        opacity:1;
    }
    
    ${props => {

        switch (props.direction) {
            case 'up':
                return `
                top:2%;
                width:100%;
                height:13%;
                flex-direction:column;
                @media (max-width: 750px) and (max-width: 966px) {
                    flex-direction:column-reverse;
                    }
            `
            case 'down':
                return `
                bottom:2%;
                width:100%;
                height:13%;
                flex-direction:column-reverse;
                @media (max-width: 750px) and (max-width: 966px) {
                    flex-direction:column;
                    }
            `
            case 'left':
                return `
                left:2%;
                width:13%;
                height:100%;
                @media (max-width: 750px) and (max-width: 966px) {
                    flex-direction:row-reverse;
                    }
            `
            case 'right':
                return `
                right:2%;
                width:13%;
                height:100%;
                flex-direction:row-reverse;
                @media (max-width: 750px) and (max-width: 966px) {
                    flex-direction:row;
                    }
            `
            default:
                return undefined
        }

    }}

    & .button-up {
        font-size:4rem;
    }   & .button-down {
        font-size:4rem;
    }   & .button-left {
        font-size:4rem;
    }   & .button-right {
        font-size:4rem;
    }

    
`