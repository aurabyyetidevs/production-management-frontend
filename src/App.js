import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import Dashboard from "./components/Main/Dashboard";
import './assets/scss/index.scss';
import {renderRoutes} from "react-router-config";
import routes from "./routes";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    topBar: {
        zIndex: 2,
        position: 'relative'
    },
    container: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    navBar: {
        zIndex: 3,
        width: 256,
        minWidth: 256,
        flex: '0 0 auto'
    },
    content: {
        overflowY: 'auto',
        flex: '1 1 auto'
    }
}));

function App() {

    const classes = useStyles();

    return (
        <>
            {/*<StoreProvider store={store}>*/}
            <ThemeProvider theme={theme}>
                {/*<MuiPickersUtilsProvider utils={MomentUtils}>*/}
                <Router>
                    {renderRoutes(routes)}
                </Router>
                {/*</MuiPickersUtilsProvider>*/}
            </ThemeProvider>
            {/*</StoreProvider>*/}
        </>
    );
}

export default App;
