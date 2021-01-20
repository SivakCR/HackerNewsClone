import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
     padding:'2px',
     margin:'2px',
  },
  bullet: {
    display: 'inline-block',
     transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
     marginLeft:30
  },
  under:{
    display:'flex'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} >
        <Card className={classes.root}>
          <CardContent> 

            <div style={{display:'flex'}} >
              <Typography variant="h6" component="h5">
              <Link  style={{'text-decoration':'none',color:'black'}}  to={'/heroes/' + props.id} >
                {props.title}
              </Link>
              </Typography>
              <Typography variant="h6" className={classes.pos} color="textSecondary">
                <a href={props.url}>{props.url}</a>
              </Typography>
            </div>

            <Typography className={classes.under} variant="body2" component="p">
              {props.points} points | {props.author} | {Date(Date.parse(props.created_at))  } | {props.num_comments} comments 
            </Typography>

          </CardContent> 
        </Card>
      </Grid>
    </Grid>
  );
}
