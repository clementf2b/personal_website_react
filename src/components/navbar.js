import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

import {
    AppBar, Avatar, Box, Divider,
    IconButton, List, ListItem, ListItemIcon,
    ListItemText, Slider, Toolbar,
    Typography, ThemeProvider,
} from '@material-ui/core';
import {
    Apps, ArrowBack, AssignmentInd,
    ContactMail, Home,
} from '@material-ui/icons';
import welcomeIcon from '../welcomeIcon.png';
import Typed from 'react-typed';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    navbarContainor: {
        position:"fixed",
        width: "100%",
        zIndex: 1,
    },
    titleIcon: {
        marginRight: "9px", 
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    navTitle: {
        fontSize: "26px",
        display: "block",
        paddingLeft: "30%",
        paddingTop: theme.spacing(2),
        color: "white"
    },
    menuSliderContainerHeader: {
        width: 250,
        background: "#00AAAA",
    },
    menuSliderContainerContent: {
        width: 250,
        background: "#FFFFFF",
    },
    listItem: {
        color: "#00AAAA"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume",
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio",
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts",
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const ref = useRef(null);

    const toggleSlider = (slider, open) => () => {
        // ...state <- set back the previous sate , 
        // [slider( get "right" from click)]: open <- update state
        setState({ ...state, [slider]: open });
    };

    // handle for click outside to leave nav bar
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            toggleSlider("right", false)();
        }
    };
    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    //

    const classes = useStyles()

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainerHeader}
            component="div"
            onClick={toggleSlider(slider, false)}
            ref={ref}
        >
            <Typed className={classes.navTitle}
                strings={['Welcome!']}
                typeSpeed={40}
            />
            <Avatar className={classes.avatar} src={welcomeIcon} alt="Clement avatar" />

            <Divider />
            <List className={classes.menuSliderContainerContent}>
                {
                    menuItems.map( (lsItem, key, { length }) => {
                        return (
                            <Box key={key}>
                                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                                    <ListItemText primary={lsItem.listText} className={classes.listItem} />
                                </ListItem>
                                {(key !== length - 1) ? <Divider variant="inset" component="li" className={classes.listItem} /> : null}
                            </Box>
                        )
                    })
                }
            </List>
        </Box>
    )

    return (
        <>
            <Box component="nav" className={classes.navbarContainor}>
                <AppBar style={{ background: "#00AAAA", zIndex: 1, }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            {state === false ? <ArrowBack style={{ color: "#FBFAFA" }} /> : <MenuIcon style={{ color: "#FBFAFA" }} />}
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FBFAFA" , zIndex: 1 }}>
                            <Box component="div">
                                <SportsSoccerIcon className={classes.titleIcon} />
                                Clement's Portfolio
                            </Box>
                        </Typography>
                        <MobileRightMenuSlider open={state.right}>
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
export default Navbar;