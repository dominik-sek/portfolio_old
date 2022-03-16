
import styled from 'styled-components';
import Wave from '../img/wave.svg'

const LandingPage = (props) => {
    return (
        <Body id={props.id} className='landing'>


            <section className='landing-content'>
                <div className='middle'>
                    <h1>Hi, my name is Dominik<br />
                        I am a front end developer<br />
                        based in Poland</h1>

                    <div className='buttons'>
                        <ul>
                            <li><a href="#projects">my projects</a></li>
                            <li><a href="#about">about me</a></li>
                        </ul>

                    </div>

                </div>

            </section>

            <footer>
                <img alt="wave background" src={Wave} />
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
    scroll-margin:4rem;
    background: var(--clr-primary);  


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

    & .middle{
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
                    position: relative;
                    z-index:1;

                    &:hover{
                        &::after{
                            opacity: 1;
                            height:100%;
                            width:100%;
                        }
                    }
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