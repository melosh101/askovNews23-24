import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";

const EnergiRådet = () => {
    return (
        <ArticleBox>
            <ArticleBox.Title title="Energirådet kritiserer: I er ikke ambitiøse nok " />
            <ArticleBox.Article>
                <p>
                    Energirådet kritiserer regeringen for ikke at være ambitiøse
                    nok. De mener at der er stor risiko for at DK ikke når
                    klimaplanens mål for at reducere sit CO2 udslip med 50-54% I
                    2025. Lige nu siger regeringen, at man arbejder på en øget
                    afgift på diesel, og at reducere landbrugets CO2 udslip.
                    Dette er dog svært, da det er en fin balancegang mellem at
                    skære ned på landbruget, og at påvirke dets konkurrenceevne.
                    Det som partierne nu skal tænke over i forhold til
                    klimakrisen er følgende:
                    <ul>
                        <li>Atomkraft som løsning, er det for sent? Voldsom</li>
                        <li>udvidelse af vindmølleparker; fordele og ulemper</li>
                        <li>Potentiel brug af bølgeenergi Det vil koste penge, mange</li>
                        <li>penge</li>
                    </ul>
                </p>
            </ArticleBox.Article>
            <ArticleBox.date date="Dato: 26/10-2023" />
        </ArticleBox>
    );
};

export default EnergiRådet;
