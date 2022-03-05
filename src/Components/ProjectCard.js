import styled from "styled-components";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export default function ProjectCard(params) {
    return (
        <Body>
            <Title>{params.project.title}</Title>
            <Image src={params.project.img}></Image>
            <Description>{params.project.desc}</Description>
            <Links>
                <a href={params.project.github} target="_blank" rel="noreferrer"> <StyledAiOutlineGithub /> </a>
                {params.project.live === '' ? <NoLinkSpan><StyledAiOutlineLink showlink={"false"} /></NoLinkSpan> : <a href={params.project.live} target="_blank" rel="noreferrer"> <StyledAiOutlineLink showlink={"true"}/> </a>}
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
        color:${props => props.showlink==="true" ? '#0077b5' : '#ccc'};
    }
`;

const NoLinkSpan = styled.span`
        display:flex;
        justify-content:center;
        align-items:center;
        height:100%;
        cursor:not-allowed;
`;

const Body = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    width:100%;
    height:100%;
    min-height:30%;
    margin:5%;
    background: rgba( 255, 255, 255, 0.55 );

    @media (min-width: 768px) {
        height:20%;
        min-height:20%;
        margin:0.5%;
        width:90%;
    }
    
`
const Title = styled.div`
    height:15%;
    font-size:1em;
    padding:0.5%;
    width:60%;
    left:20%;
    right:20%;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    opacity:0.5;
    @media (min-width: 768px) {
        opacity:1;
    }


`
const Image = styled.img`

    position:absolute;
    left:0;
    width:100%;
    height:100%;
    opacity:0.2;
    @media (min-width: 768px) {
    width:20%;
    height:100%;
    opacity:1;
    display:flex;
    }

`
const Description = styled.div`
    height:90%;
    width:60%;
    font-size:0.75em;
    margin-bottom:0 auto;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    bottom:0;
    left:20%;
    right:20%;
    opacity:0.5;
    @media (min-width: 768px) {
        opacity:1;
    }
`
const Links = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    right:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    & svg {
            color:black;
            height:2em;
            width:2em;
            transition: transform 0.2s ease-in-out;
            &:hover {
                transform:scale(1.5);
            }
        }
    & a {
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media (min-width:768px){
        width:15%;
        & svg {
            color:black;
            height:1.25em;
            width:1.25em;
        }
    }
`
