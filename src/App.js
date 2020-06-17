import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/styles.css";
import Homepage from "./views/Homepage";
import Projectspage from "./views/Projectspage";
import Project from "./views/Project";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route
                            exact
                            path="/projects"
                            component={Projectspage}
                        />
                        <Route
                            exact
                            path="/projects"
                            component={Projectspage}
                        />

                        <Route exact path="/projects/:id" component={Project} />
                    </Switch>
                </Router>
            </main>
        </>
    );
}

export default App;
