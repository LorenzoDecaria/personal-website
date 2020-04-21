import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        margin: 0,
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5)
        },
        padding: "150px 0px",
        width: "100%",
    },
    container: {
        display: "flex", 
        alignItems: "flex-start", 
        flexDirection: "column", 
        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(15),
          paddingRight: theme.spacing(15)
        },
    },
    card: {
        backgroundColor: theme.palette.background.default,
    },
    description: {
        order: 0,
        [theme.breakpoints.down('md')]: {
          order: 1,
        },
    },
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        order: 1,
        [theme.breakpoints.down('md')]: {
            order: 0,
          },
    },
    skills1: {
        order: 2,
        [theme.breakpoints.down('md')]: {
            order: 2,
          },
    },
    skills2: {
        order: 3,
        [theme.breakpoints.down('md')]: {
            order: 3,
          },
    },
    large: {
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2),
            width: "60%"
        },
        width: "100%",
        height: "auto",
      },
});


class Education extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Container id="about_me" component="section" maxWidth="fixed" className={classes.root}>
                <Container maxWidth="lg" className={classes.container}>

                </Container>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Education);
