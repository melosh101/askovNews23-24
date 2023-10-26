import React from "react";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsSite from "./components/sites/stats/stats";
import StartSkud from "./components/sites/startSkud/startSkud";
import OverskridelseAfGrænser from "./components/sites/overskridelseAfGrænser/site";
import RygterOmAlliance from "./components/sites/rygterOmAlliance/RygterAlliance";
import Mandater from "./components/sites/mandater/mandater";
import MeningsMåling from "./components/sites/meningsMålinger/meningsMåling";
import Sabotage from "./components/sites/sabotageSag/sabotage";
import Case from "./components/sites/case/case";
import OpdateredeMandater from "./components/sites/mandater/Mandater2";
import EnergiRådet from "./components/sites/energiRådet/energiRådet";
import SvagStatMinister from "./components/sites/svagStatsMinister/svagStatMinister";
import SandhedensTime from "./components/sites/sandhedenstime/sandhedenstime";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sandhedenstime" element={<SandhedensTime/>}/>
                <Route path="/svagstatsminister" element={<SvagStatMinister />} />
                <Route path="/energiråd" element={<EnergiRådet/>}/>
                <Route path="/startSkud" element={<StartSkud />} />
                <Route path="/overskridelseAfGrænser" element={<OverskridelseAfGrænser />} />
                <Route path="/rygterOmAlliance" element={<RygterOmAlliance/>} />
                <Route path="/mandater" element={<Mandater/>}/>
                <Route path="/opdateredeMandater" element={<OpdateredeMandater/>}/>
                <Route path="/meningsMåling" element={<MeningsMåling />} />
                <Route path="/sabotage" element={<Sabotage />} />
                <Route path="/stats" element={<StatsSite />}></Route>
                <Route path="/case" element={<Case />} />
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
