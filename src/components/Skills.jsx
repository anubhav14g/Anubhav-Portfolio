import React from "react";
import Grid from '@material-ui/core/Grid';

function Skills(){
    return (
        <div className="{classes.root} profile-margin skills-background">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h1 className="skills-info">
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
                      <div class="skills-info-text--backing">Skills</div>
                      <div class="skills-info-text--left">
                          <div class="skills-info-inner">Skills</div>
                      </div>
                      <div class="skills-info-text--right">
                          <div class="skills-info-inner">Skills</div>
                      </div>
                  </div>
              </div>
          </div>
          </h1>
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