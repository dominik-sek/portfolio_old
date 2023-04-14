import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function App() {
    const navigateToGithub = () =>{
        window.location.replace('github.com/gothic459')
    }

    React.useEffect(() => {
        navigateToGithub();
    },[])
  return (
    <Oof>
        big oof
    </Oof>
  );
}

const Oof = styled.section`
    height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;

`

export default App;
