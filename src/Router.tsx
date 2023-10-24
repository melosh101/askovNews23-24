import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsSite from "./components/sites/stats/stats";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/stats" element={<StatsSite />}></Route>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
