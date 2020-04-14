import React, { Component } from 'react'
import { Typography, Container, Tab, Tabs, Box, Grid , List, ListItem, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import Particles from 'react-particles-js';
// import particle_config from './particle_config'
import CodeIcon from '@material-ui/icons/Code';


const useStyles = theme => ({
    root: {
        margin: 0,
        padding: "150px 0px",
        width: "100%",
        height: "1000px",
        // backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('../img/desk.jpeg')",
        // backgroundRepeat:"no-repeat",
        // backgroundSize: "cover",
    },
    mainContainer: {
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: "500px",
    },
    tab: {
        maxWidth: "100%",
    },
    tabLabel: {
        alignItems: "flex-end",
        paddingRight: theme.spacing(3),
        textAlign: "right",
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        {...other}
        style={{maxWidth: "700px"}}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

class Experience extends Component {

    state = {
        selectedItem: 0
    }

    handleChange = (event, newValue) => {
        this.setState({
            selectedItem: newValue
        })
      };

    render() {
        const { classes } = this.props;

        return (
            <Container id="experience" component="section" maxWidth="fixed" className={classes.root}>
                <Container className={classes.mainContainer}>
                    <Tabs orientation="vertical" value={this.state.selectedItem} indicatorColor="primary" textColor="primary" onChange={this.handleChange} className={classes.tabs}>
                        <Tab label="Globant LLC" classes={{root: classes.tab, wrapper: classes.tabLabel}}/>
                        <Tab label="Globant Uruguay" classes={{root: classes.tab, wrapper: classes.tabLabel}}/>
                        <Tab label="Freelance Consultant" classes={{root: classes.tab, wrapper: classes.tabLabel}}/>
                        <Tab label="Magneti Marelli s.r.l." classes={{root: classes.tab, wrapper: classes.tabLabel}}/>
                        <Tab label="Altran" classes={{root: classes.tab, wrapper: classes.tabLabel}}/>
                    </Tabs>

                    <TabPanel value={this.state.selectedItem} index={0}>
                        <Typography variant="h6"><b>Mobile Architect</b></Typography>
                        <Typography variant="body2">July 2015 - present
                            <Grid item xs={10}>
                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Write elegant, performant and clean code for iOS and tvOS projects at Disney, Hulu and HBO.
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                    </ListItem>

                                </List> 
                            </Grid>                        
                        </Typography>
                    </TabPanel>

                    <TabPanel value={this.state.selectedItem} index={1}>
                        <Typography variant="h6"><b>Mobile Architect</b></Typography>
                        <Typography variant="body2">September 2012 - July 2015
                            <Grid item xs={10}>
                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Write elegant, performant and clean code for iOS applications; my main projects were Apartments.com, KONAMI, JPMorgan.
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                    </ListItem>

                                </List> 
                            </Grid>                        
                        </Typography>
                    </TabPanel>

                    <TabPanel value={this.state.selectedItem} index={2}>
                        <Typography variant="h6"><b>Mobile Architect</b></Typography>
                        <Typography variant="body2">September 2012 - July 2015
                            <Grid item xs={10}>
                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Write elegant, performant and clean code for iOS applications; my main projects were Apartments.com, KONAMI, JPMorgan.
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                    </ListItem>

                                </List> 
                            </Grid>                        
                        </Typography>
                    </TabPanel>

                    <TabPanel value={this.state.selectedItem} index={3}>
                        <Typography variant="h6"><b>Mobile Architect</b></Typography>
                        <Typography variant="body2">September 2012 - July 2015
                            <Grid item xs={10}>
                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Write elegant, performant and clean code for iOS applications; my main projects were Apartments.com, KONAMI, JPMorgan.
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                    </ListItem>

                                </List> 
                            </Grid>                        
                        </Typography>
                    </TabPanel>

                    <TabPanel value={this.state.selectedItem} index={4}>
                        <Typography variant="h6"><b>Mobile Architect</b></Typography>
                        <Typography variant="body2">September 2012 - July 2015
                            <Grid item xs={10}>
                                <List>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Write elegant, performant and clean code for iOS applications; my main projects were Apartments.com, KONAMI, JPMorgan.
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <CodeIcon color="primary" />
                                        </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                    </ListItem>

                                </List> 
                            </Grid>                        
                        </Typography>
                    </TabPanel>


                </Container>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Experience);
