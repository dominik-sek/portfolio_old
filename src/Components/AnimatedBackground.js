
import styled, { keyframes } from 'styled-components'

export default function AnimatedBackground(params) {
    return (
        <Body>
            <ul className='squares'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </Body>
    );
};
const flowUpwards = keyframes`

from{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
}

to{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
}

`

const Body = styled.div`
    
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:-1;

    & .squares{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    & .squares li{

        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.6);
        animation: ${flowUpwards} 10s linear infinite;
        bottom: -30%;
        border-radius:15%;
    }

    & .squares li:nth-child(1){
        left: 25%;
        width: 100px;
        height: 100px;
    }

    & .squares li:nth-child(2){
        left: 10%;
        width: 200px;
        height: 200px;
        animation-duration: 15s;
    }

    & .squares li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-duration: 10s;

    }

    & .squares li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 23s;
    }

    & .squares li:nth-child(5){
        left: 65%;
        width: 80px;
        height: 80px;
        animation-duration: 27s;

    }

    & .squares li:nth-child(6){
        left: 75%;
        width: 200px;
        height: 200px;
        animation-duration: 35s;

    }

    & .squares li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-duration: 18s;
    }

    & .squares li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-duration: 12s;
    }

    & .squares li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-duration: 5s;
    }

    & .squares li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-duration: 25s;
    }

}
    
`
