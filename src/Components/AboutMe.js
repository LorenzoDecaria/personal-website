import React, { Component } from 'react'
import { Typography, Card, CardContent, Container, Grid , List, ListItem, ListItemIcon, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';



const useStyles = theme => ({
    root: {
        margin: 0,
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
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    large: {
        width: "100%",
        height: "auto",
      },
});


class AboutMe extends Component {
    render() {
        const { classes } = this.props;

        const index = 0;

        return (
            <Container id="about_me" component="section" maxWidth="fixed" className={classes.root}>
                <Container maxWidth="lg" className={classes.container}>
                    <Card className={classes.card} raised>
                        <CardContent style={{padding: 50}}>
                            <Grid container justify="flex-start" spacing={6} >

                                <Grid item xs={8} key="about_me"> 
                                    <Typography variant="h5" color="primary" noWrap display="inline" style={{letterSpacing: 4}}>{(index.toString(2).length === 1 ? '00' + index.toString(2) : '0' + index.toString(2)) + '.'}</Typography>
                                        <Typography variant="h4" color="textPrimary" noWrap display="inline" style={{marginLeft: 20, letterSpacing: 4}}><b>About Me</b></Typography>
                                        <Typography variant="body1" color="textPrimary" style={{letterSpacing: 2, margin: "40px 0px"}}>Hi! I'm a Software Engineer based in Seattle (WA) who likes to build applications for any kind of environment. I produce exceptional high code using the most sophisticated design patterns, in order to make my applications fast, efficient and easily scalable.
                                        <br />
                                        <br />
                                        I graduated in Italy at the Università degli Studi di Pisa where I got a Software Engineering degree and an Automation Engineering Master's degree.
                                        <br />
                                        <br />
                                        I started my career in 2006 creating real-time embedded applications right after graduation, then moved to Mobile development and now I'm approaching Full Stack Web Development. During these years I've been working for top notch companies where I was part of incredible teams who built innovating projects on a daily basis. These are the technologies I'm most proficient with:
                                    </Typography>
                                </Grid>

                                <Grid item xs={4} className={classes.avatarContainer} key="avatar">
                                    <Avatar alt="Lorenzo Decaria" src="/img/lorenzo.jpg" className={classes.large} />
                                </Grid>

                                <Grid item key="skills1">
                                    <List>
                                        {["C / C++", "Objective", "JavaScript", "HTML / CSS"].map( (item, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <ListItemIcon>
                                                        <CodeIcon  color="primary" />
                                                    </ListItemIcon>
                                                    {item}
                                                </ListItem>
                                            )})}
                                    </List> 
                                </Grid>

                                <Grid item key="skills2">
                                    <List>
                                        {["iOS / tvOS", "NodeJS / React", "Express", "MongoDB / Mongoose"].map( (item, index) => {
                                            return (
                                                <ListItem  key={index}>
                                                    <ListItemIcon>
                                                        <CodeIcon color="primary"/>
                                                    </ListItemIcon>
                                                    {item}
                                                </ListItem>
                                            )})}
                                    </List> 
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Container>
        )
    }
}

export default withStyles(useStyles)(AboutMe);
