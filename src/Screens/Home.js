import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"

const home = ()=>{
    return (
        <div>
            <h1 style={{fontSize:'5em'}} >Hi!</h1>
            <h4>Use the controls on the sides to navigate</h4>
        </div>
    )
}
export default function Home(params) {
    return (
            <Card face={'left'}
            content={home()}
            >

                <Sidebar path={'/projects'} title={'Projects'} direction={'right'}/>
                <Sidebar path={'/about'} title={'About me'} direction={'down'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'up'}/>



            </Card>
        )
};


