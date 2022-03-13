import styled from 'styled-components';

const Section = (props) => {
    return ( 
        <Body style={props.style} id={props.id} >
            {props.children}
        </Body>
     );
}
const Body = styled.section`
    height: calc(100vh - 8rem);
    border:1px solid red;
`

export default Section;