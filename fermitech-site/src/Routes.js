import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home"
import NotFound from "./containers/NotFound";
import Spam from "./containers/Spam";


export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path={"/spam"}>
                    <Spam setTheme={props.setTheme}/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}