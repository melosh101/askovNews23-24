import React from "react";
import "./BreakingBox.scss";

type BreakingBoxProps = {
    title: string;
    breakingText?: string;
    imgsrc?: string;
    sitesrc: string;
    color: string;
    imageWidth?: string;
};

export default function BreakingBox({
    title,
    breakingText,
    imgsrc,
    sitesrc,
    color,
    imageWidth,

}: BreakingBoxProps) {
    return (
        <div className="BreakingBox">
            <div
                className="Article"
                onClick={() => handleClick(sitesrc)}
                style={{
                    backgroundColor: color,
                }}
            >
                <div className="left">
                    {breakingText ? <strong>{breakingText}</strong> : null}
                    <br />
                    {title}
                </div>
                <div className="right image">
                    {imgsrc ? (
                        <img
                            src={imgsrc}
                            style={{ backgroundColor: "yellow", width: imageWidth?? "15vw" }}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

function handleClick(url: string) {
    window.location.href = url;
}
