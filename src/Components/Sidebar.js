import styled from "styled-components"
import { BsChevronCompactRight, BsChevronCompactLeft, BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs'
import { Link, useNavigate, useLocation } from "react-router-dom"
import React, { useEffect, useCallback } from 'react';


export default function Sidebar(params) {
    const navigation = useNavigate();
    const location = useLocation();
    const handleKeyDown = useCallback((e) => {
        if(location.pathname !== '/contact'){
            
        if (e.key === 'ArrowRight') {
            if(params.direction === 'right'){
                navigation(params.path)
            }
        }
        if (e.key === 'ArrowLeft') {
            if(params.direction === 'left'){
                navigation(params.path)
            }
        }
        if (e.key === 'ArrowUp') {
            if(params.direction === 'up'){
                navigation(params.path)
            }
        }
        if (e.key === 'ArrowDown') {
            if(params.direction === 'down'){
                navigation(params.path)
            }
        }
    }
    }, [navigation, params.path, params.direction, location.pathname]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);



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
            <Title direction={params.direction}>{params.title}</Title>
            <ArrowWrapper direction={params.direction}>    
                {handleDirectionArrow(params.direction, params.path)}
            </ArrowWrapper>
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
                writing-mode:vertical-rl;
                transform: rotate(180deg);
            `
        }
        if (props.direction === 'right') {
            return `
                writing-mode:vertical-rl;
            `
        }

    }}
`

const ArrowWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin:0.5%; 
    align-items:center;

    @media (min-width: 1200px)  {
        width:100%;
        height:100%;
    }

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
                top:0;
                width:100%;
                flex-direction:column;
                @media (max-width: 1200px) {
                    flex-direction:column-reverse;
                    justify-content:center;
                    }
                @media (max-width: 768px) {
                    top:-6%;
                }

            `
            case 'down':
                return `
                bottom:0;
                width:100%;
                flex-direction:column-reverse;
                @media (max-width: 1200px) {
                    flex-direction:column;
                    justify-content:center;
                    }
                    @media (max-width: 768px){
                    bottom:-6%;
                }

            `
            case 'left':
                return `
                left:0;
                height:100%;
                
                @media (max-width: 1200px) {
                    flex-direction:row-reverse;
                    justify-content:center;
                    }
                    @media (max-width: 768px){
                    left:-10%;
                }
            `
            case 'right':
                return `
                right:0;
                height:100%;
                flex-direction:row-reverse;
                @media (max-width: 1200px) {
                    flex-direction:row;
                    justify-content:center;
                    }
                    @media (max-width: 768px){
                    right:-10%;
                }
            `
            default:
                return undefined
        }

    }}

    & .button-up {
    font-size:4rem;
    }   
    & .button-down {
    font-size:4rem;
    }   
    & .button-left {
    font-size:4rem;
    }  
     & .button-right {
    font-size:4rem;
    }

    
`