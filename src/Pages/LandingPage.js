
import styled from 'styled-components';
import Wave from '../img/wave.svg'

const LandingPage = (props) => {
    return (
        <Body id={props.id} className='landing-content'>


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

                <div className="wave" />

            </section>


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
        & *:not(.wave){
            z-index:1;
        }

        & .wave{
            display: flex;
            position: absolute;
            bottom:0;
            left:0;
            width:100%;
            background-image: url(${Wave});
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 0;
            height:20vh;
        }
        
    }

    & .middle{
        width:50%;

        & h1{
            padding-left: 2rem;
            
            &::before{
                content:'';
                height:100%;
                position:absolute;
                left:0;
                bottom:0;
                width:10px;
                border-left:10px solid var(--clr-secondary);
            }
        }

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
                    background:var(--clr-secondary);
                    position: relative;
                    z-index:1;
                    transition: background-color 0.3s ease-in-out;
                    border:1px solid var(--clr-primary);

                    &:hover{
                        background-color: var(--clr-hover-dark);
                        background-blend-mode: multiply;
                        &>a{
                            color: var(--clr-secondary);
                        }
                    }
                        &> a{
                        text-decoration: none;
                        color:var(--clr-primary-dark);
                        transition: color 0.3s ease-in-out;
                        }
                    }   
                & li+li{
                    margin-left:5%;
                }  
        }
    }


    
`
export default LandingPage;