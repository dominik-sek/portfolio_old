import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"

const about = () =>{
    return(
        <div>
            <h1>Hi!</h1>
            <p>My name is Dominik, I am a third year student at </p>
            <a style={{color:'var(--primary-color)'}}href="https://pwsztar.edu.pl/">Academy of Science in Tarnow</a>
            <p>Technologies that I am familiar with:</p>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
            </ul>
        </div>

    )
}
export default function About(params) {
    return (
            <Card face={'bottom'}
                content={about()}
            >
                {/* <img src={"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2017/04/06/0a2ae706-1a94-11e7-b4ed-ac719e54b474_1280x720_145124.jpg?itok=1PDxSxTA"}></img> */}

                <Sidebar path={'/projects'} title={'Projects'} direction={'right'}/>
                <Sidebar path={'/home'} title={'Home'} direction={'left'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'up'}/>

            </Card>
        )
};

