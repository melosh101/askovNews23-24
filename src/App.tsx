import React from "react";
import "./App.scss";
import TopBar from "./components/Header/Header";
import MainPage from "./components/mainPage/MainPage";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopBar />
                <MainPage />
            </header>
        </div>
    );
}

export default App;
