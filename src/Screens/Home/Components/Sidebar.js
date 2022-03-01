import styled, { keyframes } from "styled-components"
import {FaAngleRight} from "react-icons/fa"

export default function Sidebar(params) {
    return(
        <Wrapper>
        <Box />

            <SideCard>
                <FaAngleRight style={{opacity:'0.7'}} color={'white'} size={70} />
            </SideCard>

        </Wrapper>

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

const Wrapper = styled.div`
    position:absolute;
    width:10%;
    height:50%;
    left:40%;
    display:flex;
    animation: ${moveIn} 1s ease-in-out;

`
const Box = styled.div`
    width:45%;
    height:45%;
    left:35%;
    animation: ${moveIn} 1s ease-in-out;

`
const SideCard = styled.div`
    border-top-right-radius:5vmin;
    border-bottom-right-radius:5vmin;
    background: rgba( 255, 255, 255, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display:flex;
    width:55%;
    animation: ${moveIn} 1s ease-in-out;

    height:100%;
    justify-content:center;
    align-items:center;
    `