import styled from 'styled-components';
import Wave from '../img/wave-bottom.svg'
const Section = (props) => {
    return ( 
        <Body style={props.style} id={props.id} >
            {props.children}
        
            <footer>
            {props.id ==="contact" ? <img src={Wave}/> : null}
            </footer>
        </Body>
     );
}
const Body = styled.section`
    height: 96vh;
    border:1px solid red;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:relative;
    padding:0 10rem 0 10rem;
    scroll-margin-top:4rem;

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
        }
    }
    
    
`

export default Section;