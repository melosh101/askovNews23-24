import React from "react";
import "./MainPage.scss";
import BreakingBox from "../breakinBox/BreakingBox";

export default function MainPage() {
    return (
        <div className="MainPage">
            <BreakingBox
                title="RYGTER OM ALLIANCE"
                color="yellow"
                sitesrc="/rygterOmAlliance"
                breakingText="BREAKING!"
            />
            <BreakingBox
                title="OVERSKRIDELSE AF GRÆNSER OG HERARKI"
                color="yellow"
                sitesrc="/overskridelseAfGrænser"
                breakingText="BREAKING!"
            />
            <BreakingBox
                title="STARTSKUDDET HAR LYDT"
                color="lightblue"
                sitesrc="/startSkud"
                breakingText=""
            />
        </div>
    );
}
