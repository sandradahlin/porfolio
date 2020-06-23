import React from "react";

import BasicNavigation from "./BasicNavigation";

const Navbar = () => {
    return (
        <nav>
            <div className="row nav">
                <BasicNavigation className="main-nav" />
            </div>
        </nav>
    );
};

export default Navbar;
