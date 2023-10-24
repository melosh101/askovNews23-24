import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsSite from "./components/sites/stats/stats";
import StartSkud from "./components/sites/startSkud/startSkud";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/stats" element={<StatsSite />}></Route>
                <Route path="*" element={<App />} />
                <Route path="/startSkud" element={<StartSkud />} />
            </Routes>
        </BrowserRouter>
    );
}
