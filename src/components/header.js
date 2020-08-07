import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import avatar from '../avatar.png';
import Typed from 'react-typed';

// CSS Styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        margin: theme.spacing(2),

        display: "block",
        border:"2px solid #FFFFFF",   
        borderRadius:"100px",
        boxSizing: "border-box",
    },
    title: {
        color: "#FFFFFF",
    },
    subtitle: {
        color: "#DDDDDD",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "16%",
        left: "50%",
        transform: "translate(-50%,50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: "1"
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Clement avatar" />
            </Grid>
            <Typography className={classes.title} variant="h3">
                <Typed strings={["Clement Ng"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Brisk．Creative．Open-minded"]} typeSpeed={40} />
            </Typography>
        </Box>
    );
};

export default Header;