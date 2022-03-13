import Navbar from 'Components/Navbar';
import Section from 'Components/Section';
import LandingPage from 'Components/LandingPage';
import React, { useState, useEffect } from 'react';


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      
      <Section id="#home">
        <h1> hello world</h1>
      </Section>
    </>
  );
}


export default App;
