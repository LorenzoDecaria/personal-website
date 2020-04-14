import React, { Component } from 'react'
import { Container} from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    root: {
        background: "transparent",
        margin: 0,
        padding: 0,
        display: "flex",
        position: "fixed",
        bottom: "10%",
        width: "250px",
        height: "100hv",
        left: theme.spacing(6),
        [theme.breakpoints.down('md')]: {
          display: "none"
        },
      },
});


class SideMenu extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Stepper orientation="vertical" activeStep={2} style={{background: "transparent", height: "100%"}}>
                    <Step key="1" >
                        <StepLabel >"1 - Test"</StepLabel>
                    </Step>
                    <Step key="2" >
                        <StepLabel >"2 - Test"</StepLabel>
                    </Step>
                    <Step key="3" >
                        <StepLabel >"3 - Test"</StepLabel>
                    </Step>
                    <Step key="4" >
                        <StepLabel >"4 - Test"</StepLabel>
                    </Step>
                </Stepper>
            </Container>
        )
    }
}

export default withStyles(useStyles)(SideMenu);
