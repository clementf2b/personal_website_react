import React from 'react'
import Navbar from './navbar'
import Header from './header'
import Resume from './resume'
import { makeStyles } from '@material-ui/core/styles';
import ParticlesEffect from './particlesEffect';

import { Box } from '@material-ui/core';
const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.6"
    }
});
const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <ParticlesEffect />
        </div>
    );
}
export default Home;