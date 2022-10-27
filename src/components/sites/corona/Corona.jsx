import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Corona() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Er corona en joke?" />
                <ArticleBox.UnderTitle undertitle="Har nye borgerlige glemt Corona krisen?" />
                <ArticleBox.Article
                    article={
                        <p>
                            Det skulle man næsten tro da Kasper Werup
                            partiformand for Nye borgerlige Spyttede sig selv i
                            hånden, hvorefter han gav den samme hånd til
                            partiformanden for Venstre Emilie Egebjerg.
                            <br />
                            <br />
                            Var det bare god gammel dansk tradition? Eller var
                            ren og skær uforskammethed?
                            <br />
                            <br />
                            Hvad end det var, kommer det måske til at have en
                            effekt på den ellers blå kæmpe, der er Venstre.
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
