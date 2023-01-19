import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Outlet, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import {
    Snackbar, Alert, List, ListItemButton, Stack, ListSubheader, ListItemIcon, Button
} from '@mui/material';
import Divider from '@mui/material/Divider';
import MenuIcon2 from '../../Image/menu.png'
import dropdown from '../../Image/dropdown.png'
import settings from '../../Image/settings.png'
import { Apps } from '@mui/icons-material';

import './Navigation.css'

const Navigation = () => {

    const [menuState, setMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [snack, setSnack] = useState(false)

    const navigate = useNavigate();
    const isMenuOpen = Boolean(anchorEl);
    const isMenuOpen2 = Boolean(anchorEl2);
    const menuId = 'primary-search-account-menu';

    const OpenMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false)
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropMenu = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };


    const Logout = () => {
        navigate('/');
    }

    const CloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            setSnack(false);
        }
        setSnack(false);
    };

    const OpenSnack = () => {
        setSnack(true);
    }

    useEffect(() => {
        OpenSnack();
    }, [])

    const menu = (
        <Drawer open={menuState} anchor={"left"} onClose={closeMenu} style={{ width: '200px' }}>
            <Box width={250} height={'100vh'} style={{ backgroundColor: '#FFFFFF' }}>
                <List component="nav"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader" style={{ display: 'flex', height: '50px', alignItems: 'center' }}>
                            <Stack direction={'row'} spacing={1} className='center'>
                                <Apps />
                                <Typography
                                    variant='caption'
                                    noWrap
                                    component="div"
                                >
                                    Үндсэн цэс
                                </Typography>
                            </Stack>
                        </ListSubheader>
                    }>

                    <List component="nav"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{ display: 'flex', height: '50px', alignItems: 'center' }}>

                                <Typography
                                    variant='caption'
                                    noWrap
                                    component="div"
                                >
                                    Ticketing system
                                </Typography>
                            </ListSubheader>
                        }>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                Main menu
                            </Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                Task handling
                            </Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                Operation
                            </Typography>
                        </ListItemButton>
                    </List>
                    <List component="nav"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{ display: 'flex', height: '50px', alignItems: 'center' }}>
                                <Typography
                                    variant='caption'
                                    noWrap
                                    component="div"
                                >
                                    Ticketing system
                                </Typography>
                            </ListSubheader>
                        }>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                International Call Service
                            </Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                M2M Service
                            </Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={settings} alt={'menu'} className='px20' />
                            </ListItemIcon>
                            <Typography
                                variant='body2'
                                component="div"
                            >
                                Task management
                            </Typography>
                        </ListItemButton>
                    </List>
                </List>
            </Box>
        </Drawer>
    );

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem >Хэрэглэгчийн мэдээлэл</MenuItem>
            <MenuItem onClick={Logout}>Гарах</MenuItem>
        </Menu>
    );

    return (
        <div className='dashboard' >
            <Snackbar open={snack} autoHideDuration={2000} onClose={CloseSnack}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Амжилттай нэвтэрлээ
                </Alert>
            </Snackbar>
            <div className="header">
                <div className='menu'>
                    <div className='center' style={{ width: '80px', height: '50px' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={OpenMenu}
                            className='center'
                        >
                            <img src={MenuIcon2} alt={'menu'} style={{ width: '15px' }} />
                        </IconButton>
                    </div>
                    <Stack spacing={1} direction={'row'}>
                        <div className='center'>
                            <Typography
                                variant='inherit'
                                noWrap
                                component="div"
                                color={'white'}
                            >
                                Дашранжин
                            </Typography>
                        </div>
                        <Divider orientation="vertical" />
                        <Button
                            id="demo-customized-button"
                            variant="none"
                            onClick={handleDropMenu}
                            endIcon={<img src={dropdown} alt={'menu'} style={{ width: '15px' }} />}
                            style={{ color: 'white', textTransform: 'none' }}

                        >
                            Task management
                        </Button>
                        <Menu
                            anchorEl={anchorEl2}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            id={menuId}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isMenuOpen2}
                            onClose={handleMenuClose}
                        >
                            <MenuItem >New task</MenuItem>
                            <MenuItem >Completed task</MenuItem>
                            <MenuItem >Current task</MenuItem>
                            <MenuItem >Old task</MenuItem>
                        </Menu>
                    </Stack>
                </div>

                <div className='profile'>
                    <div className='center' style={{ width: '60px', height: '55px' }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleProfileMenuOpen}
                            aria-controls={menuId}
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </div>
            </div>
            {renderMenu}
            {menu}
            <Outlet />
        </div >
    );
}
export default Navigation;