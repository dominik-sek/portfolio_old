import styled from "styled-components";
import Sidebar from "Components/Sidebar";
import Card from "Components/Card"
import { ReactComponent as Html } from '../img/html5.svg';
import { ReactComponent as Css } from '../img/css3.svg';
import { ReactComponent as Javascript } from '../img/javascript.svg';
import { ReactComponent as MongoDB } from '../img/mongodb.svg';
import { ReactComponent as Rjs } from '../img/react.svg';
import { ReactComponent as PostgreSQL } from '../img/postgresql.svg';
import { ReactComponent as Sass } from '../img/sass.svg';


const about = () =>{
    return(
        <section style={{fontWeight:400}}>
            <p>My name is Dominik, I am a third year student at </p>
            <a style={{color:'var(--secondary-color)'}} href="https://pwsztar.edu.pl/" target="_blank" rel="noreferrer">Academy of Science in Tarnow</a>
            <p>currently studying applied computer science.</p>
            <StyledHr/>
            <p>I am familiar with:</p>
            <StyledUl>
                <li><Html/></li>
                <li><Css/></li>
                <li><Javascript/></li>
                <li><Rjs/></li>
                <li><Sass/></li>
                <li>💅</li> 
                <li><MongoDB style={{width:'80%'}}/></li>
                <li><PostgreSQL/></li>
            </StyledUl>
            <StyledHr/>
            <p>I love creating websites from scratch, seeing them go from an <span style={{color:'#fff'}}>idea</span> to a fully fledged website.</p>
            
        </section>

    )
}
export default function About(params) {
    return (
            <Card face={'bottom'}
                content={about()}
            >

                <Sidebar path={'/projects'} title={'Projects'} direction={'right'}/>
                <Sidebar path={'/home'} title={'Home'} direction={'left'}/>
                <Sidebar path={'/contact'} title={'Contact'} direction={'up'}/>

            </Card>
        )
};

const StyledUl = styled.ul`
display:grid;
padding:0;
grid-template-columns:repeat(3,1fr);
grid-template-rows:repeat(2,1fr);

    & li{
        padding:0.5em;
        border-radius:5px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:white;
        font-size:1.2em;
        font-weight:bold;
        text-align:center;
        height:3em;
        max-height:2em;
        min-width:1em;
        transition:all 0.3s ease-in-out;
        &:hover{
            background-color:#E6E6EA;
            cursor:pointer;
        }

    }

`;

const StyledHr = styled.hr`
    width:100%;
    border:none;
    height:2px;
    background:var(--hr-gradient);
    margin:0;
    padding:0;
`;
