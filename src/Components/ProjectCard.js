import styled from "styled-components";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
export default function ProjectCard(params) {
    return(
        <Body>
                <Title>{params.project.title}</Title>
        <Image src={params.project.img}></Image>
        <Description>{params.project.desc}</Description>
        <Links>
            
        <a href={params.project.github}> <StyledAiOutlineGithub/> </a>
        {params.project.live==='' ? null :  <a href={params.project.live}> <StyledAiOutlineLink/> </a>}
        </Links>
        </Body>
    )
};

const StyledAiOutlineGithub = styled(AiOutlineGithub)`
    &:hover {
        color: #0077b5;
    }
`;
const StyledAiOutlineLink = styled(AiOutlineLink)`
    &:hover {
        color: #0077b5;
    }
`;

const Body = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    width:100%;
    height:20%;
    min-height:20%;
    background: rgba( 255, 255, 255, 0.55 );
    margin:0.5%;
    @media (max-width: 966px) {
        height:100%;
        min-height:30%;
        margin:5%;
    }
    
`
const Title = styled.div`
    height:15%;
    font-size:0.8em;
    padding:0.5%;
    width:60%;
    left:20%;
    right:20%;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
`
const Image = styled.img`
    width:20%;
    height:100%;
    position:absolute;
    left:0;
    @media (max-width: 966px) {
        width:100%;
        height:100%;
        opacity:0.4;
    }

`
const Description = styled.div`
    height:90%;
    width:60%;
    font-size:0.5em;
    margin-bottom:0 auto;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    bottom:0;
    left:20%;
    right:20%;
`
const Links = styled.div`
    width:15%;
    height:100%;
    position:absolute;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    & a {
        display:flex;
        justify-content:center;
        align-items:center;
    }
    
`
