import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import SearchHolder from './SearchHolder';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material/styles';


//Component checks screen size to show or hide both sidebar with Company names, and search input

//@ts-ignore
const CustomDrawer = React.memo(({ open, toggle, drawerWidth }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
  const params = matches ? {
    sx: {
      display: { xs: 'none', sm: 'block' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: 0 },
    },
    variant: 'permanent',
    open
  } : {
    variant: "temporary",
    open: open,
    onClose: toggle,
    ModalProps: {
      keepMounted: true, 
    },
    sx: {
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }
  }

  return (
    <Drawer
      {...params}
    >
      <Toolbar sx={{
        backgroundColor: (theme) => theme.palette.primary.main
      }}>
        {!matches && <SearchHolder />}
      </Toolbar>
      <Sidebar />
    </Drawer>
  );
});

export default CustomDrawer;