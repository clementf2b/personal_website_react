import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar, Box, Card,
    CardActions, CardContent, CardHeader,
    CardMedia, Collapse, Divider, Grid, IconButton,
    Typography,
} from '@material-ui/core';

import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

import Navbar from './navbar';
import ParticlesEffect from './particlesEffect';

import CCCUFypIcon from '../images/projects/cccu_fyp.png';
import ECareIcon from '../images/projects/ecare.png';
import HKUSTFypIcon from '../images/projects/hkust_fyp.png';
import CCCUfypImg from '../images/projects/cccufypImg.png';
import ECareImg from '../images/projects/ecareImg.png';
import FaceTImg from '../images/projects/faceTImg.png';

import MainPage from '../images/projects/faceT/mainPage.png';
import PredictColor from '../images/projects/faceT/predictColor.png';
import Recommedation from '../images/projects/faceT/recommedation.png';
import ApplyResult from '../images/projects/faceT/applyResult.png';
import CompareResult from '../images/projects/faceT/compareResult.png';
import LoginPage from '../images/projects/faceT/loginPage.png';
import ProductDetail1 from '../images/projects/faceT/productDetail1.png';
import ProductDetail2 from '../images/projects/faceT/productDetail2.png';

import Ecare1 from '../images/projects/ecare/ecare1.png';
import Ecare2 from '../images/projects/ecare/ecare2.png';
import Ecare3 from '../images/projects/ecare/ecare3.png';

import Photo1 from '../images/projects/cccufyp/photo1.png';
import Photo2 from '../images/projects/cccufyp/photo2.png';
import Photo3 from '../images/projects/cccufyp/photo3.png';
import Photo4 from '../images/projects/cccufyp/photo4.png';
import Photo5 from '../images/projects/cccufyp/photo5.png';

const useStyles = makeStyles(theme => ({
    projectHeaderTitle: {
        fontSize: "36px",
        paddingTop: theme.spacing(3),
        color: "rgba(20,20,20,0.8)",
    },
    projectIcon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: "8px",
        paddingBottom: "3px",
        color: "rgba(0,0,0,0.8)",
        borderRadius: "50%"
    },
    projectCard: {
        paddingTop: theme.spacing(6), // 16:9
        backgroundColor: "rgba(255,255,255,1)",
    },
    cardRoot: {
        backgroundColor: "rgba(255,255,255)",
        paddingLeft: theme.spacing(32),
        paddingRight: theme.spacing(32),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
        border: "none",
        boxShadow: "none",
        borderRadius: 0,
    },
    cardHeaderTitle: {
        fontSize: "26px"
    },
    cardHeaderSubTitle: {
        fontSize: "22px"
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
    projectDetail: {
        width: "100%",
        height: "100%",
        padding: theme.spacing(2),
    },
    extraImage: {
        width: "100%",
        height: "100%",
        paddingBottom: theme.spacing(2),
    },
    extraImageTitle: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: theme.spacing(2),
        fontWeight: "bold"
    }
}));

const Portfolio = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState([
        {
            id: 0,
            listIcon: HKUSTFypIcon,
            listText: "FaceT",
            image: FaceTImg,
            link: "https://github.com/clementf2b/FaceT",
            subtitle: "HKUST Final Year Project (2017)",
            description: "An aesthetic and easy-to- use mobile app platform for enhancing women’s experience in shopping for cosmetic products",
            detail: "Objective: \n\n  1. To ease users in finding out the cosmetic products which suit them best.\n  2. To help users understand the effects of the makeup products. \n  3. To allow users’ contribution by letting them add new cosmetic products to the database. \n  4. To locate retail stores selling concerned cosmetic products. \n  5. To provide a platform for users to share their views on different cosmetic products.\n  6. To minimize user’s actions for performing tasks",
            expanded: false,
            extraImageList: [{
                image: MainPage,
                title: "Figure 1. Main Page - Select different functions"
            }, {
                image: PredictColor,
                title: "Figure 2. predict for user's skin color tone"
            }, {
                image: Recommedation,
                title: "Figure 3. recommend the suitable product for user"
            }, {
                image: ApplyResult,
                title: "Figure 4. see the effect for the cosmetic products"
            }, {
                image: CompareResult,
                title: "Figure 5. compare the result after the cosmetic products"
            }, {
                image: LoginPage,
                title: "Figure 6. Login Page - can use google or fb login"
            }, {
                image: ProductDetail1,
                title: "Figure 7. see the cosmetic products detail"
            }, {
                image: ProductDetail2,
                title: "Figure 8. rate and comment the cosmetic products"
            }],
        },
        {
            id: 1,
            listIcon: ECareIcon,
            listText: "E-Care",
            image: ECareImg,
            link: "https://github.com/ysoseerius/e_care_new",
            subtitle: "HKUST Mobile Application Design Contest (2016)",
            description: "A platform for simplifying the process of medicine acquisition or appointment",
            detail: "Features: \n\n1. QR code login and account registration \n- There are different type of accounts such as the patients and health care group. \n- Member of health care group will help users to create an account then give QR code for them to scan and login in their own. \n\n2. Appointment management Patients have a booking with health care group before they come to the connected clinic/hospital \n- For the patient without appointment, this application will provide a SMS reminder for them if he is the next one. \n\n3. Data encryption and storing Health care group inputs the records for the patients and stores the encrypted data in the database \n\n4. Courtesy reminder of taking relevant medication \n- The application would provide an alarm for them when time is reached to take the relevant medicine. There would provide a button for the patient to report to the doctor that they have or have not taken that medicine \n\n5. Report system for side effect \nThe patients have the option to report any side effects encountered while taking the medication and rate it as urgent, major or minor discomfort. \n- The health care group gives immediate responses to the patient and give advices to tackle the situation",
            expanded: false,
            extraImageList: [{
                image: Ecare1,
                title: "Figure 1. import the medication report to the doctor"
            }, {
                image: Ecare2,
                title: "Figure 2. clock alarm for take pills"
            }, {
                image: Ecare3,
                title: "Figure 3. report for the allergy sufferer or urgent problem"
            }],
        },
        {
            id: 2,
            listIcon: CCCUFypIcon,
            listText: "耆樂寶",
            image: CCCUfypImg,
            link: "",
            subtitle: "CCCU Final Year Project(2015)",
            description: "A system for handling the photo, video and entertainment",
            detail: "The functions included in the application have four main parts:\n  1. Social networking function focusing on sharing of events photo\n  2. Chat function that may contains in text, image, video and sound recording for script and record.\n  3. Gaming function which train users’ concentration, reaction and mobility\n  4. Video browsing function for user to watch TV episodes and films\n\nElders living in nursing home needs a lot of attentions, since their ability is degenerating by age grew. However, even nursing home have limited human resources, the elders’ family members may not have spare time to visit them face to face. Therefore the project is going provide an interface between elders, wardens and the family of them.\n\nFor elderly side:\n  1. Provide a convenient way to communicate with their family members\n  2. Entertain thought in-built functions like game and video\n  3. Pay attentions on events of the nursing home\n  4. Share photo with other members and comment other photo\n\nFor family side:\n  1. Provide a platform to care about the situation of the elders\n  2. Share daily life with the elders\n\nFor wardens side:\n  1. Train elders easier through the application\n  2. Observe elders ability by the rating of the games\n  3. Reduce workloads and maintain the nursing quality",
            expanded: false,
            extraImageList: [{
                image: Photo3,
                title: "Figure.1 build this app for HKSKH "
            }, {
                image: Photo1,
                title: "Figure.2 Account information"
            }, {
                image: Photo5,
                title: "Figure.3 login page"
            }, {
                image: Photo2,
                title: "Figure.4 Scan QRCode login"
            }, {
                image: Photo4,
                title: "Figure.5 upload photo to database"
            }],
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
            <Typography className={classes.projectHeaderTitle} variant="h4" align="center" gutterBottom>
                <ImportantDevicesIcon className={classes.projectIcon} />
                    Projects
            </Typography>
            <React.Fragment>
                <Grid container spacing={0}>
                    {
                        projects.map((lsItem) => {
                            return (
                                <Grid item xs={12} lg={12} md={12} key={lsItem.id}>
                                    <Card className={classes.cardRoot} >
                                        <CardHeader
                                            classes={{
                                                title: classes.cardHeaderTitle,

                                            }}
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
                                            <Typography variant="h6" component="p">
                                                {lsItem.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="github" onClick={() => window.open(lsItem.link)} >
                                                <GitHubIcon fontSize="large" />
                                            </IconButton>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: lsItem.expanded
                                                })}
                                                onClick={() => handleExpandClick(lsItem.id)}
                                                aria-expanded={lsItem.expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon fontSize="large" />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={lsItem.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography variant="h4" component="span">Screenshots:</Typography>
                                                <Box component="div">
                                                    <Grid container spacing={4}>
                                                        {
                                                            lsItem.extraImageList.map((extraImage, key) => {
                                                                return (
                                                                    <Grid className={classes.projectDetail} item xs={12} lg={12} md={12} key={key}>
                                                                        <Typography className={classes.extraImageTitle} variant="h6" component="span">{extraImage.title}</Typography>
                                                                        <Avatar variant="square" className={classes.extraImage} src={extraImage.image} alt="Logo" />
                                                                    </Grid>
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                </Box>
                                                <Box component="div" className={classes.detail}>
                                                    {lsItem.detail}
                                                </Box>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    {lsItem.id !== projects.length - 1?(<Divider light />):null}
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