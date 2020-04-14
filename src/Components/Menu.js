import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {List, ListItem, Link, Typography} from '@material-ui/core';


const styledBy = (property, mapping) => (props) => mapping[props[property]];

const useStyles = theme => ({
  rootHorizontal: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  rootVertical: {
    alignItems: "center",
    display: "flex",
    height: "100%",
  },
  list: {
    marginRight: styledBy('direction', {
      vertical: 0,
      horizontal: theme.spacing(6)
    }), 
    padding: styledBy('direction', {
      vertical: "0px 100px 0px 50px",
    }),
    display: "flex",
    flexDirection: styledBy('direction', {
      horizontal: "row",
      vertical: "column"
    }),
    flexGrow: 1,
    },
  link: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    color: "white",
    paddingLeft: styledBy('direction', {
      horizontal: theme.spacing(1), 
      vertical: theme.spacing(2)
    }),
    paddingRight: styledBy('direction', {
      horizontal: theme.spacing(2), 
    }),
  }
});

const menu_items =
  [
    {
      text: "About Me",
      link: "#about_me"
    },
    {
      text: "Experience"
    },
    {
      text: "My Work",
      link: "/"
    },
    {
      text: "Contact",
      link: "/"
    },
  ]
;

class Menu extends React.Component {

   render() {
        const { classes } = this.props;
        
        return (
            <nav className={this.props.direction === "horizontal" ? classes.rootHorizontal : classes.rootVertical}>
              <List className={classes.list}>

                {menu_items.map( (item, index) => (
                  <ListItem key={index}>
                    <Typography variant="body2" color="primary" noWrap>{(index.toString(2).length === 1 ? '00' + index.toString(2) : '0' + index.toString(2)) + '.'}
                      <Link href={item.link} className={classes.link} underline="none">
                        <b>{item.text}</b>
                      </Link>
                    </Typography>
                  </ListItem>
                ))}

              </List>
            </nav>
          );
      }
} 


export default withStyles(useStyles)(Menu);