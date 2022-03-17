import Section from "Components/Section";
import styled from 'styled-components';
import {AiOutlineLink, AiFillGithub} from 'react-icons/ai';

const projects = [

    {
        'title': 'Portfolio',
        'desc': 'My current portfolio',
        'img': 'https://i.imgur.com/r3ipqQC.png',
        'github': 'https://github.com/gothic459/portfolio',
        'live': 'https://dsek.dev',
        'tags': ['React', 'HTML','JS','CSS', 'SASS','Styled-components', 'Figma']
    },
    {
        'title': 'FRB Creative',
        'desc': 'A local business’ website - I was responsible for the design and development of the website, still in progress',
        'img': 'https://i.imgur.com/Btlw7yS.png',
        'github': 'https://github.com/gothic459/frb-creative',
        'live':'https://frb-creative.netlify.app/',
        'tags': ['HTML','JS','CSS', 'React','Styled-components','Figma']
    },
    {
        'title': 'Old Portfolio',
        'desc': 'My old portfolio',
        'img': 'https://i.imgur.com/xeDpEwP.png',
        'github': 'https://github.com/gothic459/portfolio/tree/6ad545e6454bc51c6d4b3ccc052c552ce0f66f2d',
        'live': 'https://old.dsek.dev',
        'tags': ['React', 'HTML','JS','CSS', 'React Router','Styled-components', 'Figma']
    },
    {
        'title': 'Blockchain miners simulator',
        'desc': 'A command-line Blockchain + proof of work simulator written in vanilla javascript ',
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkknzfsNFw-5dZ00QFPK4ejjQO2xrOz6X7Q&usqp=CAU',
        'github': 'https://github.com/gothic459/blockchain-js-py',
        'live': '',
        'tags': ['JS']
    },
    {
        'title': 'Movie database',
        'desc': 'Movie database website, uni project',
        'img': 'https://camo.githubusercontent.com/ae74715258ef203ba8f3e9f3e052122ece0b1379478d2063404c680e4f56b326/68747470733a2f2f696d6775722e636f6d2f5a4449417678672e706e67',
        'github': 'https://github.com/gothic459/movies-db',
        'live': '',
        'tags': ['React', 'HTML','JS','CSS','React Router', 'Styled-components']
    },
    {
        'title': 'Online restaurant',
        'desc': 'An online restaurant website, uni project',
        'img': 'https://i.imgur.com/2Gp6tEB.png',
        'github': 'https://github.com/gothic459/online-restaurant',
        'live': 'https://pizzadev-front.herokuapp.com/',
        'tags': ['React', 'HTML','JS','CSS','React Router','Styled-components']
    },
    {
        'title': 'Movie database 2',
        'desc': 'Another try at a movie database website, uni project',
        'img': 'https://i.imgur.com/2IVAhYY.png',
        'github': 'https://github.com/gothic459/movie-db',
        'live': '',
        'tags': ['React', 'HTML','JS','CSS','React Router','Styled-components']
    },


]
const ProjectsSection = () => {
    return (
        <Section id="projects" title={"Some of my projects"}>

            {projects.map((project, index)=>{
                return(
                    <ProjectCard key={project.img} bg={project.img}>
                        <div className="title">
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                        </div>

                        <div className="tags">
                            {project.tags.map((tag,index)=>{
                                return(
                                    <h3 key={index}>{tag}</h3>
                                );
                            })}
                        </div>

                        <div className="links">
                        {project.live !== '' ? 
                        <a target="_blank" rel="noreferrer" href={project.live} > <AiOutlineLink /></a>:
                        null}
                            <a target="_blank" rel="noreferrer" href={project.github} ><AiFillGithub  /> </a>
                        </div>
                    </ProjectCard>
                )
            })}
      </Section>
      );
}
const ProjectCard = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${props=>props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #000000ad;
    background-blend-mode: multiply;

    && >div { 
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        height:33%;
    }

    .title{
        h2{
            color:white;
        }
        p{
            color:#989898;
            font-size:0.9rem;
        }

        *{
            padding:0.5rem;
        }
    }

    && .links{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        &>a{
            width:50%;
            display: flex;
            justify-content: center;
            transition: transform 0.3s ease-in-out;
            &:hover{
                transform: scale(1.5);
            }
            &>svg{
                height:2rem;
                width:2rem;
                &>path{
                    color:white;

                }
            }
        }
    }
    && .tags{
        display:flex;
        flex-direction: row;
        justify-content: center;
        & h3{
            font-size: 0.7rem;
            border-radius: 5px;
            background:var(--clr-primary);
            padding:0.3rem;
            & +h3{
                margin-left:0.3rem;
            }
        }
    }

`

export default ProjectsSection;