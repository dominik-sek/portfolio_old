import styled, { keyframes } from "styled-components"
import Sidebar from "./Components/Sidebar"
export default function Home(params) {
    return (
        <Container>
            <HomeBody>
               {/* <img src={"https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2017/04/06/0a2ae706-1a94-11e7-b4ed-ac719e54b474_1280x720_145124.jpg?itok=1PDxSxTA"}></img> */}
               
            </HomeBody>
            <Sidebar/>
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
    width:25%;
    height:50%;
    z-index:999;
    left:-20%;
    padding:2%;
    background: rgba( 255, 255, 255, 0.80 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    animation: ${moveIn} 1s ease-in-out;
    display:flex;
    justify-content:center;
    align-items:center;
    & img{
        width:75%;
    }

`
const Container = styled.div` 
    display:flex;
    position:absolute;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100%;
`