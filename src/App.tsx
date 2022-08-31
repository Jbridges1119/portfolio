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
import { Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {


  return (
    <ThemeProvider theme={theme}>
    <motion.div className="App"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <LandingPage/>
      <Typography sx={{color: '#81807c' }}><ArrowDownwardIcon sx={{fontSize: 15}}/>Scroll Down<ArrowDownwardIcon sx={{fontSize: 15}}/></Typography>
      <AboutMe/>
      <Skills/>
    </motion.div>
    </ThemeProvider>
  );
}

export default App;
