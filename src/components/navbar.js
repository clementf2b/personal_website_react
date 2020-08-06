import React from 'react'
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core'
import {
    Apps,
    ArrowBack,
    AssignmentInd,
    Home,
} from '@material-ui/icons'

const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position = "static" style= {{background:"#222"}}>
                <Toolbar>
                    <IconButton>
                    <ArrowBack style= {{color:"yellow"}}/>
                    </IconButton>
                    <Typography variant="h5" style= {{color:"yellow"}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;