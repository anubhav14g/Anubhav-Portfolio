import React from "react";
import Grid from '@material-ui/core/Grid';
import ExperienceCard from "./ExperienceCard.jsx";

function Experiences(){
    return (
        <div className="{classes.root} experience-section-margin profile-section-background">
      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
          <ExperienceCard imageSrc={process.env.PUBLIC_URL+"/static/images/infoware.jpg"} companyname="Infowareindia" companydesc="Trusted global digital software development consultancy that designs &
builds software for the world’s best businesses." employmenttype="Internship" workedas="Nodejs/Backend Developer" joiningdate="Jan 2021-June 2021" task1="Worked on 2 major projects and 1-2 minor projects" task2="Designed the database and structure of projects" task3="Worked on SQL Database"/>
        </Grid>
        <Grid item xs={4} sm={4}>
          <ExperienceCard imageSrc={process.env.PUBLIC_URL+"/static/images/admere.jpg"} companyname="Admere Selvyn Private Ltd" companydesc="A start-up which is looking to expand its business into the world of Music
& organsizes online competition for artists." employmenttype="Internship" workedas="Nodejs/Backend Developer" joiningdate="Aug 2020-June 2021" task1="Designed the database and structure of the website from
scratch" task2="Made user dashboard, admin panel and judge panel" task3="Worked on Mongodb Database"/>
        </Grid>
      </Grid>
    </div>
    );
}

export default Experiences;