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
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
