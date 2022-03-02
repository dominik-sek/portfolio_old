import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes } from "styled-components"

const moveToFront = (face) => {
    switch (face) {
        case 'top':
            return keyframes`
            0% {
                transform: translateZ(0) rotateX(0deg);
            }
            50%{
                transform: translateZ(-100px) rotateX(90deg);
            }
            100% {
                transform: translateZ(0) rotateX(0deg);
            }
        `
        case 'bottom':
            return keyframes`
            0% {
                transform: translateZ(0) rotateX(0deg);
            }

            50% {
                transform: translateZ(-100px) rotateX(-90deg);

                }
            100% {
                transform: translateZ(0) rotateX(0deg);

                }
            `
        case 'right':
            return keyframes`
            0% {
                transform: translateZ(0) rotateY(0deg);
            }
            50% {
                transform: translateZ(-100px) rotateY(90deg);
                }
            100% {
                transform: translateZ(0) rotateY(0deg);
                }
            `
        case 'left':
            return keyframes`
            0%{
                transform: translateZ(0) rotateY(0deg);
            }
            50% {
                transform: translateZ(-100px) rotateY(-180deg);
                }
            100%{
                transform: translateZ(0) rotateY(0deg);
            }
                `
        default:
            return 'top'
    }
}

export default function Card(params) {
    return (
        <Container >

            <CardBody face={params.face}>
                {params.children}
            </CardBody>

        </Container>
    );
};

const CardBody = styled.div`
    position:absolute;
    border-radius:5vmin;
    width:40%;
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
    transform-style:preserve-3d;
    animation: ${props => moveToFront(props.face)} 1s ease-in-out;
    animation-direction: alternate;

`


const Container = styled.div` 
    display:flex;
    position:absolute;
    justify-content: center;
    align-items:center;
    width:100%;
    height:100%;
    perspective:1000px;

`
