import React from "react";

const iframeStyle: React.CSSProperties = {
    width: "1px",
    minWidth: "100%",
    height: "1600px",
};

const divStyle: React.CSSProperties = {
    fontSize: "14px",
    paddingBottom: "14px",
};

const aStyle: React.CSSProperties = {
    color: "#4F46E5",
    textDecoration: "underline",
};

function StatsSite() {
    const preferred_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return (
        <div>
            <h1>env: {process.env.REACT_APP_PLAUSIBLE}</h1>
            <iframe
                name="plausible-embed"
                src={`${process.env.REACT_APP_PLAUSIBLE}${preferred_theme}`}
                scrolling="no"
                frameBorder="0"
                loading="lazy"
                style={iframeStyle}
            ></iframe>
            <div style={divStyle}>
                Stats powered by{" "}
                <a
                    target="_blank"
                    style={aStyle}
                    href="https://plausible.io"
                    rel="noreferrer"
                >
                    Plausible Analytics
                </a>
            </div>
            <script async src="https://plausible.io/js/embed.host.js"></script>
        </div>
    );
}

export default StatsSite;
