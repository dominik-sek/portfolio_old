
import styled from 'styled-components';
import Wave from '../img/wave.svg'
const LandingPage = () => {
    return ( 
        <Body className='landing'>

            <section className='landing-content'>
                <div className='title'>
                    <h1>Hi, my name is Dominik<br/>
                        I am a front end developer<br/>
                        based in Poland</h1>
                </div>
                <div className='buttons'>
                <ul>
                    <li><a href="#projects">my projects</a></li>
                    <li><a href="about">about me</a></li>
                </ul>
                </div>
            </section>

        <footer>
            <img src={Wave} />
        </footer>
        </Body>
    );
}
 
const Body = styled.main`
    height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    & .landing-content{
        flex:1;
        margin-top:9rem;
    }

    & .title{
        width:50%;
    }
    & .buttons{
        width:50%;
        & ul{
            margin-top: 3rem;
            width:100%;
            height:4rem;
            display: flex;
            list-style-type: none;

            & li{
                width:50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background:#fff;
                
                &> a{
                text-decoration: none;
                color:#A4A4A4;
            }
            }   
            & li+li{
                margin-left:5%;
            }  
        }
    }
    & img {
        width: 100%;
    }
    & footer{
        display: flex;
        justify-content: flex-end;
        position:absolute;
        bottom:0;
        width:100%;
        margin: 0 -10% 0 -10%;
}
`
export default LandingPage;