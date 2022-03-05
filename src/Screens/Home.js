import Sidebar from "Components/Sidebar";
import Card from "Components/Card";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const home = (width)=>{
    return (
        <div>
            <h1 style={{fontSize:'5em'}} >Hi!</h1>
            <h4> </h4>
            {width > 800 ? <h4>Use the <AttentionSpan>ARROWS</AttentionSpan> on your <AttentionSpan>KEYBOARD</AttentionSpan> {<br />} 
            or the <AttentionSpan>CONTROLS</AttentionSpan> on the <AttentionSpan>SIDES </AttentionSpan>{<br />}
            to navigate through the site</h4> 
            : 
            <h4>Use the <AttentionSpan>CONTROLS</AttentionSpan> on the <AttentionSpan>SIDES </AttentionSpan> {<br />}to navigate through the site </h4>
            }
            
        </div>
    )
}
export default function Home(params) {
    const [width, setWidth] = useState(0);

    //doesnt remove the listener for some reason
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth));
        }
    }, []);


    return (
            <Card face={'left'}
            content={home(width)}
            >
            
                <Sidebar path={'/projects'} title={'Projects'} direction={'right'}/>
                <Sidebar path={'/about'} title={'About me'} direction={'down'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'up'}/>

            </Card>
        )
};

const AttentionSpan = styled.span`
    color: white;
    font-weight: bold;
`

