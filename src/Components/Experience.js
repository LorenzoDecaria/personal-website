import React, { Component } from 'react'
import { Typography, Container, Tab, Tabs, Box, Grid, List, ListItem, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import Particles from 'react-particles-js';
// import particle_config from './particle_config'
import CodeIcon from '@material-ui/icons/Code';


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
  titleContainer: {
    paddingBottom: theme.spacing(12)
  },
  mainContainer: {
    display: 'flex',
    justifyContent: "flex-end"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    maxWidth: "100%",
    fontSize: "16px",
    padding: "18px 6px"
  },
  tabLabel: {
    alignItems: "flex-end",
    paddingRight: theme.spacing(1),
    textAlign: "right",
  },
  titleLabel: {
    padding: "0px 0px 12px 0px"
  },
  subtitleLabel: {
    padding: "0px 0px 24px 0px"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ maxWidth: "700px", padding: 0 }}
    >
      {value === index && <Box p={3} style={{ padding: "0px 0px 0px 60px" }}>{children}</Box>}
    </Typography>
  );
}

class Experience extends Component {

  state = {
    selectedItem: 0
  };

  handleChange = (event, newValue) => {
    this.setState({
      selectedItem: newValue
    })
  };

  render() {
    const { classes } = this.props;
    const index = 1;

    return (
      <Container id="experience" component="section" maxWidth="fixed" className={classes.root}>
        <Container className={classes.titleContainer}>

          <Grid container xs={11} justify="flex-end">
            <Grid item>
              <Typography variant="h5" color="primary" noWrap display="inline" style={{ letterSpacing: 4 }}>{(index.toString(2).length === 1 ? '00' + index.toString(2) : '0' + index.toString(2)) + '.'}</Typography>
              <Typography variant="h4" color="textPrimary" noWrap display="inline" style={{ marginLeft: 20, letterSpacing: 4 }}><b>My Experience</b></Typography>
            </Grid>
          </Grid>

        </Container>
        <Container className={classes.mainContainer}>
          <Tabs orientation="vertical" value={this.state.selectedItem} indicatorColor="primary" textColor="primary" onChange={this.handleChange} className={classes.tabs}>
            <Tab label="Globant LLC" classes={{ root: classes.tab, wrapper: classes.tabLabel }} />
            <Tab label="Globant Uruguay" classes={{ root: classes.tab, wrapper: classes.tabLabel }} />
            <Tab label="Freelance Consultant" classes={{ root: classes.tab, wrapper: classes.tabLabel }} />
            <Tab label="Magneti Marelli s.r.l." classes={{ root: classes.tab, wrapper: classes.tabLabel }} />
            <Tab label="Altran" classes={{ root: classes.tab, wrapper: classes.tabLabel }} />
          </Tabs>

          <TabPanel value={this.state.selectedItem} index={0}>
            <Typography variant="h6" className={classes.titleLabel}><b>Mobile Architect</b></Typography>
            <Typography variant="body2" className={classes.subtitleLabel}>July 2015 - present</Typography>
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
                  </ListItemIcon>Objective-C / SWIFT and a lot of different Frameworks for Apple applications.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>SCRUM / Agile, communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.
                </ListItem>

              </List>
            </Grid>

          </TabPanel>

          <TabPanel value={this.state.selectedItem} index={1}>
            <Typography variant="h6" className={classes.titleLabel}><b>Mobile Architect</b></Typography>
            <Typography variant="body2" className={classes.subtitleLabel}>September 2012 - July 2015</Typography>
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
                  </ListItemIcon>Objective-C and a lot of different Frameworks for Apple applications.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>SCRUM / Agile, interfacing with clients on a weekly basis providing technological expertise.
                </ListItem>

              </List>
            </Grid>
          </TabPanel>

          <TabPanel value={this.state.selectedItem} index={2}>
            <Typography variant="h6" className={classes.titleLabel}><b>Freelancer</b></Typography>
            <Typography variant="body2" className={classes.subtitleLabel}>April 2011 - September 2012</Typography>
            <Grid item xs={10}>
              <List>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Develop high quality code for clients' projects, ranging from Social Medias, Medical and Media applications.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Objective-C and some PHP for database applications.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Interfacing with designers, product managers and clients on a daily basis to plan, design and track projects.
                </ListItem>

              </List>
            </Grid>
          </TabPanel>

          <TabPanel value={this.state.selectedItem} index={3}>
            <Typography variant="h6" className={classes.titleLabel}><b>Product Architect</b></Typography>
            <Typography variant="body2" className={classes.subtitleLabel}>June 2008 - April 2011</Typography>
            <Grid item xs={10}>
              <List>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Product Architect for Instruments Panel Clusters; my clients were Ferrari and Maserati.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>C / C++ and real-time embedded operative systems. Leading the technical development of the entire product (Software, Hardware and Mechanics).
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Interfacing with clients' design teams almost daily to gather product specifications and project planning. Coordinating Software component outsourcing with vendors.
                </ListItem>

              </List>
            </Grid>
          </TabPanel>

          <TabPanel value={this.state.selectedItem} index={4}>
            <Typography variant="h6" className={classes.titleLabel}><b>Software Engineer</b></Typography>
            <Typography variant="body2" className={classes.subtitleLabel}>March 2006 - June 2008</Typography>
            <Grid item xs={10}>
              <List>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Produce excellent quality code for embedded real-time systems. Worked on Alstom Ferroviaria and Whirlpool projects.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Matlab / Simulink, C / C++ running on real-time embedded operative systems.
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <CodeIcon color="primary" />
                  </ListItemIcon>Interfacing with clients on a daily basis, working side by side on embedded systems.
                </ListItem>

              </List>
            </Grid>
          </TabPanel>

        </Container>
      </Container>
    )
  }
}

export default withStyles(useStyles)(Experience);
