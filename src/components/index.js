import React from 'react'
import Navbar from './navbar'
import Header from './header'
// import { makeStyles } from '@material-ui/core/styles';
import ParticlesEffect from './particlesEffect';

import { Box } from '@material-ui/core';
// const useStyles = makeStyles({

// });
const Home = () => {
    // const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <ParticlesEffect />
        </div>
    );
}
export default Home;