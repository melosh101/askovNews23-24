import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlueScandal from './components/sites/blueScandal/BlueScandal';
import Paedo from './components/sites/paedo/Paedo';
import Kvindehaderne from './components/sites/kvindehaderne/Kvindehaderne';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> } />
                <Route path='/BlueScandal' element={ <BlueScandal /> } />
                <Route path='/Paedo' element={ <Paedo /> } />
                <Route path='/Kvindehaderne' element={ <Kvindehaderne /> } />
            </Routes>
        </BrowserRouter>
    )
}