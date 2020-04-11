import React, {Fragment, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Drawer, Divider, Paper, Avatar, Typography} from '@material-ui/core';
import {Hidden} from '@material-ui/core';
import navigationConfig from './navigationConfig';
import Navigation from "./Navigation";
import useRouter from "../../../utils/useRouter";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        overflowY: 'auto'
    },
    content: {
        padding: theme.spacing(2)
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 80,
        height: 80
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    }
}));

const NavBar = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navbarContent = (
        <div className={classes.content}>
            <div className={classes.profile}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    // component={RouterLink}
                    src={'/images/32.jpg'}
                    to="/profile/1/timeline"
                />
                <Typography
                    className={classes.name}
                    variant="h4"
                >
                    Mateusz Seler
                </Typography>
                <Typography variant="body2">CEO</Typography>
            </div>
            <Divider className={classes.divider}/>
            <nav className={classes.navigation}>
                {navigationConfig.map(list => (
                    <Navigation
                        component="div"
                        key={list.title}
                        pages={list.pages}
                        title={list.title}
                    />
                ))}
            </nav>
        </div>
    );

    return (
        <Fragment>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    variant="temporary"
                >
                    <div
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        {navbarContent}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Paper
                    className={clsx(classes.root, className)}
                    elevation={1}
                    square
                >
                    {navbarContent}
                </Paper>
            </Hidden>
        </Fragment>
    );
};

NavBar.propTypes = {
    className: PropTypes.string,
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

export default NavBar;
