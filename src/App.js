import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/styles.css";
import Homepage from "./views/Homepage";
import Projectspage from "./views/Projectspage";
import Project from "./views/Project";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <Router>
                <main>
                    <div className="wrapper">
                        <Navbar />
                        <ScrollToTop />
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

                            <Route
                                exact
                                path="/projects/:id"
                                component={Project}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
