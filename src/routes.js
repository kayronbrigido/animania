import {  Switch, BrowserRouter, Route, } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/home/';
import Anime from './pages/anime';
import Saved from './pages/saved';

// Create Routes
const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/anime/:id" component={Anime}/>
                <Route exact path="/salvos" component={Saved} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
