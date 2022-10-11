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
import TSJS from '../assets/01_Front/tsjs.png';
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
import cStory from "../assets/projects/TheCompleteStory.gif";
import tweeter from "../assets/projects/Tweeter.gif";
import interview from "../assets/projects/interview.gif";
import jungle from "../assets/projects/Jungle.gif"
import tinyapp from "../assets/projects/tinyapp.gif"
import piano from "../assets/projects/piano.gif";
import camair from '../assets/projects/camair.gif'
const projectsInfo = [
  {
    name: "Cam Air",
    description: `Cam Air was my previous employer. I built this from the ground up as a small project to further develop my front-end skills. This site provides their customers with up-to-date information on the services that Cam Air can provide and the companies history and culture.`,
    gif: camair,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/cam-air#readme",
      },
      { name: "Deployed", link: "https://camair.jbridges1119.net/", },
    ],
    stack: [{ name: RT }, { name: TSJS },{ name: MUI }],
  },
  {
    name: "Bored?GameNyte!",
    description: `For board game and game
night enthusiasts, to help organize game collections, schedule events and make sure
everyone is prepared to maximize their time together.`,
    gif: bgn,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/boredGameNyte#readme",
      },
      { name: "Video", link: "https://youtu.be/ge31-cPi2Do" },
    ],
    stack: [{ name: RT }, { name: EX }, { name: NODE }, { name: PSQL },{ name: MUI }],
  },
  {
    name: "The Complete Story",
    description:
      "A storytelling web application, where a user posts the beginning of a story and other users are able to leave contributions that can be chosen to be added by the initial story author.",
    gif: cStory,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/TheCompleteStory#readme",
      },
    ],
    stack: [
      { name: JQ },
      { name: SASS },
      { name: EX },
      { name: NODE },
      { name: PSQL },
    ],
  },
  {
    name: "Interview Scheduler",
    description:
      "A single-page web app to help a user create, edit, and track, an hour long interview with one of 5 interviewers, between the hours of 12 PM - 5 PM, Monday-Friday.",
    gif: interview,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/scheduler#readme",
      },
      {
        name: "Deployed",
        link: "https://interview-scheduler-jbridges.netlify.app/",
      },
    ],
    stack: [{ name: RT }, { name: EX }, { name: NODE }, { name: PSQL }],
  },
  {
    name: "Welcome To The Jungle",
    description:
      "A mini e-commerce application built with Ruby on Rails 6.1, Active Record and Rspec for testing. Users can browse products, add to cart and checks-out with stripe payment system.",
    gif: jungle,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/Welcome-To-The-Jungles#readme",
      },
    ],
    stack: [{ name: Ruby }, { name: Rails }, { name: BS }],
  },
  {
    name: "Tweeter",
    description:
      "Tweeter is a single-page social media platform where users can leave 140 character posts. Users can also read through their list of tweets in chronological order.",
    gif: tweeter,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/tweeter#readme",
      },
      {
        name: "Deployed",
        link: "https://tweeter-lhl-project-jbridges.herokuapp.com/",
      },
    ],

    stack: [{ name: JQ }, { name: EX }, { name: SASS }, { name: NODE }],
  },
  {
    name: "Tiny App",
    description:
      "Create new short URL's that will be stored on your personal list. Only you will have access to editing and deleting your created links but everyone can share your tiny links!",
    gif: tinyapp,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/tinyapp#readme",
      },
      {
        name: "Deployed",
        link: "https://tinyapp-lhl-jbridges.herokuapp.com/",
      },
    ],

    stack: [{ name: JS }, { name: EX }, { name: BS }, { name: NODE }],
  },
  {
    name: "Piano Beats",
    description:
      "Piano Beats is a web app allowing the user to play the piano on one octave from their browser. Users can adjust the volume up or down to their liking.",
    gif: piano,
    buttons: [
      {
        name: "GitHub",
        link: "https://github.com/Jbridges1119/pianoBeats#readme",
      },
      {
        name: "Deployed",
        link: "https://pianobeats.jbridges1119.net/",
      },
    ],

    stack: [{ name: TSJS }, { name: RT }, { name: CSS }],
  },
];

export { projectsInfo };
