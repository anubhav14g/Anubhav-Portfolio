import React from "react";
import Grid from '@material-ui/core/Grid';
import ProjectCard from "./Project-Card.jsx";

function Projects(){
    return (
        <div className="{classes.root} experience-section-margin profile-section-background">
      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
          <ProjectCard  redirectLink="https://anubhavg-step.netlify.app/" projectname="STEP (Student Teacher Exam Portal)" desc1="1. A MERN stack Project developed for students & teachers"
              desc2="2. It has one unique feature which is Queryflow where students can ask their doubts and get their solution" 
              projectLink="https://anubhavg-step.netlify.app/"
          />
        </Grid>
        <Grid item xs={4} sm={4}>
        <ProjectCard  redirectLink="https://anubhavg-portfolio.netlify.app/" projectname="My Portfolio" desc1="1. A React based app" desc2="2. Through this, one can know about me in easy way"
            projectLink="https://anubhavg-portfolio.netlify.app/"
        />
        </Grid>
      </Grid>
    </div>
    );
}

export default Projects;