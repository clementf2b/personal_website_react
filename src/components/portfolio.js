import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar, Box, Button, Card,
    CardActions, CardActionArea, CardContent, CardHeader,
    CardMedia, Collapse, Grid, IconButton,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';

import Navbar from './navbar';
import ParticlesEffect from './particlesEffect';

import CCCUFypIcon from '../images/projects/cccu_fyp.png';
import ECareIcon from '../images/projects/ecare.png';
import HKUSTFypIcon from '../images/projects/hkust_fyp.png';
import CCCUfypImg from '../images/projects/cccufypImg.png';
import ECareImg from '../images/projects/ecareImg.png';
import FaceTImg from '../images/projects/faceTImg.png';

import FinalReport1 from '../images/projects/faceT/Final Report.png';
import MainPage from '../images/projects/faceT/MainPage.png';
// Final Report.png
// MainPage.png
// Final Report2.png
// Final Report3.png
// LoginPage.png
// Final Report4.png
// Final Report5.png
// Final Report6.png
const useStyles = makeStyles(theme => ({
    projectCard: {
        paddingTop: theme.spacing(8), // 16:9
        backgroundColor: "rgba(210,210,210,0.5)"
    },
    root: {
        backgroundColor: "rgba(255,255,255,0.7)",
        margin: theme.spacing(3),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    detail: {
        whiteSpace: "pre-wrap",
        fontSize: "16px"
    },
    extraImage: {
        width: "100%",
        height: "100%",
    }
}));

const Portfolio = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState([
        {
            id: 0,
            listIcon: CCCUFypIcon,
            listText: "耆樂寶",
            image: CCCUfypImg,
            link: "",
            subtitle: "CCCU Final Year Project",
            description: "A system for handling the photo, video and entertainment",
            detail: "",
            expanded: false,
            extraImage: [

            ]
        },
        {
            id: 1,
            listIcon: ECareIcon,
            listText: "E-Care",
            image: ECareImg,
            link: "https://github.com/ysoseerius/e_care_new",
            subtitle: "HKUST Mobile Application Design Contest",
            description: "A platform for simplifying the process of medicine acquisition or appointment",
            detail: "Features: \n\n1. QR code login and account registration \n- There are different type of accounts such as the patients and health care group. \n- Member of health care group will help users to create an account then give QR code for them to scan and login in their own. \n\n2. Appointment management Patients have a booking with health care group before they come to the connected clinic/hospital \n- For the patient without appointment, this application will provide a SMS reminder for them if he is the next one. \n\n3. Data encryption and storing Health care group inputs the records for the patients and stores the encrypted data in the database \n\n4. Courtesy reminder of taking relevant medication \n- The application would provide an alarm for them when time is reached to take the relevant medicine. There would provide a button for the patient to report to the doctor that they have or have not taken that medicine \n\n5. Report system for side effect \nThe patients have the option to report any side effects encountered while taking the medication and rate it as urgent, major or minor discomfort. \n- The health care group gives immediate responses to the patient and give advices to tackle the situation",
            expanded: false,
            extraImage: [

            ]
        },
        {
            id: 2,
            listIcon: HKUSTFypIcon,
            listText: "FaceT",
            image: FaceTImg,
            link: "https://github.com/clementf2b/FaceT",
            subtitle: "HKUST Final Year Project",
            description: "An aesthetic and easy-to- use mobile app platform for enhancing women’s experience in shopping for cosmetic products",
            detail: "",
            expanded: false,
            extraImage: [
                FinalReport1, MainPage
            ],
        },
    ]);

    const handleExpandClick = (key) => {
        let newProjects = [...projects]; // copying the old datas array
        newProjects[key].expanded = !newProjects[key].expanded;
        setProjects(newProjects)
    };

    return (
        <Box component="div" className={classes.projectCard}>
            <Navbar />
            <ParticlesEffect />
            <React.Fragment>
                <Grid container spacing={0}>
                    {
                        projects.map((lsItem) => {
                            return (
                                <Grid item xs={12} lg={6} md={6} key={lsItem.id}>
                                    <Card className={classes.root} >
                                        <CardHeader
                                            avatar={
                                                <Avatar src={lsItem.listIcon} />
                                            }
                                            title={lsItem.listText}
                                            subheader={lsItem.subtitle} />
                                        <CardMedia
                                            className={classes.media}
                                            image={lsItem.image}
                                            title={lsItem.listText} />
                                        <CardContent>
                                            <Typography variant="h6" color="textSecondary" component="p">
                                                {lsItem.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="github" onClick={() => window.open(lsItem.link)} >
                                                <GitHubIcon />
                                            </IconButton>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: lsItem.expanded
                                                })}
                                                onClick={() => handleExpandClick(lsItem.id)}
                                                aria-expanded={lsItem.expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={lsItem.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Grid container spacing={3}>
                                                    {
                                                        lsItem.extraImage.map((image) => {
                                                            return (
                                                                <Grid item xs={12} lg={4} md={4}>
                                                                    <Avatar variant="square" className={classes.extraImage} src={image} alt="Logo" />
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                                                </Grid>
                                                <Box component="div" className={classes.detail}>
                                                    {lsItem.detail}
                                                </Box>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </React.Fragment>
        </Box >
    );
}

export default Portfolio;