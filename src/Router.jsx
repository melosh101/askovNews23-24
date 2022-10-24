import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App />} />
            </Routes>
        </BrowserRouter>
    )
}