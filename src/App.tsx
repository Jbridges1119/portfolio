import React from 'react';
//Styles
import './styles/App.css';
//Components
import LandingPage from './components/LandingPage/LandingPage'
//MUI
import {
  ThemeProvider,
} from '@mui/material/styles';
import theme from './styles/theme'


function App() {


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <LandingPage/>
      Scroll Down
    </div>
    </ThemeProvider>
  );
}

export default App;
