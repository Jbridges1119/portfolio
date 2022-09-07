//Front-end icons
import BS from "../assets/01_Front/BS.png";
import CSS from "../assets/01_Front/CSS.png";
import Framer from "../assets/01_Front/framer-motion.webp";
import HTML from "../assets/01_Front/HTML5.png";
import JQ from "../assets/01_Front/JQ.png";
import JS from "../assets/01_Front/JS.png";
import MUI from "../assets/01_Front/mui.png";
import RT from "../assets/01_Front/REACT.png";
import Ruby from "../assets/01_Front/Ruby.png";
import SASS from "../assets/01_Front/SASS.png";
//Back-end icons
import EX from "../assets/02_Back/EX.png";
import NODE from "../assets/02_Back/NODE.png";
import PSQL from "../assets/02_Back/PSQL.png";
import Rails from "../assets/02_Back/Rails.png";
//Testing
import Chai from "../assets/03_Testing/chai.png";
import Cypress from "../assets/03_Testing/cypress.svg";
import ESLint from "../assets/03_Testing/eslint.png";
import JEST from "../assets/03_Testing/JEST.png";
import MC from "../assets/03_Testing/MC.png";
//Systems
import GITH from "../assets/04_Systems/GITH.png";
import GITP from "../assets/04_Systems/GITP.png";
import NPM from "../assets/04_Systems/NPM.png";
import VSCode from "../assets/04_Systems/VSCode.png";
//Gifs
import bgn from "../assets/projects/bgn.gif";
import cStory from '../assets/projects/TheCompleteStory.gif'
import tweeter from '../assets/projects/Tweeter.gif'
import interview from '../assets/projects/interview.gif'


const projectsInfo = [
  {
    name: "Bored?GameNyte!",
    description: `A web application for board game and game
night enthusiasts, to help facilitate the organizing of
game collections, scheduling events and making sure
everyone is prepared to maximize their time together.`,
    gif: bgn,
    buttons: [
      { name: "Github", link: "https://github.com/Jbridges1119/boredGameNyte" },
      { name: "Video", link: "https://youtu.be/ge31-cPi2Do" },
    ],
    stack: [RT, EX, NODE, PSQL]
  },
  {
    name: "The Complete Story",
    description:
      "Storytelling web application where a user posts the beginning of a story and other users are able to leave contributions that can be chosen by the initial author to be added to the original story.",
    gif: cStory,
    buttons: [{ name: "Github", link: "https://github.com/Jbridges1119/TheCompleteStory" }],
    stack: [JQ, SASS, EX, NODE, PSQL]
  },
  {
    name: "Interview Scheduler",
    description:
      "A single-page web app to help a user create, edit, and track, an hour long interview with one of 5 interviewers, between the hours of 12 PM - 5 PM, Monday-Friday.",
    gif: interview,
    buttons: [
      { name: "Github", link: "https://github.com/Jbridges1119/scheduler" },
      { name: "Live", link: "https://interview-scheduler-jbridges.netlify.app/" },
    ],
    stack: [RT, EX, NODE, PSQL]
  },
  {
    name: "Tweeter",
    description: "Tweeter is a simple, single-page social media platform where users can leave 140 character posts. Users can also read through their list of tweets in chronological order.",
    gif: tweeter,
    buttons: [{ name: "Github", link: "https://github.com/Jbridges1119/tweeter" },{ name: "Live", link: "https://tweeter-lhl-project-jbridges.herokuapp.com/" },],
    
    stack: [JQ, HTML, SASS, Node]
  },

];

export { projectsInfo };
