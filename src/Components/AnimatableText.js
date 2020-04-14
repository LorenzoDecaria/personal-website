import React, { Component } from 'react'
import styles from '../css/AnimatableText.module.css'
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    root: {
        display: "inline-block",
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
});



class AnimatableText extends Component {

    handleOnMouseChange(e) {
        e.target.classList.toggle(styles.animated)
        e.target.classList.toggle(styles.rubberBand)
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{whiteSpace: "no-wrap"}}>
                {
                    this.props.text.split('').map( (c) =>  {
                        if (c === " ") {
                            return <span style={{padding: "0px 8px", textAlign: "center" }} ></span>
                        }
                        return <span className={`${styles.mleft} ${classes.root}`} onMouseOver={(e) => this.handleOnMouseChange(e)} onMouseOut={(e) => this.handleOnMouseChange(e)} >{c}</span>
                    })
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(AnimatableText);