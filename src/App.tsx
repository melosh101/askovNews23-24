import React from "react";
import "./App.scss";
import TopBar from "./components/Header/Header";
import MainPage from "./components/mainPage/MainPage";
import { Helmet } from "react-helmet";

function App() {
    return (
        <div className="App">
            <Helmet>
                <script
                    defer
                    data-domain={process.env.plausible}
                    src="https://plausible.io/js/script.js"
                ></script>
            </Helmet>
            <header className="App-header">
                <TopBar />
                <MainPage />
            </header>
        </div>
    );
}

export default App;
