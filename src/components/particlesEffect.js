import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';

const useStyles = makeStyles({
    particlesCanva: {
        position: "fixed",
        opacity: "0.6"
    }
});
const ParticlesEffect = () => {
    const classes = useStyles();

    return (
        <Particles
            canvasClassName={classes.particlesCanva}
            params={{
                particles: {
                    number: {
                        value: 38,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 3,
                            color: "tomato",
                        },
                    },
                    size: {
                        value: 7,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 10,
                            size_min: 0.1,
                            sync: true
                        }
                    }

                }
            }} />
    );
}
export default ParticlesEffect;