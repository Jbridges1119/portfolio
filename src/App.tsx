import React from 'react';
//Style
import './styles/App.css';
import theme from './styles/theme'
import { motion } from "framer-motion";
//Components
import LandingPage from './sections/01_LandingPage/LandingPage'
import AboutMe from './sections/02_AboutMe/AboutMe'
import Skills from './sections/03_Skills/Skills'
import Footer from './sections/06_Footer/Footer'
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
      <Footer/>
    </motion.div>
    </ThemeProvider>
  );
}

export default App;
