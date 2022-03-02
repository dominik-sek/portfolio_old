import styled, { keyframes } from "styled-components"
import { useState } from "react"
import { Link } from 'react-router-dom';
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"

export default function Home(params) {
    return (
            <Card face={'left'}
            content={
                'home sweet home'
            }
            >
                {/* <img src={"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2017/04/06/0a2ae706-1a94-11e7-b4ed-ac719e54b474_1280x720_145124.jpg?itok=1PDxSxTA"}></img> */}

                <Sidebar path={'/projects'} title={'Projects'} direction={'up'}/>
                <Sidebar path={'/about'} title={'About me'} direction={'down'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'right'}/>



            </Card>
        )
};


