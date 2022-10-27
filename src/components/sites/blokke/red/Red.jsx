import React from 'react'
import ArticleBox from '../../../articleBox/ArticleBox'

export default function Red() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="På den anden side har man de røde." />
            {/* <ArticleBox.UnderTitle undertitle="" /> */}
            <ArticleBox.Article article={(
                <p>
                    <b>Mærkesager:</b>
                    <br /><br />
                    <b>Socialdemokraterne:</b> Tryghed for alle i bla. svære tider - Grønnere landbrug og klima - Bedre arbejdsvilkår.
                    <br /><br />
                    <b>Socialistisk Folkeparti:</b> Klima - Stop mistrivsel - Psykiatrien.
                    <br /><br />
                    <b>Enhedslisten:</b> Ligestilling - Klima - Psykiatrien.
                    <br /><br />
                    <b>Grønland:</b> Cybersikkerhed - Klima - God fremtid for de unge.
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
