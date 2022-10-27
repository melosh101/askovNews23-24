import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Skider() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Skider SF på klimamålene?" />
                {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
                <ArticleBox.Article
                    article={
                        <p>
                            Tirsdag eftermiddag fandt to journalister fra
                            pressen et stykke SF-slikpapir efterladt midt i
                            pergolaen. Papiret var lavet af rent plastik, med
                            SF's mærke på. Er dette virkelig en tilfældighed,
                            eller prøver de at fortælle os, at de ikke giver en
                            eneste fuck om klimaet og deres ambitiøse klimamål?!
                            <br />
                            <br />
                            De påstår selv, at de går meget ind for bedre klima,
                            men kan vi virkelig stole på det, når de går rundt
                            og smider med plastik over det hele?! Er de
                            oprigtigt så klima bevidste?! Eller er det bare en
                            facade de tager på for at indsamle stemmer til
                            valget?!!!!!
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
