import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes } from "styled-components"


export default function Card(params) {
    return (
        <Container>
            <CardBody face={params.face}>
                {params.children}
            <Content>
                {params.content}
            </Content>
            </CardBody>
        </Container>
    );
};

const CardBody = styled.div`
    position:absolute;
    border-radius:5vmin;
    width:80%;
    height:80%;
    z-index:999;
    padding-left:1%;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 768px) {
        width:80%;
        height:80%;
    }
`
const Container = styled.div` 
    display:flex;
    position:absolute;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100%;
    perspective:1000px;
    overflow:hidden;

`
const Content = styled.section`
    display:flex;
    width:80%;
    height:80%;
    justify-content:center;
    align-items:center;
    text-align:center;
    @media (min-width: 768px) {
        font-size:2em;
    }

`