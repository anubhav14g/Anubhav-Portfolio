import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AllOutIcon from '@material-ui/icons/AllOut';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(){
    const classes = useStyles();
    return (
        <div className="{classes.root}">
        <AppBar position="absolute">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <AllOutIcon fontSize="large"/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                My Portfolio
            </Typography>
            <Button color="inherit" size="large"><Link to="/" className="link-style">About</Link></Button>
            <Button color="inherit" size="large"><Link to="/skills" className="link-style">Skills</Link></Button>
            <Button color="inherit" size="large"><Link to="/hobbies" className="link-style">Hobbies</Link></Button>
            <Button color="inherit" size="large"><Link to="/profile" className="link-style">Profile</Link></Button>
            <Button color="inherit" size="large"><Link to="/experiences" className="link-style">Experiences</Link></Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Navbar;