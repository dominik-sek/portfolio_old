import Sidebar from "Components/Sidebar";
import Card from "Components/Card"
//this to db
// v
const projects = [

    {
        'title': 'Portfolio website',
        'desc': 'My portfolio website',
        'img': 'https://i.imgur.com/xeDpEwP.png',
        'github': 'https://github.com/gothic459/portfolio',
        'live': 'https://dsek.dev',
        'tags': ['React', 'HTML','JS','CSS', 'Styled-components']
    },
    {
        'title': 'Blockchain miners simulator',
        'desc': 'Blockchain + proof of work simulator written in javascript',
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
        'tags': ['React', 'HTML','JS','CSS', 'Styled-components']
    },
    {
        'title': 'Online restaurant',
        'desc': 'An online restaurant website, uni project',
        'img': 'https://i.imgur.com/2Gp6tEB.png',
        'github': 'https://github.com/gothic459/online-restaurant',
        'live': 'https://pizzadev-front.herokuapp.com/',
        'tags': ['React', 'HTML','JS','CSS', 'Styled-components']
    },
    {
        'title': 'Movie database 2',
        'desc': 'Another try at a movie database website, uni project',
        'img': 'https://i.imgur.com/2IVAhYY.png',
        'github': 'https://github.com/gothic459/movie-db',
        'live': '',
        'tags': ['React', 'HTML','JS','CSS', 'Styled-components']
    }

]
export default function Projects(params) {
    return (
        <Card face={'top'} contentType={'list'} content={projects}>

            <Sidebar path={'/about'} title={'About me'} direction={'down'} />
            <Sidebar path={'/home'} title={'Home'} direction={'left'} />
            <Sidebar path={'/contact'} title={'Contact'} direction={'up'} />


        </Card>
    )
};

