import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlueScandal from './components/sites/blueScandal/BlueScandal'
import Paedo from './components/sites/paedo/Paedo'
import Kvindehaderne from './components/sites/kvindehaderne/Kvindehaderne'
import Mandater from './components/sites/mandater/Mandater'
import Soevn from './components/sites/soevn/Soevn'
import Poolitik from './components/sites/poolitik/Poolitik'
import Overhaand from './components/sites/overhaand/Overhaand'
import Skider from './components/sites/skider/Skider'
import Hemmeligt from './components/sites/hemmligt/Hemmeligt'
import Lydoptagelse from './components/sites/lydoptagelse/Lydoptagelse'
import Gudekompleks from './components/sites/gudekompleks/Gudekompleks'
import TestSite from './components/sites/testSite/TestSite'
import IkkeFri from './components/sites/ikkeFri/IkkeFri'
import Videoer from './components/sites/videoer/Videoer'
import Tillid from './components/sites/tillid/Tillid'
import Mistillid from './components/sites/mistillid/Mistillid'
import Red from './components/sites/blokke/red/Red'
import Blue from './components/sites/blokke/blue/Blue'
import Green from './components/sites/blokke/green/Green'
import Midter from './components/sites/blokke/midter/Midter'
import Corona from './components/sites/corona/Corona'
import Forhandling from './components/sites/forhandling/Forhandling'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/BlueScandal" element={<BlueScandal />} />
                <Route path="/Paedo" element={<Paedo />} />
                <Route path="/Kvindehaderne" element={<Kvindehaderne />} />
                <Route path="/mandater" element={<Mandater />} />
                <Route path="/Soevn" element={<Soevn />} />
                <Route path="/Poolitik" element={<Poolitik />} />
                <Route path="/Overhaand" element={<Overhaand />} />
                <Route path="/Skider" element={<Skider />} />
                <Route path="/Hemmeligt" element={<Hemmeligt />} />
                <Route path="/lydoptagelse" element={<Lydoptagelse />} />
                <Route path="/Gudekompleks" element={<Gudekompleks />} />
                <Route path="/TestSite" element={<TestSite />} />
                <Route path="/ikkeFri" element={<IkkeFri />} />
                <Route path="/videoer" element={<Videoer />} />
                <Route path="/tillid" element={<Tillid />} />
                <Route path="/mistillid" element={<Mistillid />} />
                <Route path="/red" element={<Red />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/green" element={<Green />} />
                <Route path="/midter" element={<Midter />} />
                <Route path="/corona" element={<Corona />} />
                <Route path="/forhandling" element={<Forhandling />} />
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
