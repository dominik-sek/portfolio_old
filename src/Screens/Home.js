import Sidebar from "Components/Sidebar";
import Card from "Components/Card";
import React, { useState, useEffect } from 'react';

const home = (width)=>{
    return (
        <div>
            <h1 style={{fontSize:'5em'}} >Hi!</h1>
            <h4> </h4>
            {width > 800 ? <h4>Use the arrows on your keyboard or the controls on the sides </h4> : <h4>Use the controls on the sides</h4>}
            <h4>to navigate through the site</h4>
        </div>
    )
}
export default function Home(params) {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
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


