import React from "react";
import Grid from '@material-ui/core/Grid';

function Hobbies(){
    return (
        <div className="{classes.root} profile-margin hobbies-background">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1 className="hobbies-info">
          <div class="skills-info-stage">
              <div class="skills-info-wrapper">
                  <div class="skills-info-slash"></div>
                  <div class="skills-info-sides">
                      <div class="skills-info-side"></div>
                      <div class="skills-info-side"></div>
                      <div class="skills-info-side"></div>
                      <div class="skills-info-side"></div>
                  </div>
                  <div class="skills-info-text">
                      <div class="skills-info-text--backing">Hobbies</div>
                      <div class="skills-info-text--left">
                          <div class="skills-info-inner">Hobbies</div>
                      </div>
                      <div class="skills-info-text--right">
                          <div class="skills-info-inner">Hobbies</div>
                      </div>
                  </div>
              </div>
          </div>
          </h1>
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