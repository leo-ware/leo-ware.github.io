import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css'

import LandingPage from "./pages/LandingPage/LandingPage"
import Navbar from "./components/Navbar/Navbar"
import CVPage from "./pages/CVPage/CVPage"
import BottomBar from "./components/BottomBar/BottomBar";
import NotFound404Page from "./pages/NotFound404Page/NotFound404Page";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => (
    <div className="App">
        <Router>
            <Switch>

                {/* special landing page */}
                <Route exact path={"/"}><LandingPage /></Route>

                {/* normal pages with header and footer */}
                <Route path={"/"}>
                    <Navbar />
                    <Switch>
                        <Route path={"/about"} exact>
                            <AboutPage />
                        </Route>

                        <Route path={"/projects"} exact>
                            Some Projects
                        </Route>

                        <Route path={"/cv"} exact>
                            <CVPage />
                        </Route>

                        <Route path={"/404"} exact>
                            <NotFound404Page />
                        </Route>

                        <Route path={"/"}>
                            <Redirect to={"/404"}/>
                        </Route>
                    </Switch>
                    <BottomBar />
                </Route>

            </Switch>
        </Router>
    </div>
)

export default App
