import { Box, CardMedia } from "@mui/material";
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

//Front-End Info
const frontendInfoTop = [
  { icon: JS, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: HTML, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: RT, link: "https://reactjs.org/docs/getting-started.html" },
  { icon: JQ, link: "https://api.jquery.com/" },
  { icon: Ruby, link: "https://ruby-doc.org/" },
];
const frontendInfoBot = [
  { icon: CSS, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: MUI, link: "https://mui.com/material-ui/getting-started/overview/" },
  { icon: SASS, link: "https://sass-lang.com/documentation/" },
  { icon: BS, link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/" },
  { icon: Framer, link: "https://www.framer.com/docs/" },
];
//Back-End Info
const backendInfo = [
  { icon: EX, link: "https://expressjs.com/" },
  { icon: NODE, link: "https://nodejs.org/en/docs/es6/" },
  { icon: PSQL, link: "https://www.postgresql.org/" },
  { icon: Rails, link: "https://guides.rubyonrails.org/" },
];
//Testing Info
const testingInfo = [
  { icon: MC, link: "https://mochajs.org/api/index.html" },
  { icon: Chai, link: "https://www.chaijs.com/api/" },
  { icon: ESLint, link: "https://eslint.org/docs/latest/user-guide/getting-started" },
  { icon: JEST, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1" },
  { icon: Cypress, link: "https://docs.cypress.io/guides/overview/why-cypress" },
];
//Systems Info
const systemsInfo = [
  { icon: GITH, link: "https://docs.github.com/en" },
  { icon: GITP, link: "https://git-scm.com/doc" },
  { icon: NPM, link: "https://docs.npmjs.com/about-npm" },
  { icon: VSCode, link: "https://code.visualstudio.com/docs" },
];

type IconInfo = {
  icon: string;
  link: string;
};

const imagesSpreader: Function = (list: any) => {
  return list.map((image: IconInfo) => {
    return (
      <Box sx={{ p: 1, '&:hover': {
        backgroundColor: '#cad1e3',
        borderRadius: 2,
       
    },
  }} key={image.link}>
        <a href={image.link} target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            image={image.icon}
            alt=""
            sx={{ objectFit: "contain", maxWidth: "70px", maxHeight: "70px" }}
          />
        </a>
      </Box>
    );
  });
};

export {
  frontendInfoBot,
  frontendInfoTop,
  imagesSpreader,
  backendInfo,
  testingInfo,
  systemsInfo,
};
