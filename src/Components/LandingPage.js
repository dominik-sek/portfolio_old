
import styled from 'styled-components';
import Wave from '../img/wave.svg'
import AnimatedBackground from './AnimatedBackground';
const LandingPage = (props) => {
    return ( 
        <Body id={props.id} className='landing'>
            

            <section className='landing-content'>
                <div className='left-intro'>
                    <h1>Hi, my name is Dominik<br/>
                        I am a front end developer<br/>
                        based in Poland</h1>

                <div className='buttons'>

                    <ul>
                        <li><a href="#projects">my projects</a></li>
                        <li><a href="#about">about me</a></li>
                    </ul>

                </div>
                        
                </div>


                <div className='right-intro'>
                </div>
            </section>

        <footer>
            <img src={Wave} />
        </footer>
        </Body>
    );
}
 
const Body = styled.main`
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background: var(--clr-primary);  
    scroll-margin:4rem;


    &::before{
        content:'';
        width:0;
        height:0;
    }

    & .landing-content{
        flex:1;
        display: flex;
        padding:9rem 0 0 0;  
    }
    & .right-intro{
        width:50%;
        margin-left: 5%;
        justify-self: flex-end;
    }

    & .left-intro{
        width:50%;

            & .buttons > ul{
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
                        color:black;
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
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
    }
`
export default LandingPage;