import * as React from "react";
import { useEffect, useState } from "react";
//Context hook
import { usePageLocation } from "../../../hooks/pageContext";
//MUI5
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
//Style
import { motion } from "framer-motion";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import "../../../styles/01_LandingPageStyle/LandingPage.css";

const drawerWidth = 200;

const navIcons = [
  { icon: github, link: "https://github.com/Jbridges1119" },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/jeff-bridges-bb755a236/",
  },
];

type colorType = {
  home: string;
  about: string;
  skills: string;
  projects: string;
  connect: string;
};
const initialColor = {
  home: "none",
  about: "none",
  skills: "none",
  projects: "none",
  connect: "none",
};
const NavBar: React.FC = () => {
  const {
    currentPercent,
    aboutSect,
    skillSect,
    projectSect,
    connectSect,
    scrollToSection,
    topSect,
  } = usePageLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  //NavButton location - set this into an object later
  const [home, setHome] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [connect, setConnect] = useState({});
  const [color, setColor] = useState<colorType>(initialColor);

  const buttonMotion = {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 360, 360],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  };
  const navItems = [
    { name: "Home", location: topSect },
    { name: "About", location: aboutSect },
    { name: "Skills", location: skillSect },
    { name: "Projects", location: projectSect },
    { name: "Connect", location: connectSect },
  ];

  useEffect(() => {
    const navDown = {
      home: "#7b27f6",
      about: "#7b27f6",
      skills: "#7b27f6",
      projects: "#7b27f6",
      connect: "#7b27f6",
    };
    if (currentPercent > 0.1) {
      // console.log(currentPercent)
      setHome({ y: "26vh", x: "558px" });
      setAbout({ y: "33vh", x: "428px" });
      setSkills({ y: "40vh", x: "298px" });
      setProjects({ y: "47vh", x: "168px" });
      setConnect({ y: "54vh", x: "32%" });
      setColor(navDown);
    }
    if (currentPercent > 0.5 && currentPercent <= 14) {
      setHome((prev) => ({ ...prev, scale: 1.2 }));
      setColor((prev) => ({ ...prev, home: "#5802ff" }));
    }
    if (currentPercent > 14 && currentPercent <= 33) {
      setAbout((prev) => ({ ...prev, scale: 1.2 }));
      setColor((prev) => ({ ...prev, about: "#5802ff" }));
    }
    if (currentPercent > 33 && currentPercent <= 54) {
      setSkills((prev) => ({ ...prev, scale: 1.2 }));
      setColor((prev) => ({ ...prev, skills: "#5802ff" }));
    }
    if (currentPercent > 54 && currentPercent <= 85) {
      setProjects((prev) => ({ ...prev, scale: 1.2 }));
      setColor((prev) => ({ ...prev, projects: "#5802ff" }));
    }
    if (currentPercent > 85 && currentPercent <= 100) {
      setConnect((prev) => ({ ...prev, scale: 1.2 }));
      setColor((prev) => ({ ...prev, connect: "#5802ff" }));
    }
    if (currentPercent < 1) {
      setColor(initialColor);
      setHome({});
      setAbout({});
      setSkills({});
      setProjects({});
      setConnect({});
    }
  }, [currentPercent]);
  const transition = { type: "tween" };
  const onHover = { scale: 1.2 };
  const onTap = { scale: 0.95 };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: `linear-gradient(100deg, #24a4ea, #379deb 25%, #b76bf0)`,
        color: "white ",
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.location)}
              sx={{ textAlign: "center", my: 1 }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {navIcons.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton
              href={item.link}
              target="_blank"
              sx={{
                textAlign: "center",
                my: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={item.icon} alt={""} loading="lazy" />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="mailto:Jbridges1119@gmail.com"
            target="_blank"
            sx={{
              textAlign: "center",
              my: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MailOutlineIcon
              sx={{ height: "50px", width: "50px", color: "white" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component="nav"
        position="relative"
        sx={{ background: "rgba(0,0,0,0.0)", boxShadow: "none", zIndex: 100 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "none" },
              background: "#24a4ea",
              position: "fixed",
            }}
          >
            <MenuIcon />
          </IconButton>
          <motion.div whileHover={buttonMotion}>
            <Button
              href="https://github.com/Jbridges1119"
              target="_blank"
              sx={{
                display: { xs: "none", md: "block" },
                p: 0,
                height: "60px",
              }}
            >
              <img
                src={github}
                alt={""}
                loading="lazy"
                style={{ height: "60px" }}
              />
            </Button>
          </motion.div>
          <motion.div whileHover={buttonMotion}>
            <Button
              href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
              target="_blank"
              sx={{ display: { xs: "none", md: "block" }, pt: 0 }}
            >
              <img
                color={"white"}
                src={linkedin}
                alt={""}
                loading="lazy"
                style={{ paddingTop: "15px" }}
              />
            </Button>
          </motion.div>
          <motion.div whileHover={buttonMotion}>
            <Button
              href="mailto:Jbridges1119@gmail.com"
              target="_blank"
              sx={{
                display: { xs: "none", md: "flex" },
                p: 0,
                height: "60px",
              }}
            >
              <MailOutlineIcon
                sx={{ height: "50px", width: "50px", color: "white" }}
              />
            </Button>
          </motion.div>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "fixed",
              right: 0,
              justifyContent: { md: "flex-end" },
              pr: 6,
            }}
          >
            {/* Map these buttons later */}
            <motion.button
              onClick={() => scrollToSection(topSect)}
              whileHover={onHover}
              whileTap={onTap}
              animate={home}
              transition={transition}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "none",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                position: "fixed",
                right: "568px",
                width: "120px",
                top: "1vh",
                padding: 8,
                fontWeight: "bold",
                background: color.home,
                letterSpacing: "0.04em",
                fontFamily: "DM Sans",
              }}
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => scrollToSection(aboutSect)}
              whileHover={onHover}
              whileTap={onTap}
              animate={about}
              transition={transition}
              style={{
                top: "1vh",
                cursor: "pointer",
                color: "#fff",
                border: "none",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                position: "fixed",
                right: "438px",
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: color.about,
                letterSpacing: "0.04em",
                fontFamily: "DM Sans",
              }}
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollToSection(skillSect)}
              whileHover={onHover}
              whileTap={onTap}
              animate={skills}
              transition={transition}
              style={{
                top: "1vh",
                cursor: "pointer",
                color: "#fff",
                border: "none",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                position: "fixed",
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                right: "308px",
                background: color.skills,
                letterSpacing: "0.04em",
                fontFamily: "DM Sans",
              }}
            >
              Skills
            </motion.button>
            <motion.button
              onClick={() => scrollToSection(projectSect)}
              whileHover={onHover}
              whileTap={onTap}
              animate={projects}
              transition={transition}
              style={{
                top: "1vh",
                cursor: "pointer",
                color: "#fff",
                border: "none",
                borderRadius: 25,
                fontSize: 18,
                position: "fixed",
                right: "178px",
                margin: 7,
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: color.projects,
                letterSpacing: "0.04em",
                fontFamily: "DM Sans",
              }}
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection(connectSect)}
              whileHover={onHover}
              whileTap={onTap}
              animate={connect}
              transition={transition}
              style={{
                top: "1vh",
                cursor: "pointer",
                color: "#fff",
                border: "none",
                borderRadius: 25,
                fontSize: 18,
                position: "fixed",
                margin: 7,
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: color.connect,
                letterSpacing: "0.04em",
                fontFamily: "DM Sans",
              }}
            >
              Connect
            </motion.button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "fixed", md: "none" },
            height: "100%",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#00000085",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
