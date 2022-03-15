import styled from 'styled-components';
import Wave from '../img/wave-bottom.svg'

const Section = (props) => {
    return ( 
        <Body style={props.style} id={props.id} >
 
            <div className='content'>
            {props.children}
            </div>

            <footer>
            {props.id ==="contact" ? <img src={Wave}/> : null}
            </footer>
        </Body>
     );
}
const Body = styled.section`
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:relative;
    background: white;
    scroll-margin:4rem;
    border:1px solid red;
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

    & .content{
        display: flex;
        flex:1;
    }

    & div>div{
        display: flex;
        width:50%;
    }

    
`

export default Section;