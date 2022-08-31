import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
import { useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from 'react';
import { useInView} from "framer-motion"
const drawerWidth = 240;
const navItems = ['About', 'Skills', 'Projects', 'Connect'];

const NavBar = () => {
  const { scrollY } = useScroll()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [nav, setNav] = useState('none')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest)
      if(latest > 115) {
        setNav('inline')
      }
      if(latest < 115) setNav('none')
    })
  }, [])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',background: `linear-gradient(100deg, #24a4ea, #379deb 25%, #b76bf0)`, color:'white ', height: '100vh'}}>

      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', my:1 }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
 
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="sticky" sx={{background: 'rgba(0,0,0,0.0)', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, background: 'rgba(0,0,0,0.0)' }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
        
          sx={{ display: { xs: 'none', md: 'flex'  }, width: '100%', justifyContent: {md: 'flex-end'}, pr: 8 }}>
            {navItems.map((item) => (<>
              <motion.div     >
              <Button key={item}  sx={{ color: '#fff', border: '2px solid white', borderRadius: 15, fontSize: 15, m:2, width: '120px', pt:1.1,fontWeight: 'bold',  }}>
                {item}
              </Button></motion.div>
              <Button key={item + 1}  sx={{ color: '#fff', border: '2px solid white', borderRadius: 15, fontSize: 15, m:2, width: '120px', pt:1.1,fontWeight: 'bold', position:'sticky', display: `${nav}`  }}>
              {item}
            </Button></>
            ))}
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

export default NavBar