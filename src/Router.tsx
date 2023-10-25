import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsSite from "./components/sites/stats/stats";
import StartSkud from "./components/sites/startSkud/startSkud";
import OverskridelseAfGrænser from "./components/sites/overskridelseAfGrænser/site";
import RygterOmAlliance from "./components/sites/rygterOmAlliance/RygterAlliance";
import Mandater from "./components/sites/mandater/mandater";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/startSkud" element={<StartSkud />} />
                <Route path="/overskridelseAfGrænser" element={<OverskridelseAfGrænser />} />
                <Route path="/rygterOmAlliance" element={<RygterOmAlliance/>} />
                <Route path="/mandater" element={<Mandater/>}/>
                <Route path="/stats" element={<StatsSite />}></Route>
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
