import React, {useState} from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ReturnsPage from './pages/ReturnsPage/ReturnsPage';
import PurchaseTrackingPage from './pages/PurchaseTracking/PurchaseTrackingPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import PurchasesPage from "./pages/PurchasesPage/PurchasesPage";

function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(true);

    return (
        <div className="App">
            <Router>
                <NavBar auth={authenticated} setAuth={setAuthenticated}/>
                <Route path={'/'} exact>
                    <HomePage/>
                </Route>
                {authenticated ? <Switch>
                    <Route path={'/returns'} exact>
                        <ReturnsPage/>
                    </Route>
                    <Route path={'/purchases/tracking'} exact>
                        <PurchaseTrackingPage/>
                    </Route>
                    <Route path={'/purchases'} exact>
                        <PurchasesPage/>
                    </Route>
                </Switch> : <div>Please Log In</div>}
            </Router>
        </div>
    );
}

export default App;

// @todo: if time permits add redux for state management or use Context API (no to prop drilling on this one)