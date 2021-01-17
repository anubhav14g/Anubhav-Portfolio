import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from "./Profile-Image.jsx";
import AboutText from "./About-Text.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function About(){
    const classes = useStyles();
    return (
        <div className="{classes.root} profile-margin about-background">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <AboutText/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image/>
        </Grid>
      </Grid>
    </div>
    );
}

export default About;