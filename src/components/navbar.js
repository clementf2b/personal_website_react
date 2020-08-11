import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../Resume.pdf';
import Contacts from './contacts';

import {
    AppBar, Avatar, Box, Divider,
    IconButton, List, ListItem, ListItemIcon,
    ListItemText, Toolbar, Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import MenuIcon from '@material-ui/icons/Menu';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

import {
    Apps, ArrowBack, Home
} from '@material-ui/icons';
import welcomeIcon from '../welcomeIcon.png';
import Typed from 'react-typed';

// CSS STYLES
const useStyles = makeStyles(theme => ({
    navbarContainor: {
        position: "fixed",
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
        width: "330px",
        background: "#00AAAA",
    },
    menuSliderContainerContent: {
        width: "330px",
        background: "#FFFFFF",
    }, listItem: {
        color: "#00AAAA",
    },
    listText: {
        color: "#00AAAA",
        fontSize: "17px"
    },
    contactsBox: {
        width: '100%',
        height: theme.spacing(7),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 8, //Here is the trick
    },
    divider: {
        backgroundColor: "#00AAAA",
    }
}));

const menuItems = [
    {
        listIcon: <Home fontSize="large" />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <ImportContactsIcon fontSize="large" />,
        listText: "Education",
        listPath: "/education",
    },
    {
        listIcon: <Apps fontSize="large" />,
        listText: "Portfolio",
        listPath: "/portfolio",
    },
    {
        listIcon: <AccountCircleIcon fontSize="large" />,
        listText: "Resume",
        listPath: Resume
    },
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

    const customListItem = lsItem => {
        if (lsItem.listText !== "Resume")
            return (
                <ListItem button component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                    <ListItemText classes={{primary:classes.listText}} primary={lsItem.listText} />
                </ListItem>
            )
        else
            return (
                <ListItem button component="a" href={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                    <ListItemText classes={{primary:classes.listText}} primary={lsItem.listText} />
                </ListItem>
            )
    }

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainerHeader}
            component="div"
            onClick={toggleSlider(slider, false)}
            ref={ref}>
            <Typed className={classes.navTitle}
                strings={['Welcome!']}
                typeSpeed={40}
            />
            <Avatar className={classes.avatar} src={welcomeIcon} alt="Clement avatar" />

            <Divider />
            <List className={classes.menuSliderContainerContent}>
                {
                    menuItems.map((lsItem, key, { length }) => {
                        return (
                            <Box key={key}>
                                {customListItem(lsItem)}
                                {(key !== length - 1) ? <Divider variant="inset" component="li" classes={{ root:classes.divider }} /> : null}
                            </Box>
                        )
                    })
                }

            </List>
            <Box className={classes.contactsBox} >
                <Contacts />
            </Box>
        </Box >
    )

    return (
        <>
            <Box component="nav" className={classes.navbarContainor}>
                <AppBar style={{ background: "#00AAAA", zIndex: 1, }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            {state === false ? <ArrowBack style={{ color: "#FBFAFA" }} /> : <MenuIcon style={{ color: "#FBFAFA" }} />}
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FBFAFA", zIndex: 1 }}>
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