import React from "react";
import "./MainPage.scss";
import BreakingBox from "../breakinBox/BreakingBox";

export default function MainPage() {
    return <div className="MainPage">
        <BreakingBox 
            title="START-SKUDET HAR LYDT"
            color="yellow"
            sitesrc="/startSkud"
            breakingText="BREAKING!"
        />
    </div>;
}

