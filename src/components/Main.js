import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes } from "react-router";
import Details from './routes/Details';
import CustomAppBar from './ui/CustomAppBar';
import CustomDrawer from './ui/CustomDrawer';
import Message from './routes/Message';

const drawerWidth = 240

function Main() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <CustomAppBar width={drawerWidth} toggle={handleDrawerToggle}/> 
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <CustomDrawer open={mobileOpen} toggle={handleDrawerToggle} drawerWidth={drawerWidth}/>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Routes>
            <Route path='/:id' element={<Details />} />
            <Route path="*" element={<Message />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default Main;