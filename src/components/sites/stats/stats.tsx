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
    return (
        <div>
            <h1>Hello, world!</h1>
            <iframe
                name="plausible-embed"
                src="https://plausible.io/share/melosh.space?auth=BaBzkaGyPK4IGFrS17YkS&embed=true&theme=light"
                scrolling="no"
                frameBorder="0"
                loading="lazy"
                style={iframeStyle}
            ></iframe>
            <div style={divStyle}>
                Stats powered by{" "}
                <a target="_blank" style={aStyle} href="https://plausible.io" rel="noreferrer">
                    Plausible Analytics
                </a>
            </div>
            <script async src="https://plausible.io/js/embed.host.js"></script>
        </div>
    );
}

export default StatsSite;
