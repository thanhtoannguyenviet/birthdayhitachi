import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    linkWrapper: {
        margin: theme.spacing(2),
        display: "inline-block"
    }
}))

export const LinkRoute = props => {
    const classes = useStyles();
    return (
        <Link {...props} className={classes.linkWrapper} >
            {props.children}
        </Link>
    )
}

LinkRoute.propTypes = {
    to: PropTypes.string.isRequired
}
