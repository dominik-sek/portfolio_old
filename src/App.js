import Navbar from 'Components/Navbar';
import Section from 'Components/Section';
import LandingPage from 'Components/LandingPage';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  return (
    <Wrapper>
          <Navbar />

      <LandingPage id="home"/>

      <Section id="about">
          <h2>I am a third-year student at<br />
        Academy of Applied Sciences in Tarnów<br />
        currently studying applied computer science</h2>
      </Section>

      <Section id="projects">
          <h2>projects section</h2>
      </Section>

      <Section id="contact">
          <h2>
            contact section
          </h2>
      </Section>

    </Wrapper>
  );
}
const Wrapper = styled.div`

`

export default App;
