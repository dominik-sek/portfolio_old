import Navbar from 'Components/Navbar';
import LandingPage from 'Components/LandingPage';
import React from 'react';
import styled from 'styled-components';
import AboutSection from 'Pages/AboutSection';
import ProjectsSection from 'Pages/ProjectsSection';
import ContactSection from 'Pages/ContactSection';

function App() {

  return (
    <Wrapper>
          <Navbar />
      <LandingPage id="home"/>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />

    </Wrapper>
  );
}
const Wrapper = styled.div`
    & section{
      margin-top:2rem;
    }

`

export default App;
