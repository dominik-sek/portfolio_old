import Navbar from 'Components/Navbar';
import Section from 'Components/Section';
import LandingPage from 'Components/LandingPage';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AboutSection from 'Pages/AboutSection';
import ProjectsSection from 'Pages/ProjectsSection';
import ContactSection from 'Pages/ContactSection';
import { device } from 'device';

function App() {

  return (
    <Wrapper>
          <Navbar />
      <LandingPage id="home"/>

      <AboutSection />
      {/* <ProjectsSection /> */}
      <ContactSection />

    </Wrapper>
  );
}
const Wrapper = styled.div`
    & section+section{
      margin-top:2rem;
    }

`

export default App;
