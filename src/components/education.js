import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Avatar, Box, Paper, List,
    ListItem, ListItemText, ListItemAvatar, Divider,
    Typography,
} from '@material-ui/core';
import Navbar from './navbar';
import {
    Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem,
    TimelineSeparator
} from '@material-ui/lab';

import ParticlesEffect from './particlesEffect';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import WorkIcon from '@material-ui/icons/Work';

import SalesianIcon from '../images/schools/salesian.png';
import ModernCollegeIcon from '../images/schools/modernCollege.png';
import CCCUIcon from '../images/schools/cccu.png';
import HKUSTIcon from '../images/schools/hkust.png';

import chandlerIcon from '../images/jobs/chandlerMacleod.png';
import photobitionIcon from '../images/jobs/photobition.png';
import accordhkIcon from '../images/jobs/accordhk.png';
import premiumsoftIcon from '../images/jobs/premiumsoft.png';

const WhiteTextTypography = withStyles({
    root: {
        color: "rgba(255,255,255,0.8)",
    }
})(Typography);

// CSS Styles
const useStyles = makeStyles(theme => ({
    timelineContainer: {
        display: "block",
    },
    contactsIcon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: "8px",
        paddingBottom: "3px",
        color: "rgba(0,190,190,0.8)",
        borderRadius: "50%"
    },
    educationBox: {
        padding: theme.spacing(5),
    },
    educationHeaderTitle: {
        paddingBottom: theme.spacing(1),
        color: "rgba(0,190,190,0.8)",
    },
    paper: {
        backgroundColor: "#101010",
        padding: '3px 8px',
        opacity: "0.6",
    },
    title: {
        color: "#00BABA"
    },
    dot: {
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    connector: {
        backgroundColor: "rgba(0,190,190,0.5)",
    },

    jobHeaderTitle: {
        paddingTop: theme.spacing(2),
    },
    jobIcon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: "8px",
        paddingBottom: "3px",
        borderRadius: "0%"
    },
    jobSectionContainer: {
        backgroundColor: "#DDDDDD",
        minHeight: "380px",
        width: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(5),
    }, inline: {
        display: 'inline',
    },
    companyAvatar: {
        minWidth: "130px",
        marginLeft: theme.spacing(1),
    },
    jobListItem: {
        disply: "flex",
    },
    periodText: {
        marginLeft: theme.spacing(6),
        width: "20%",
    },
    companyNameText: {
        width: "45%",
    },
}));

const schoolItems = [
    {
        listIcon: SalesianIcon,
        listText: "Salesian English School",
        yearText: "2005 ~ 2010",
        description: "Study the junior High Catholic School"
    },
    {
        listIcon: ModernCollegeIcon,
        listText: "Modern College",
        yearText: "2010 ~ 2012",
        description: "Study at the Senior High School after Hong Kong Certificate of Education Examination"
    },
    {
        listIcon: CCCUIcon,
        listText: "CCCU (AscISD)",
        yearText: "2013 ~ 2015",
        description: "Join the associate degree programmes in Community College of City University"
    },
    {
        listIcon: HKUSTIcon,
        listText: "HKUST (BEng in COMP)",
        yearText: "2015 ~ 2017",
        description: "Do a Computer Science Degree in The Hong Kong University of Science and Technology"
    },
];

const jobItems = [
    {
        companyIcon: chandlerIcon,
        companyName: "Chandler Macleod group (HK) limited",
        period: "07/2012 — 08/2012",
        jobTitle: "Station Assistant",
        duty: ""
    },
    {
        companyIcon: photobitionIcon,
        companyName: "Photobition Hong Kong Limited",
        period: "07/2015 — 09/2015",
        jobTitle: "Production Assistant",
        duty: ""
    },
    {
        companyIcon: accordhkIcon,
        companyName: "Accord HK",
        period: "12/2016 — 02/2016",
        jobTitle: "Junior Mobile Application Developer",
        duty: " - Work in a team to design and develop quality mobile application"
    },
    {
        companyIcon: premiumsoftIcon,
        companyName: "PremiumSoft CyberTech Ltd.",
        period: "06/2017 — now",
        jobTitle: "Software Developer",
        duty: " - Develop and maintain Navicat for Linux and Mac side which is a multi-connection database development tool "
    },
];

const JobList = () => {
    const classes = useStyles()
    return (
        <Box component="header" className={classes.jobSectionContainer}>
            <Typography className={classes.jobHeaderTitle} variant="h4" align="center" gutterBottom>
                <WorkIcon className={classes.jobIcon} />
                    Employment History
            </Typography>
            <List className={classes.root}>
                {
                    jobItems.map(function (lsItem, key, { length }) {
                        return (
                            <Box key={key}>
                                <ListItem key={key} alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar variant="square" className={classes.companyAvatar} src={lsItem.companyIcon} alt={lsItem.companyName} />
                                    </ListItemAvatar>
                                    <ListItemText className={classes.periodText}>
                                        {lsItem.period}</ListItemText>
                                    <ListItemText
                                        className={classes.companyNameText}
                                        primary={lsItem.companyName}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                >
                                                    {lsItem.jobTitle} </Typography>
                                                <span>{lsItem.duty}</span>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                {(key !== length - 1) ? <Divider variant="inset" component="li" /> : null}
                            </Box>
                        )
                    })
                }
            </List>
        </Box>
    )
};

const Education = (props) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:780px)');

    return (
        <>
            <Navbar />
            <ParticlesEffect />
            <Box component="header" className={classes.educationBox}>
                <WhiteTextTypography className={classes.educationHeaderTitle} variant="h4" align="center" gutterBottom>
                    <ImportContactsIcon className={classes.contactsIcon} />
                     Education
                    </WhiteTextTypography>
                <Box component="div" className={classes.timelineContainer}>
                    <Timeline align="alternate">
                        {
                            schoolItems.map(function (lsItem, key, { length }) {
                                return (
                                    <TimelineItem key={key}>
                                        <TimelineSeparator>
                                            <TimelineDot className={classes.dot} color="primary">
                                                <Avatar src={lsItem.listIcon} alt={lsItem.listText} />
                                            </TimelineDot>
                                            {(key !== length - 1) ? <TimelineConnector className={classes.connector} /> : null}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Paper elevation={4} className={classes.paper}>
                                                <Typography className={classes.title} variant="h6" component="h1">{lsItem.listText}</Typography>
                                                <Typography className={classes.title} variant="subtitle1">{lsItem.yearText}</Typography>
                                                {(isMobile) ? <Typography className={classes.title} variant="subtitle2">{lsItem.description}</Typography> : null}
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })
                        }
                    </Timeline>
                </Box>
            </Box>
            <JobList />
        </>
    );
};

export default Education;