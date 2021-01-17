import React from "react";
import Grid from '@material-ui/core/Grid';

function Hobbies(){
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