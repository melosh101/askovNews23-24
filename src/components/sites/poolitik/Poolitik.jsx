import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Poolitik() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Poolitik" />
                <ArticleBox.UnderTitle undertitle="DF vil hellere spille pool." />
                <ArticleBox.Article
                    article={
                        <p>
                            Det skete i går, DFs politiske ordfører udtalte sig
                            “Kan i ikke skrive om hvor god jeg er til pool?”{' '}
                            <br />
                            <br />
                            Da det er første gang vi får noget input fra DF er
                            vi meget overraskede over at det handler om pool
                            over politik.
                            <br />
                            <br />
                            Er det sådan partiet har lyst til at blive
                            repræsenteret? Er de virkelig fuldstændig ligeglade
                            med ikke bare andre, men også med sig selv. <br />
                            <br />
                            Og kan man virkelig stole på et parti der
                            foretrækker pool over politik?
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
