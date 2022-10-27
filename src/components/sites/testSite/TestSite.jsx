import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function TestSite() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Blot en test side" />
                <ArticleBox.UnderTitle undertitle="Dette er en test side" />
                <ArticleBox.Article
                    article={<p>Testing attention please...</p>}
                />
            </ArticleBox>
        </div>
    )
}
