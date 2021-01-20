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

export default function CommentCard(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} >
        <Card className={classes.root}>
          <CardContent style={{display:'flex',flexDirection:'column',}} > 
 
              <Typography variant="p" component="p">
              <p dangerouslySetInnerHTML={{__html: props.text }} /> 
              </Typography> 
                <Typography variant="p" component="p">
                  {props.author} | {props.created_at} 
                </Typography>  
              
          </CardContent> 
        </Card>
      </Grid>
    </Grid>
  );
}
