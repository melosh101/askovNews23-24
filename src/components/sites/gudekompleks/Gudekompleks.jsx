import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Gudekompleks() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Har formand for Alternativet et Gudekompleks?" />
                {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
                <ArticleBox.Article
                    article={
                        <p>
                            August kalder sig selv Leffers Kristus? Er det et
                            forsøg på at provokere det kristne samfund i
                            Danmark. Laver han sjov med de 77% af danskerne, som
                            er medlem af Folkekirken?! Det er voldsomt farligt
                            at fornærme over halvdelen af en befolkning så tæt
                            på valget. <br />
                            <br />
                            Har han virkelig sådan et storhedsvanvid, at han
                            føler sig selv som selve Kristus? Vil du gerne have
                            en mand, som ser sig selv hævet over mennesket som
                            din statsminister?!
                            <img
                                src="./pictures/August.jpg"
                                alt=""
                                style={{ width: '100%' }}
                            />
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
