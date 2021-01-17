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

function Hobbies(){
    const classes = useStyles();
    return (
        <div className="{classes.root} profile-margin hobbies-background">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1 className="hobbies-info">Hobbies: </h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul type="square" className="hobbies-list">
            <li><h2>Playing Badminton</h2></li>
            <li><h2>Exploring Web</h2></li>
          </ul>
        </Grid>
      </Grid>
    </div>
    );
}

export default Hobbies;