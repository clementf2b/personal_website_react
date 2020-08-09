import React, { number, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import avatar from '../avatar.png';
import Typed from 'react-typed';

// CSS Styles
const useStyles = makeStyles(theme => ({
    typedContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate(0,50%)",
        width: "100vw",
        textAlign: "center",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(9),
    },
    avatar: {
        width: theme.spacing(23),
        height: theme.spacing(23),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        color: "#FFFFFF",
    },
    subtitle: {
        color: "#DDDDDD",
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar variant="circle" className={classes.avatar} src={avatar} alt="Clement avatar" />
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