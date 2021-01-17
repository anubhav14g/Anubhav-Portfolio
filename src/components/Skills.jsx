import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

function Skills(){
    const classes = useStyles();
    return (
        <div className="{classes.root} profile-margin skills-background">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1 className="skills-info">Skills: </h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul className="skills-list">
            <h1><li>C++</li></h1>
            <h1><li>Data Structures</li></h1>
            <h1><li>Algorithms</li></h1>
            <h1><li>React.js</li></h1>
            <h1><li>Node.js</li></h1>
            <h1><li>Passport.js</li></h1>
            <h1><li>Mongodb</li></h1>
            <h1><li>HTML</li></h1>
            <h1><li>CSS</li></h1>
            <h1><li>Javascript</li></h1>
          </ul>
        </Grid>
      </Grid>
    </div>
    );
}

export default Skills;