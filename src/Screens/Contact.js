import styled, { keyframes } from "styled-components"
import { useEffect, useState } from "react"
import { useLocation, Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card";

const handleSubmit = (e, { setSubmitted }) => {
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    setSubmitted(true);
}

const contact = ({ setSubmitted }, submitted) => {
    return (

        <StyledForm target="_blank" action="https://formsubmit.co/0f2d4c75d7d6f672c66393078f87fb39" method="POST" onSubmit={e => handleSubmit(e, { setSubmitted })}>
            {submitted ? <Message>Thank you for your message!</Message> : <h1>Contact me</h1>}
            <StyledInput type="text" name="name" required placeholder="Your name" />
            <StyledInput type="email" name="email" required placeholder="Your email" />
            <StyledTextArea name="message" required placeholder="Your message"></StyledTextArea>
            <input type="hidden" name="_template" value="box" />
            <StyledButton type="submit">Send</StyledButton>

        </StyledForm>
    )
}

export default function Contact(params) {
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        if (submitted) {
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        }
    }, [submitted]);

    return (
        <Card face={'up'}
            content={contact({ setSubmitted }, submitted)}>

            <Sidebar path={'/projects'} title={'Projects'} direction={'right'} />
            <Sidebar path={'/about'} title={'About me'} direction={'down'} />
            <Sidebar path={'/home'} title={'Home'} direction={'left'} />

        </Card>
    )
};


const Message = styled.h1`
    color: green;
    font-size: 2em;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
    
`

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


