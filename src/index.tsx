import React from "react";
import ReactDOM from "react-dom/client";
import * as r from "./Router";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<r.default />);
