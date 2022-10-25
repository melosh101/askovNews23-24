import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlueScandal from './components/sites/blueScandal/BlueScandal';
import Paedo from './components/sites/paedo/Paedo';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App /> } />
                <Route path='/BlueScandal' element={ <BlueScandal /> } />
                <Route path='/Paedo' element={ <Paedo /> } />
            </Routes>
        </BrowserRouter>
    )
}