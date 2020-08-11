import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box, Button, Grid, Typography
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    contactsCard: {
        marginBottom: theme.spacing(1),
    }, contactsTitle: {
        marginLeft: theme.spacing(3),
        color: "#00AAAA",
    }, socialIcon: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(1),
        backgroundColor: "rgba(255,255,255,0.8)",
        border: "1px solid #00AAAA",
        width: "120px",

        "&:hover, &.Mui-focusVisible": {
            backgroundColor: "#006677",
            border: "1px solid #006677",
        }
    }, popup: {
        padding: theme.spacing(2),
        backgroundColor: "#00AAAA",
        color: "#FFFFFF"
    },
}));

const Contacts = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.contactsCard}>
            <Grid container justify="center" className={classes.contactsGrid}>
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12}>
                        <Button startIcon={<GitHubIcon fontSize="large" />} className={classes.socialIcon} href="https://github.com/clementf2b" color="primary" aria-label="github">   
                            <Typography variant="subtitle1">Github</Typography>
                        </Button>
                        <Button startIcon={<LinkedInIcon fontSize="large" />} className={classes.socialIcon} href="https://www.linkedin.com/in/clement-ng-0872b3141/" color="primary" aria-label="LinkedIn">
                            <Typography variant="subtitle1">LinkedIn</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}
export default Contacts;