import React from 'react';
//Style
import './styles/App.css';
import theme from './styles/theme'
import { motion } from "framer-motion";
//Components
import LandingPage from './components/LandingPage/LandingPage'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
//MUI
import {
  ThemeProvider,
} from '@mui/material/styles';


function App() {


  return (
    <ThemeProvider theme={theme}>
    <motion.div className="App"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <LandingPage/>
     
      <AboutMe/>
      <Skills/>
    </motion.div>
    </ThemeProvider>
  );
}

export default App;
