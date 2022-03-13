import styled from 'styled-components';
import {AiFillGithub} from 'react-icons/ai'
const Navbar = () => {
    return(
        <Body>
            <ul>
            <li>Dominik Sęk</li>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/gothic459"><AiFillGithub/></a></li>
            </ul>
        </Body>
    )
}

const Body = styled.nav`
    height:4rem;
    ul{
        display: flex;
        justify-content: flex-end;
        width:100%;

        &> li{
        color:white;
        height:3rem;
        width:6.875rem;
        font-size:1.125rem;
        display: flex;
        align-items: center;

            &:not(:first-child){
                justify-content: center;
            }
        
            &> a{
                text-decoration: none;
                color:white;
            }
            
            &:first-child{
                flex:1;
                font-size:1.5rem;
            }

        }

    }

    @media (min-width: 768px){
        margin-top: 5rem;
    }

`

export default Navbar;