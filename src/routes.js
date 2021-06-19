import {  Switch, BrowserRouter, Route, } from "react-router-dom";

import Home from './pages/home/';

// Create Routes
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;