import React from "react";
import Grid from '@material-ui/core/Grid';
import Image from "./Profile-Image.jsx";
import AboutText from "./About-Text.jsx";

function About(){
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