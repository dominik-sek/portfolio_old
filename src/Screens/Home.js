import styled, { keyframes } from "styled-components"
import {BsChevronCompactRight} from 'react-icons/bs'
import { useState } from "react"

export default function Home(params) {
const [openSide, setOpenSide] = useState(false);
const handleOpenSide = () =>{
    setOpenSide(!openSide);
}

    return (
        <Container>
            <HomeBody>
               {/* <img src={"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2017/04/06/0a2ae706-1a94-11e7-b4ed-ac719e54b474_1280x720_145124.jpg?itok=1PDxSxTA"}></img> */}
            <Content>
                <h1>Hi there</h1>
            </Content>

            <Sidebar>
                <StyledBsChevronCompactRight onClick={()=>console.log("here")} size={70} />
            </Sidebar>


            </HomeBody>
        </Container>
    )
};

const moveIn = keyframes`
    0%{
        transform: translateX(-150%) rotate(0);
        opacity: 0.4;
    }
    65%{
        transform: translateX(10%) rotate(0);
        opacity: 1;
    }
    100%{
        transform: translateX(0) rotate(0);
    }
`
const HomeBody = styled.div`
    position:relative;
    border-radius:5vmin;
    width:30%;
    height:60%;
    z-index:999;
    padding-top:2%;
    padding-bottom:2%;
    padding-left:1%;
    background: rgba( 255, 255, 255, 0.80 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    animation: ${moveIn} 1s ease-in-out;
    display:flex;
    justify-content:flex-start;
    align-items:center;


`
const Container = styled.div` 
    display:flex;
    position:absolute;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100%;
`



const HoverLeftRight = keyframes`
    0%{
        transform: translateX(0) rotate(0);
    }
    100%{
        transform: translateX(20%) rotate(0);
    }
    `
    const StyledBsChevronCompactRight = styled(BsChevronCompactRight)`
    animation: ${HoverLeftRight} 1s ease-in-out infinite;
    animation-direction:alternate;
    `

const Sidebar = styled.div`
    border-top-right-radius:5vmin;
    border-bottom-right-radius:5vmin;
    border-left:none;
    width:20%;

    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
    
`

const Content = styled.section`
    display:flex;
    width:80%;
    height:100%;
    font-size:4em;
    justify-content:center;
    align-items:center;
`
