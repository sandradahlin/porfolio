import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Homepage from "../views/Homepage";
import Projectspage from "../views/Projectspage";
import Project from "../views/Project";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import NotFound from "./NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const AppShell = ({ location }) => {
    return (
        <div className="transition">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={"fade"}
                >
                    <Switch location={location}>
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
                        <Route component={NotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(AppShell);
