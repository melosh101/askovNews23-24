import React from 'react'
import ArticleBox from '../../../articleBox/ArticleBox'

export default function Green() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="Der er også de grønne" />
            <ArticleBox.UnderTitle undertitle="" />
            <ArticleBox.Article article={(
                <p>
                    <b>Mærkesager:</b>

                    <br /><br />
                    <b>Alternativet:</b> Bedre styr på klimaet - Bedre integration (Hurtigere og bedre) - Legaliser cannabis.
                    <br /><br />
                    <b>De frie grønne:</b> Klima - Ligestilling - Antiracisme.
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
