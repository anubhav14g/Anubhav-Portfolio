import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProfileCard(props){
    const classes = useStyles();

  return (
      <Card className="{classes.root} card-animation">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.companyname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.companydesc}
          </Typography>
          <p className="display-block"></p>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Employment Type: `+props.employmenttype}
          </Typography>
          <p className="display-block"></p>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Worked As: `+props.workedas}
          </Typography>
          <p className="display-block"></p>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Joining Date: `+props.joiningdate}
          </Typography>
          <p className="display-block"></p>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Achievements/Tasks: `}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`- `+props.task1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`- `+props.task2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`- `+props.task3}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProfileCard;