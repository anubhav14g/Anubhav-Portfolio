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
    <a href={props.redirectLink} className="anchor-in-profile" target="blank">
      <Card className="{classes.root} card-animation">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
}

export default ProfileCard;