import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import OrderListContainer from "./Orders/OrderListContainer";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path={`/login`} />
                <Route path={`/orders`} render={ props=>
                    <OrderListContainer {...props} />
                }/>
                <Route path={`/home`} render={}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
