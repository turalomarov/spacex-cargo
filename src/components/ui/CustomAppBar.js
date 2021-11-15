import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import React from 'react';
import SearchHolder from './SearchHolder';
import ButtonHolder from './ButtonHolder';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//Component checks screen size to hide or show search input

//@ts-ignore
const CustomAppBar = React.memo(({ width, toggle }) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <AppBar
            position="fixed"
            sx={{
                ml: { sm: `${width}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        width: '100%',
                        '& .MuiInputBase-root': {
                            color: '#fff',
                            width: '50%'
                        },
                    }}
                >
                    <Typography variant="h6" noWrap component="div">
                        Cargo planner
                    </Typography>
                    {matches && <SearchHolder />}
                    <ButtonHolder />
                </Stack>
            </Toolbar>
        </AppBar>
    );
});

export default CustomAppBar;