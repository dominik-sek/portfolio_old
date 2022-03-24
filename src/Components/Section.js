import styled from 'styled-components';
import Wave from '../img/wave-bottom.svg'

const Section = (props) => {
    return ( 
        <Body style={props.style} id={props.id} >
        <SectionHr title={props.title} />

            <div className='content'>
            {props.children}
            </div>

            
            {props.id ==="contact" ? <footer><img alt="wave background" src={Wave}/> </footer> : null}
            
        </Body>
     );
}
const SectionHr = styled.hr`
    margin-top:1rem;
    margin-bottom:1rem;
    line-height: 1vh;
    position: relative;
    outline: 0;
    border: 0;
    text-align: center;
    height: 1.5rem;
    opacity: .7;
    
     &::before {
        content: '';
        background: linear-gradient(to right, transparent, var(--clr-primary), transparent);
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 0.1rem;
  }
    &::after {
        content: '${props=>props.title}';
        position: relative;
        display: inline-block;
        color: var(--clr-primary);
        padding: 0 .5em;
        line-height: 1.5em;
        background-color: #fcfcfa;
  }
  

`
const Body = styled.section`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:relative;
    background: white;
    scroll-margin:4rem;
    & * {
        color:black;
    }

    & footer{
        display: flex;
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        

        & img {
            width:100%;
            z-index: 1;
        }
    }

    & .content{
        display: flex;
        flex:1;
        & form{
            height:fit-content;
            & input, textarea{
                text-indent: 1rem;
                outline-color: var(--clr-primary);
            }
            & button{
                width:50%;
                align-self: center;
                /* background-color: var(--clr-primary); */
                transition: background-color 0.3s ease-in-out;
                transition: color 0.3s ease-in-out;
                &:hover{
                    background-color: rgba(0,0,0,1);
                    color: white;
                }
            }
        }
    }

    & div>div{
        display: flex;
        width:50%;
    }

    
`

export default Section;