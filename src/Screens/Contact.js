import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { useLocation,Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"


const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    if(!email.includes('@') || !email.includes('.')){
        //focus on email input
        e.target[1].focus();
    }
}
const contact = () =>{
    return(
        <StyledForm onSubmit={handleSubmit}>
            <h1>Contact me:</h1>
            <StyledInput type="text" required placeholder="Your name"/>
            <StyledInput type="email" required placeholder="Your email"/>
            <StyledTextArea required placeholder="Your message"></StyledTextArea>
            <StyledButton type="submit">Send</StyledButton>

        </StyledForm>
    )
}

export default function Contact(params) {


    return (
            <Card face={'up'} 
            content={contact()}>

                <Sidebar path={'/projects'} title={'Projects'} direction={'right'}/>
                <Sidebar path={'/about'} title={'About me'} direction={'down'}/>
                <Sidebar path={'/home'} title={'Home'} direction={'left'}/>


            </Card>
        )
};



const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1em;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
`
            
const StyledInput = styled.input`
    width: 50%;
    height: 50px;
    border: none;
    border-radius: 1em;
    border-bottom: 1px solid black;
    padding: 0.5em;
    margin: 0.5em;
    transition: all 0.3s ease-in-out;
    &:focus{
        outline-color: var(--primary-color);
    }
`;
const StyledTextArea = styled.textarea`
    width: 40%;
    height: 50%;
    border: none;
    border-radius: 1em;
    border-bottom: 1px solid black;
    padding: 0.5em;
    margin: 0.5em;
    resize: none;
    outline-color: var(--primary-color);

    &:focus{
        outline-color: var(--primary-color);
    }
`;
const StyledButton = styled.button`

    width: 30%;
    height: 50px;
    border: none;
    border-radius: 1em;
    border-bottom: 1px solid black;
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
`;


