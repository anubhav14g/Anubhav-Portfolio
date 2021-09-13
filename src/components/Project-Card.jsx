import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function ProjectCard(props){

  return (
    <a href={props.redirectLink} className="anchor-in-profile" target="blank">
      <Card className="{classes.root} card-animation">
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          <h3>{props.projectname}</h3>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          <h4>Desc: </h4>
          {props.desc1}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          {props.desc2}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          <h4>Project Link: </h4>
          {props.projectLink}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}

export default ProjectCard;