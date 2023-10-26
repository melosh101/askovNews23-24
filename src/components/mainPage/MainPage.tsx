import React from "react";
import "./MainPage.scss";
import BreakingBox from "../breakinBox/BreakingBox";

export default function MainPage() {
    return (
        <div className="MainPage">
            <BreakingBox
                title={"nye mandater"}
                sitesrc={"./opdateredemandater"} color={"yellow"}
                breakingText={"BREAKING!"}
            />
            <BreakingBox 
                title="En svag Statsminister?"
                breakingText="BREAKING!"
                sitesrc={"./svagstatsminister"}
                imgsrc="./pictures/Svag.jpg"
                color="yellow"
                imageWidth="30vw"
            />
            <BreakingBox
                title="MANDATERNE ER FORDÆLT"
                color="lightblue"
                sitesrc="/mandater"
                breakingText=""
            />
            <BreakingBox
                title="SABOTAGE SAG: OPDATERING"
                color="lightblue"
                sitesrc="/sabotage#opdatering"
                breakingText=""
            />
            <BreakingBox
                title="Menignsmålingerne er inde"
                color="lighblue"
                sitesrc="/meningsMåling"
                breakingText=""
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
