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
