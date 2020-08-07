import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer'
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
        paddingTop: "5%",
        color: "white"
    },
    menuSliderContainerHeader: {
        width: 250,
        background: "#009999",
        height: "100%",
    },
    menuSliderContainerContent: {
        width: 250,
        background: "snow",
        height: "100%",
    },
    listItem: {
        color: "#009999"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
];

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        // ...state <- set back the previous sate , 
        // [slider( get "right" from click)]: open <- update state
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles()

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainerHeader}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Typed className={classes.navTitle}
                strings={['Welcome!']}
                typeSpeed={40}
            />
            <Avatar className={classes.avatar} src={welcomeIcon} alt="Clement avatar" />

            <Divider />
            <List className={classes.menuSliderContainerContent}>
                {
                    menuItems.map(function (lsItem, key, { length }) {
                        return (
                            <Box key={key}>
                                <ListItem button key={key}>
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
            <Box component="nav">
                <AppBar position="static" style={{ background: "#394C4E" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "#FBFAFA" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FBFAFA" }}>
                            <Box component="div">
                                Portfolio
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