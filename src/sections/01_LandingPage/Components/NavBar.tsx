import * as React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
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
import { motion, } from "framer-motion";
import { useScroll } from "framer-motion";
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
      if (latest > 60) {
        const move: {} = {
          x: "32%",
          position: "fixed",
          backgroundColor: "#a557ff",
        };
        setAbout({ y: "33vh", ...move});
        setSkills({ y: "39vh", ...move });
        setProjects({ y: "45vh", ...move });
        setConnect({ y: "51vh", ...move });
      }
      if (latest < 30) {
        setAbout({});
        setSkills({});
        setProjects({});
        setConnect({});
      }
    });
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
        sx={{ background: "rgba(0,0,0,0.0)", boxShadow: "none",px:8 }}
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
              position: "fixed",
            }}
          >
            <MenuIcon />
          </IconButton>
          <motion.div
          whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          >
          <Button
            href="https://github.com/Jbridges1119"
            target="_blank"
            sx={{ display: { xs: "none", md: "block" }, mt: 0.5 }}
          >
            <img src={github} alt={""} loading="lazy" />
          </Button></motion.div>
          <motion.div
              whileHover={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
          >
          <Button
            href="https://www.linkedin.com/in/jeff-bridges-bb755a236/"
            target="_blank"
            sx={{ display: { xs: "none", md: "block" }, mt: 0.5 }}
          >
            <img color={"white"} src={linkedin} alt={""} loading="lazy" />
          </Button></motion.div>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "fixed",
              right: 0,
              justifyContent: { md: "flex-end" },
              pr: 8,
            }}
          >
            <motion.button
          
             whileHover={{scale: 1.05,
            
             }}
             whileTap={{scale: 0.95}}
              animate={about}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                marginTop: 15,
                marginInline: 5,
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
            whileHover={{scale: 1.05,
            
            }}
            whileTap={{scale: 0.95}}
              animate={skills}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                marginTop: 15,
                marginInline: 5,
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
               whileHover={{scale: 1.05,
            
               }}
               whileTap={{scale: 0.95}}
              animate={projects}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                marginTop: 15,
                marginInline: 5,
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
               whileHover={{scale: 1.05,
            
               }}
               whileTap={{scale: 0.95}}
              animate={connect}
              style={{
                cursor: "pointer",
                color: "#fff",
                border: "2px solid white",
                borderRadius: 25,
                fontSize: 18,
                marginTop: 15,
                marginInline: 5,
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
