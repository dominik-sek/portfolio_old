import { AnimatePresence } from "framer-motion";
import styled from "styled-components"
import ProjectCard from "./ProjectCard";

const ListContent = (content) => { 
    return(
        <ContentAsList>
            {content.map((item, index) => {
                return (
                    <AnimatePresence key={index}>
                        <ProjectCard project={item} />
                    </AnimatePresence>
                )
            }
            )}
        </ContentAsList>
    )
}

const TextContent = (content) => {
    return (
        <Content>{content}</Content>
    );
}

export default function Card(params) {
    return (
        <Container>
            <CardBody face={params.face}>
                {params.children}
            {params.contentType === 'list' ? ListContent(params.content) : TextContent(params.content)}
            </CardBody>
        </Container>
    );
};

const CardBody = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    z-index:999;
    background: rgba( 255, 255, 255, 0.55 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    @media (min-width: 966px) {
        width:80%;
        height:90%;
        border-radius:5vmin;

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
const Content = styled.div`
    display:flex;
    width:75%;
    height:70%;
    justify-content:center;
    align-items:center;
    text-align:center;
    @media (min-width: 966px) {
        font-size:1.25em;
    }
`
const ContentAsList = styled(Content)`
    flex-direction:column;
    justify-content:flex-start;
    overflow-x:hidden;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }

`

