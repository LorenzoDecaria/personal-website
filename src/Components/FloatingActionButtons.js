import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton }from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  },
  vertical: {
    display: "flex",
    flexDirection: "column"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    padding: 0,
    margin: theme.spacing(2),
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.vertical}>
        <IconButton color="primary" aria-label="add" className={classes.button}>
          <GitHubIcon  fontSize="medium"/>
        </IconButton>
        <IconButton color="primary" aria-label="add" className={classes.button}>
          <LinkedinIcon  fontSize="medium"/>
        </IconButton>
        <IconButton color="primary" aria-label="add" className={classes.button}>
          <InstagramIcon  fontSize="medium"/>
        </IconButton>
        <IconButton color="primary" aria-label="add" className={classes.button}>
          <TwitterIcon  fontSize="medium"/>
        </IconButton>
      </div>
    </div>
  );
}