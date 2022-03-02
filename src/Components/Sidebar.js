import styled, { keyframes } from "styled-components"
import { BsChevronCompactRight, BsChevronCompactLeft, BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'
import { Link } from "react-router-dom"

export default function Sidebar(params) {


    const handleDirectionArrow = (direction, path) => {
        switch (direction) {
            case 'up':
                return (<Link to={path} ><BsChevronCompactUp size={70} /></Link>)
            case 'down':
                return (<Link to={path} > <BsChevronCompactDown size={70} /> </Link>)
            case 'left':
                return (<Link to={path} ><BsChevronCompactLeft size={70}/></Link>)
            case 'right':
                return (<Link to={path} ><BsChevronCompactRight size={70}/> </Link>)
            default:
                return undefined
        }
    }
    return (
        <Body onClick={params.onClick} direction={params.direction}>
        <div>
            {handleDirectionArrow(params.direction, params.path)}
            </div>
            <Title direction={params.direction}>{params.title}</Title>
        </Body>
    )
};


const Title = styled.div`
    opacity:0;
    transition: opacity 0.3s ease-in-out;
    font-size:2rem;
    ${props=>{
        if(props.direction ==='left'){
            return`
                transform:rotate(-90deg);
            `
        }
        if(props.direction ==='right'){
            return`
                transform:rotate(90deg);
            `
        }
        
    }}
`

const Body = styled.div`
    &:hover ${Title}{
        opacity:1;
    }
    
    ${props => {

        switch (props.direction) {
            case 'up':
                return `
                top:0;
                width:100%;
                height:10%;
                flex-direction:column;
            `
            case 'down':
                return `
                bottom:0;
                width:100%;
                height:10%;
                flex-direction:column-reverse;
            `
            case 'left':
                return `
                left:0;
                width:20%;
                height:100%;
            `
            case 'right':
                return `
                right:0;
                width:20%;
                height:100%;
                flex-direction:row-reverse;
            `
            default:
                return undefined
        }

    }}
    position:absolute;
    display:flex;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
    
`