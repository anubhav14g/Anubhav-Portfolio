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
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/codechef.jpg"} name="Codechef" desc="anubhav_14g" redirectLink="https://www.codechef.com/users/anubhav_14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/leetcode.jpg"} name="Leetcode" desc="anubhav_14g" redirectLink="https://leetcode.com/anubhav_14g"/>
        </Grid>
        <Grid item xs={6} sm={3}>
        <ProfileCard imageSrc={process.env.PUBLIC_URL+"/static/images/codeforces.png"} name="Codeforces" desc="anubhav1408sks" redirectLink="https://codeforces.com/profile/anubhav1408sks"/>
        </Grid>
      </Grid>
    </div>
    );
}

export default Profile;