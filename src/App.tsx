//Style
import "./styles/App.css";
import theme from "./styles/theme";
//Components
import LandingPage from "./sections/01_LandingPage/LandingPage";
import About from "./sections/02_About/About";
import Skills from "./sections/03_Skills/Skills";
import Projects from "./sections/04_Projects/Projects";
import Connect from "./sections/05_Connect/Connect";
import Footer from "./sections/06_Footer/Footer";
//MUI
import {  ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        className="App"
      >
        <LandingPage />
        <About speed={-4}/>
        <Skills />
        <Projects />
        <Connect speed={-4} />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
