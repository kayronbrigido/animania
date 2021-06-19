import {  Switch, BrowserRouter, Route, } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/home/';

// Create Routes
const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
