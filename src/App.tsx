import React,{useEffect,useRef,useState} from 'react';
//Style
import './styles/App.css';
import theme from './styles/theme'
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
//Components
import LandingPage from './sections/01_LandingPage/LandingPage'
import AboutMe from './sections/02_About/About'
import Skills from './sections/03_Skills/Skills'
import Projects from './sections/04_Projects/Projects'
import Connect from './sections/05_Connect/Connect'
import Footer from './sections/06_Footer/Footer'
//MUI
import {
  styled,
  ThemeProvider,
} from '@mui/material/styles';
import { usePageLocation } from './hooks/pageContext';

import LinkAnimation from './LinkAnimation';
function App() {
  

  return (
    <ThemeProvider theme={theme}>
    <motion.div className="App"
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
        
    <LandingPage/>  
      <AboutMe /> 
      <LinkAnimation/>
       <Skills/>
      <Projects/>
      <Connect/>
      <Footer/>
    </motion.div>
    </ThemeProvider>
  );
}

export default App;
