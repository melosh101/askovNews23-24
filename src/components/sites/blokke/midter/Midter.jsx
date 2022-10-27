import React from 'react'
import ArticleBox from '../../../articleBox/ArticleBox'

export default function Midter() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="For slet ikke at nævne midterpartierne" />
                <ArticleBox.UnderTitle undertitle="" />
                <ArticleBox.Article
                    article={
                        <p>
                            <b>Mærkesager:</b>
                            <br />
                            <br />
                            <b>Moderaterne:</b> Højere skat/Topskat -
                            Borgerpligt (alle unge) - Dyrere cigaretter.
                            <br />
                            <br />
                            <b>Radikale Venstre:</b> Trivsel for børn og unge -
                            Klima - Flere folk på arbejdsmarkedet.
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
