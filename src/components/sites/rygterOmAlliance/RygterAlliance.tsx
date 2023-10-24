import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";

const RygterOmAlliance = () => {
    return (
        <ArticleBox>
            <ArticleBox.Title title="Askovs egen tabloid har talt: Der spredes rygter om alliancer" />
            <ArticleBox.Article>
                <p>
                    I dag klokken 11:36 udgav tabloiden ”askov_gossip”, som er
                    en instagram profil dedikeret til politisk festival, et
                    opslag med beskrivelsen ”Radikale venstre er begyndt at
                    sprede ryg(t)er om falske alliancer”. På det overstående
                    billede ses Radikale Venstre og Moderaternes partiledere med
                    et smil på læben.
                </p>
                <p>
                    Tidligere i dag har Æ’ NY ’haft journalister på sagen, ved
                    at aftalte et interview med Moderaterne. Moderaterne udtalte
                    sig om deres mulige alliancer, men Radikale Venstre blev
                    ikke nævnt.
                </p>
                <p>
                    En anonym kilde har forholdt sig til sagen og siger; ”Jeg
                    vil mene, at det er dårlig adfærd og helt uacceptabelt. De
                    ved tydeligvis, at Moderaterne ikke ønsker en alliance”
                </p>
                <p>
                    Æ’ NY’ kontaktede Radikale Venstre, men de havde ikke nogen
                    kommentarer.
                </p>
            </ArticleBox.Article>
            <ArticleBox.date date="Dato: 24/10-2023" />
        </ArticleBox>
    );
};

export default RygterOmAlliance;
