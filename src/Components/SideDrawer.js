import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
import Menu from './Menu'

const useStyles = theme => ({
    paper: {
      backgroundColor: theme.palette.background.default
    },
});


class SideDrawer extends React.Component {
    render() {
         const { classes } = this.props;
         
         return (
            <div onClick={this.props.closeSideDrawer} >
                <React.Fragment>
                    <Drawer anchor="right" open={this.props.open} classes={classes}>
                        <Menu direction="vertical" />
                    </Drawer>
                </React.Fragment>
            </div>
           );
       }
 } 
 
 
 export default withStyles(useStyles)(SideDrawer);