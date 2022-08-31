import * as React from "react";
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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";

const drawerWidth = 240;
const navItems = ["About", "Skills", "Projects", "Connect"];

const NavBar = () => {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [connect, setConnect] = useState({});

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
      let moveAbout;
      let moveSkills;
      let moveProjects;
      let moveConnect;
      if (latest > 20 ) {
       moveAbout = { x: "3vw", y: "25vh", position: "fixed" }
       moveSkills = { x: "3vw", y: "35vh", position: "fixed" }
       moveProjects = { x: "3vw", y: "45vh", position: "fixed" }
       moveConnect = { x: "3vw", y: "55vh", position: "fixed", color: 'black' }
        
        setAbout(moveAbout);
        setSkills(moveSkills)
        setProjects(moveProjects)
        setConnect(moveConnect)
       
      }
      if (latest < 20) {
        setAbout("none");
        setSkills("none")
        setProjects("none")
        setConnect("none")
    }});
  }, []);

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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", my: 1 }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="https://github.com/Jbridges1119"
            target="_blank"
            sx={{
              textAlign: "center",
              my: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={github} alt={""} loading="lazy" />{" "}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
         href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
         target="_blank"
            sx={{
              textAlign: "center",
              my: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img color={"white"} src={linkedin} alt={""} loading="lazy" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
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
              background: "rgba(0,0,0,0.0)",
              position: 'fixed'
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            href="https://github.com/Jbridges1119"
            target="_blank"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" }, ml: 8, mt:0.5 }}
          >
            <img src={github} alt={""} loading="lazy" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
            target="_blank"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" },mt:0.5 }}
          >
            <img color={"white"} src={linkedin} alt={""} loading="lazy" />
          </Button>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: { md: "flex-end" },
              pr: 8,
            }}
          >
         
              <motion.div animate={about} transition={{type: 'tween',
}}>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid white",
                    borderRadius: 15,
                    fontSize: 15,
                    mt: 2,
                    mx:1,
                    width: "120px",
                    pt: 1.1,
                    fontWeight: "bold",
                  }}
                >
                  About
                </Button>
              </motion.div>
              <motion.div animate={skills} transition={{type: 'tween',

}}>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid white",
                    borderRadius: 15,
                    fontSize: 15,
                    mt: 2,mx:1,
                    width: "120px",
                    pt: 1.1,
                    fontWeight: "bold",
                  }}
                >
                  Skills
                </Button>
              </motion.div>
              <motion.div animate={projects} transition={{type: 'tween',

}}>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid white",
                    borderRadius: 15,
                    fontSize: 15,
                    mt: 2,mx:1,
                    width: "120px",
                    pt: 1.1,
                    fontWeight: "bold",
                  }}
                >
                  Projects
                </Button>
              </motion.div>
              <motion.div animate={connect} transition={{type: 'tween',

}}>
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid white",
                    borderRadius: 15,
                    fontSize: 15,
                    mt: 2,mx:1,
                    width: "120px",
                    pt: 1.1,
                    fontWeight: "bold",
                  }}
                >
                  Connect
                </Button>
              </motion.div>
            
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
