import React from 'react';
import { Container, Typography, Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import Particles from 'react-particles-js';
// import particle_config from './particle_config'
import AnimatableText from './AnimatableText'



const useStyles = theme => ({
    mainContainer: {
        minHeight: '100vh',
        backgroundImage: "linear-gradient(to bottom, rgba(34, 38, 41, 0.9), rgba(34, 38, 41, 0.8)), url('../img/desk.jpeg')",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",

    },
    container: {
        minHeight: '100vh',  
        display: "flex", 
        alignItems: "flex-start", 
        flexDirection: "column", 
        justifyContent: "center",
        [theme.breakpoints.up('md')]: {
          paddingLeft: theme.spacing(15),
          paddingRight: theme.spacing(15)
        },
    },
    greetings: {
        marginBottom: theme.spacing(3),
        letterSpacing: 4,
    },
    name: {
        marginBottom: theme.spacing(1), 
        letterSpacing: 4,
    },
    subtitle: {
        marginBottom: theme.spacing(1), 
        letterSpacing: 4,
    },
    presentation: {
        maxWidth: "500px",
        letterSpacing: 4,
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(10), 
            marginBottom: theme.spacing(10), 
          },
          [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(6), 
            marginBottom: theme.spacing(6), 
          },
    },
    buttonContainer: {
        padding: 0,
        margin: 0,
        display: "flex",
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



class Hero extends React.Component {
    render() {
         const { classes } = this.props;
         
        return (
            <Box boxShadow={10}>
                <Container component="section" maxWidth="fixed" className={classes.mainContainer}>
                {/* <Particles style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -100
                    }}
                    params={particle_config}>
                </Particles> */}
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant='h6'className={classes.greetings} color="primary">Hi, my name is</Typography>
                    <Typography variant='h1'className={classes.name} color="textPrimary"><b><AnimatableText text="Lorenzo Decaria"></AnimatableText></b></Typography>
                    {/* <Typography variant='h2'className={classes.name} color="textPrimary"><b>Lorenzo Decaria</b></Typography> */}
                    <Typography variant='h3'className={classes.subtitle} color="textSecondary"><b>I program things that can run code</b></Typography>
                    <Typography variant='body1' className={classes.presentation} color="textSecondary">I'm a Software Engineer based in Seattle (WA) who likes to create high quality embedded, mobile and web applications.</Typography>
                    <Container className={classes.buttonContainer}>
                        <Button variant="outlined" className={classes.button} color="primary" href="mailto:lorenzo.decaria@gmail.com">Get in touch</Button>
                    </Container>
                </Container>
                </Container>
            </Box>
        )
    }
} 
 
 export default withStyles(useStyles)(Hero);
