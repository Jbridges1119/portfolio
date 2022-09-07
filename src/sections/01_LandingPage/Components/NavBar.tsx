import * as React from "react";
import { useEffect, useState, useRef } from "react";
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
//Style
import { motion } from "framer-motion";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const drawerWidth = 200;

const navIcons = [
  { icon: github, link: "https://github.com/Jbridges1119" },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/jeff-bridges-bb755a236/",
  },
];
const NavBar = () => {

  const { currentPercent, aboutSect, skillSect, projectSect, connectSect, scrollToSection, topSect  } = usePageLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //NavButton location
  const [home, setHome] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [connect, setConnect] = useState({});
 
  const buttonMotion = {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 360, 360],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  };
  const navItems = [{name: 'Home', location: topSect}, {name:"About",location: aboutSect},{ name:"Skills", location: skillSect}, {name:"Projects",location: projectSect}, {name:"Connect", location: connectSect}];


  useEffect(() => {
    if (currentPercent > 1) {
      console.log(currentPercent)
      const move: {} = {
        x: "32%",
        position: "fixed",
        backgroundColor: "#a557ff",
      };
      setHome({ y: "27vh", ...move });
      setAbout({ y: "33vh", ...move });
      setSkills({ y: "39vh", ...move });
      setProjects({ y: "45vh", ...move });
      setConnect({ y: "51vh", ...move });
    }
    if (currentPercent < 1) {
      setHome({});
      setAbout({});
      setSkills({});
      setProjects({});
      setConnect({});
    }
  }, [currentPercent]);

 

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
        height: "100vh",
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding >
            <ListItemButton onClick={() => scrollToSection(item.location)}  sx={{ textAlign: "center", my: 1 }} >
              <ListItemText primary={item.name} primaryTypographyProps={{fontSize: '22px', fontWeight: "bold"}}/>
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
    <Box >
      <AppBar
        component="nav"
        position="sticky"
        sx={{ background: "rgba(0,0,0,0.0)", boxShadow: "none" }}
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
          <motion.div  whileHover={buttonMotion}>
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
          >  <motion.button
              onClick={() => scrollToSection(topSect)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={home}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: "none",
              }}
              className="btn-nav"
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => scrollToSection(aboutSect)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={about}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: "none",
              }}
              className="btn-nav"
            >
              About Me
            </motion.button>
            <motion.button
            onClick={() => scrollToSection(skillSect)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={skills}
              
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                margin: 7,
                width: "120px",
                padding: 8,
                fontWeight: "bold",
                background: "none",
              }}
              className="btn-nav"
            >
              Skills
            </motion.button>
            <motion.button
            onClick={() => scrollToSection(projectSect)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={projects}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,

                margin: 7,
                width: "120px",

                padding: 8,
                fontWeight: "bold",
                background: "none",
              }}
              className="btn-nav"
            >
              Projects
            </motion.button>
            <motion.button
            onClick={() => scrollToSection(connectSect)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={connect}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,

                margin: 7,
                width: "120px",

                padding: 8,
                fontWeight: "bold",
                background: "none",
              }}
              className="btn-nav"
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
