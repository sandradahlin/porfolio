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
import AppShell from "./components/AppShell";

function App() {
    return (
        <>
            <Router>
                <main>
                    <div className="wrapper">
                        <Navbar />
                        <ScrollToTop />
                        <AppShell />
                    </div>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
