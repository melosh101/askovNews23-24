import React from "react";
import "./MainPage.scss";
import BreakingBox from "../breakinBox/BreakingBox";

export default function MainPage() {
    return (
        <div className="MainPage">
            <BreakingBox
                title="MANDATERNE ER FORDÆLT"
                color="yellow"
                sitesrc="/mandater"
                breakingText="BREAKING!"
            />
            <BreakingBox
                title="SABOTAGE SAG: OPDATERING"
                color="yellow"
                sitesrc="/sabotage#opdatering"
                breakingText="BREAKING!"
            />
            <BreakingBox
                title="Menignsmålingerne er inde"
                color="yellow"
                sitesrc="/meningsMåling"
                breakingText="BREAKING!"
            />
            <BreakingBox
                title="SABOTAGE SAG: STORE FØLELSER PÅ SPIL MIDT I REDAKTIONEN"
                color="lightblue"
                sitesrc="/sabotage"
                breakingText=""
            />
            <BreakingBox
                title="RYGTER OM ALLIANCE"
                color="lightblue"
                sitesrc="/rygterOmAlliance"
                breakingText=""
            />
            <BreakingBox
                title="OVERSKRIDELSE AF GRÆNSER OG HERARKI"
                color="lightblue"
                sitesrc="/overskridelseAfGrænser"
                breakingText=""
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
