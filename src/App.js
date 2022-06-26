import React from 'react';
import './css/App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
    return (
        <div className="app-central">
            <Header />
            <Switch>
                <Route
                    exact path='/'
                    component={Home}>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
