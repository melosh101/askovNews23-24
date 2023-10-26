import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";

const SvagStatMinister = () => {
    return (
        <ArticleBox>
            <ArticleBox.Title title="Charlie Lund Friis (C): En svag Statsminister? " />
            <ArticleBox.Article>
                <p>
                    Et uofficelt møde for blå blok fandt sted i Mormorstuen. Til
                    stede var blandt andet; Det Konservative Folkeparti og Dansk
                    Folkeparti. Bertil Brix Gru (B) stod foran døren sammen med
                    Charlie Lund Friis (C). Bertil B.G stjal Charlie L.F’s
                    ikoniske stok. Derefter siger Bertil B.G ”Se mig! Jeg ligner
                    en svag statsminister!”, imens han poserer som en ældre
                    mand. Bertil Brix Gru benægter at have sagt det, men han
                    kommer til pressen senere med budskabet: ”Charlie Lund Friis
                    ville være en fræk statsminister”
                </p>
                <ArticleBox.Image alt="Billede af hændelsen" src="./pictures/svag.jpg" credits="Bertil Lindemand" />

            </ArticleBox.Article>
            <ArticleBox.date date="Dato: 26/10-2023" />
        </ArticleBox>
    );
};

export default SvagStatMinister;
