import styled from "styled-components";
import Sidebar from "Components/Sidebar";
import Card from "Components/Card";
import { useState, useEffect, useCallback } from "react";

const contact = ({setIsFormFocused}) => {
    return (

        <StyledForm onFocus={()=>setIsFormFocused(true)} onBlur={()=>setIsFormFocused(false)} target="_blank" action="https://formsubmit.co/0f2d4c75d7d6f672c66393078f87fb39" method="POST" >
            <h1>Contact me</h1>
            <StyledInput type="text" name="name" placeholder="Your name" required />
            <StyledInput type="email" name="email" placeholder="Your email" required />
            <StyledTextArea name="message" placeholder="Your message" required></StyledTextArea>
            <input type="hidden" name="_template" value="table"/>
            <StyledButton type="submit" >Send</StyledButton>

        </StyledForm>
    )
}


export default function Contact(params) {
    const [showMessage, setShowMessage] = useState(false);
    const [isFormFocused, setIsFormFocused] = useState(false);
    
    const handleKeyDown = useCallback((e) => {
        
        if (e.key === 'ArrowRight') {
            setShowMessage(true);
        }
        if (e.key === 'ArrowLeft') {
            setShowMessage(true);
        }
        if (e.key === 'ArrowUp') {
            setShowMessage(true);
        }   
        if (e.key === 'ArrowDown') {
            setShowMessage(true);
        }
    
    }, []);
    
    useEffect(()=>{
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);

        }
    })

    useEffect(() => {
        if(showMessage){
            setTimeout(() => {
                setShowMessage(false);
            }, 1000);
        }

    }, [showMessage]);


    return (
        <Card face={'up'}
            content={contact({setIsFormFocused})}>

            <NoArrowMessage isFormFocused={isFormFocused} usedArrow={showMessage}>You can't use arrow controls on this page</NoArrowMessage>
            <Sidebar path={'/projects'} title={'Projects'} direction={'right'} />
            <Sidebar path={'/about'} title={'About me'} direction={'down'} />
            <Sidebar path={'/home'} title={'Home'} direction={'left'} />

        </Card>
    )
};

const NoArrowMessage = styled.h4`
    display:${props => props.isFormFocused ? 'none' : 'block'};

    position: absolute;
    top:0;
    left:0;
    width: 100%;
    text-align: center;
    color: #fff;
    opacity:${props => props.usedArrow ? '1' :'0'};
    transition: opacity 0.5s;

`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    font-weight: 400;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    & *{
        font-family: 'Titillium Web', sans-serif;
    }
`

const StyledInput = styled.input`
    width:100%;
    height:10%;
    border: none;
    border-radius: 1em;
    border-bottom: 1px solid black;
    padding: 0.5em;
    margin: 0.5em;
    transition: all 0.3s ease-in-out;
    &:focus{
        outline-color: var(--primary-color);
        outline-style: solid;
        outline-width:2px;
    }

    @media (min-width: 768px){
        width: 60%;
        height: 5%;
    }
`;
const StyledTextArea = styled.textarea`
    width: 100%;
    height: 40%;
    border: none;
    border-radius: 1em;
    border-bottom: 1px solid black;
    padding: 0.5em;
    margin: 0.5em;
    resize: none;
    transition: all 0.3s ease-in-out;
    &:focus{
        outline-color: var(--primary-color);
        outline-style: solid;
        outline-width:2px;
    } 

    @media(min-width: 768px){
        width: 40%;
        height: 30%;
    }
`;
const StyledButton = styled.button`

    width: 60%;
    height: 10%;
    border: none;
    border-radius: 1em;
    padding: 0.5em;
    margin: 0.5em;
    transition: all 0.3s ease-in-out;
    &:hover{
        cursor:pointer;
        background-color:var(--primary-color);
    }
    &:focus{
        outline:none;
    }
    @media(min-width: 768px){
        width: 25%;
    }

    
    background: rgba( 255, 255, 255, 0.5); );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;


