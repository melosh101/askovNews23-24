import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Hemmeligt() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Hemmeligt møde?" />
                <ArticleBox.UnderTitle undertitle="Hvem er inviteret?" />
                <ArticleBox.Article
                    article={
                        <p>
                            Et ikke så hemmeligt møde har lige taget sted mellem
                            SF, Radikal Venstre og moderaterne?
                            <br />
                            <br />
                            Er det starten på en alliance? og hvorfor vælger de
                            to midterpartier, bidt sig fast i det ellers Meget
                            røde parti?
                            <br />
                            <br />
                            Og hvordan vil socialdemokraterne reagere, når de
                            finder ud af at de ikke er inviterede?
                            <br />
                            <br />
                            Det kunne være starten på en solid alliance over
                            midten, eller starten på en rød bloks krig.
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
