import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Toolbar, AppBar, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu'
import SvgIcon from '@material-ui/core/SvgIcon';


const useStyles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent",
    },
    appBar: {
      paddingTop: theme.spacing(2),
      backgroundColor: "transparent",
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
    toolbar: {
      backgroundColor: "transparent",
    },
    menu: {

    },
    logoIcon: {
      '&:hover': {
        color: theme.palette.secondary.main
      }
    },
    iconButton: {
      padding: 0,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(5),
      fontWeight: "bold"
    },
});

function LogoIcon(props) {
  return (
    <SvgIcon {...props} style={{height: "30", width: "30"}}>
      <path d="m51.486,95.947l10.286-10.268-20.573-20.536-10.287,10.269 20.574,20.535zm0-61.608l-30.86,30.804 10.286,10.269 10.287-10.269 20.573-20.536-10.286-10.268zm58.229-34.339h-82.286c-15.149,0-27.429,12.28-27.429,27.429v82.286c0,15.149 12.28,27.429 27.429,27.429h82.286c15.148,0 27.429-12.28 27.429-27.429v-82.286c0-15.149-12.28-27.429-27.429-27.429zm13.715,102.858c0,11.361-9.21,20.572-20.572,20.572h-68.572c-11.361,0-20.572-9.21-20.572-20.572v-68.572c0-11.362 9.21-20.572 20.572-20.572h68.572c11.361,0 20.572,9.21 20.572,20.572v68.572zm-48.059-17.179l10.287,10.268 20.574-20.535-10.287-10.269-20.574,20.536zm0-41.072l20.574,20.537 10.287,10.269 10.287-10.269-30.861-30.805-10.287,10.268z"/>
    </SvgIcon>
  );            
}

class NavigationBar extends React.Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} elevation={0} position="absolute">
          <Toolbar className={classes.toolbar}>
            <LogoIcon color="primary" viewBox="0 0 137.144 137.144"  className={classes.logoIcon}/>
            <Typography variant="h4" className={classes.title}></Typography>
            <Menu direction="horizontal" className={classes.menu}/>
            <IconButton edge="start" className={classes.iconButton} color="primary" aria-label="menu" onClick={this.props.drawerClickHandler}>
              <MenuIcon fontSize="large"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
} 

export default withStyles(useStyles)(NavigationBar);