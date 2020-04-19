import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import theme from './theme';
import {ThemeProvider} from '@material-ui/styles';
import './assets/scss/index.scss';
import {renderRoutes} from "react-router-config";
import routes from "./routes";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

function App() {

    return (
        <>
            {/*<StoreProvider store={store}>*/}
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Router>
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
            {/*</StoreProvider>*/}
        </>
    );
}

export default App;
