import React, { Component } from 'react'
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    margin: 0,
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    },
    container: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(15),
        paddingRight: theme.spacing(15)
      },
    },
    padding: "150px 0px",
  },
  button: {
    "&:hover": {
        border: "2px solid"
    },
    padding: '20px 40px',
    border: "2px solid",
    fontSize: 14
}
});


class GetInTouch extends Component {
  render() {
    const { classes } = this.props;

    const index = 3;

    return (
      <Container id="get_in_touch" component="section" maxWidth="fixed" className={classes.root}>
        <Container maxWidth="lg" className={classes.container} style={{display: "flex", flexDirection: "column"}}>

          <Container style={{display: "flex", flexDirection: "row"}}>
            <Typography variant="h5" color="primary" noWrap display="block" style={{ letterSpacing: 4 }}>{(index.toString(2).length === 1 ? '00' + index.toString(2) : '0' + index.toString(2)) + '.'}</Typography>
            <Typography variant="h4" color="textPrimary" noWrap display="block" style={{ marginLeft: 20, letterSpacing: 4 }}><b>Get in touch</b></Typography>
          </Container>

          <Typography variant="body1" color="textPrimary" style={{ letterSpacing: 4 }}>I'm currently not seeking any job opportunities but if you want to inbox me for anything like help on a project, suggestions or simply to network together that is much appreciated! :)</Typography>
          <Button variant="outlined" className={classes.button} color="primary" href="mailto:lorenzo.decaria@gmail.com">Email me</Button>

        </Container>
      </Container>
    )
  }
}

export default withStyles(useStyles)(GetInTouch);
