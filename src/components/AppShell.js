import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TransitionComponents from "./TransitionComponents";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppShell = () => {
    return (
        <>
            <Router>
                <main>
                    <div className="wrapper">
                        <Navbar />
                        <ScrollToTop />
                        <TransitionComponents />
                    </div>
                </main>
                <Footer />
            </Router>
        </>
    );
};

export default AppShell;
