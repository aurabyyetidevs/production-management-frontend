/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/styles';
import {
    AppBar,
    Toolbar,
    colors,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
        border: '1px solid red'
    },
    logoContainer: {
        width: '15%'
    },
    logo: {
        padding: 5,
        marginLeft: 10,
        height: 35
    },
    logoSign: {
        height: 40
    },
}));

const TopBar = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    useEffect(() => {
    });

    return (
        <AppBar
            {...rest}
            className={className}
        >
            <Toolbar>
                <div className={classes.logoContainer}>
                    <img className={classes.logoSign} src="/images/aura-logo-v2.png" alt="logo"/>
                    <img className={classes.logo} src="/images/aura-v2.png" alt="logo"/>
                </div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon style={{color: 'white'}} fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    className: PropTypes.string,
};

export default TopBar;
