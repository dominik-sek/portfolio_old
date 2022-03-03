import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from 'Screens/Home';
import About from 'Screens/About'
import Contact from 'Screens/Contact'
import Projects from 'Screens/Projects'
import AnimatedBackground from 'Components/AnimatedBackground';


function App() {
  const location = useLocation();
  return (
    <>
    <AnimatedBackground/>
    <Routes location={location} key={location.pathname}>
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
