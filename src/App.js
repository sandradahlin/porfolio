import React from "react";
import "./css/styles.css";
import { css } from "@emotion/core";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const AppShell = React.lazy(() => import("./components/AppShell"));

function App() {
    const override = css`
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-50%, -50%);
    `;

    return (
        <>
            <Suspense
                fallback={
                    <ClipLoader
                        css={override}
                        size={150}
                        color={"#123abc"}
                        loading={true}
                    />
                }
            >
                <AppShell />
            </Suspense>
        </>
    );
}

export default App;
