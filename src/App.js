import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from 'Screens/Home/Home';
import About from 'Screens/About'
import Contact from 'Screens/Contact'
import Projects from 'Screens/Projects'
import styled from 'styled-components'
import Navbar from 'Components/Navbar'
import AnimatedBackground from 'Components/AnimatedBackground';
function App() {
  return (
    <>
    <AnimatedBackground/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<div>oops</div>} />
    </Routes>
    </>
  );
}


export default App;
