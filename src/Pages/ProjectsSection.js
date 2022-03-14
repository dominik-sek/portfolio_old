import Section from "Components/Section";
import './sections.css';
import styled from 'styled-components';
const projects = [

    {
        'title': 'Portfolio website',
        'desc': 'My portfolio website',
        'img': 'https://i.imgur.com/xeDpEwP.png',
        'github': 'https://github.com/gothic459/portfolio',
        'live': 'https://dsek.dev',
        'tags': ['React', 'HTML','JS','CSS', 'React Router','Styled-components']
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
    }

]
const ProjectsSection = () => {
    return (
        <Section id="projects" title="some of my projects">
            <div className="showcase">
                <ul>

                {projects.map((project,index)=>{
                    return(
                        <StyledLi key={index} bgimage={project.img}>
                        <h2>{project.title}</h2>
                        <div className="project-desc">
                            {project.desc}
                        </div>
                        <div className="links">
                            <ul>
                                <li>{project.live}</li>
                                <li>{project.github}</li>
                            </ul>
                        </div>
                        <div className="project-tags">
                            <ul>
                                {project.tags.map((tag, index)=>{
                                    return(
                                        <Tag key={index}>{tag}</Tag>
                                    )
                                })}
                            </ul>
                        </div>
                    </StyledLi>
                    )
                } )}

                </ul>
            </div>
      </Section>
      );
}
const StyledLi = styled.li`
    background-image: url(${props=>props.bgimage});
`
const Tag = styled.li`
    width:fit-content;
    height:fit-content;

`
export default ProjectsSection;