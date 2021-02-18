import React, {Fragment, useState} from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ReturnsPage from './pages/ReturnsPage/ReturnsPage';
import PurchaseTrackingPage from './pages/PurchaseTracking/PurchaseTrackingPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <Route path={'/'} exact>
                        <HomePage/>
                    </Route>
                    <Route path={'/returns'} exact>
                        <ReturnsPage/>
                    </Route>
                    <Route path={'/tracking'} exact>
                        <PurchaseTrackingPage/>
                    </Route>


                </Switch>
            </Router>
        </div>
    );
}

export default App;
// @TODO: remove material-ui/icons if not being used