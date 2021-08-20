import React from "react";
import Grid from '@material-ui/core/Grid';
import ProfileCard from "./Card.jsx";

function Profile(){
    return (
        <div className="{classes.root} profile-section-margin profile-section-background">
      <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
          <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/github.png"} name="Github" desc="anubhav14g" redirectLink="https://github.com/anubhav14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/codechef.jpg"} name="Codechef" desc="ganubhav" redirectLink="https://www.codechef.com/users/ganubhav"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/leetcode.jpg"} name="Leetcode" desc="dark_storm14" redirectLink="https://leetcode.com/dark_storm14"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/codeforces.png"} name="Codeforces" desc="anubhav1408sks" redirectLink="https://codeforces.com/profile/anubhav1408sks"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/linkedin.png"} name="Linkedin" desc="" redirectLink="https://www.linkedin.com/in/anubhav-goyal-108a85194/"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/hackerank.jpg"} name="HackerRank" desc="anubhavg_7" redirectLink="https://www.hackerrank.com/anubhavg_7"/>
        </Grid>
      </Grid>
    </div>
    );
}

export default Profile;