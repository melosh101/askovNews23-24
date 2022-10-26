import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Soevn() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="Keder de andre partier Enhedslisten?" />
            <ArticleBox.UnderTitle undertitle="Ordfører sover til lovgivnings møde." />
            <ArticleBox.Article article={(
                <p>
                    Enhedslisten er faldet helt af pinden, eller måske er de
                    bare faldet i søvn. <br />
                    <br />
                    Til en vigtigt lovgivnings-debat mellem partierne, (En
                    mulighed for at diskutere alliancer og stemmer inden det
                    store lovgivnings-debat.) Faldt ordfører for flygtninge og
                    ligestilling i søvn. <br />
                    <br />
                    Er det en hentydning? Keder de andre røde partiers
                    holdninger Enhedslisten? Er de uentusiastiske i samarbejdet,
                    eller er hele rød bloks alliancen bare en facade for nemme
                    mandater. <br />
                    <br />
                    Det er i hvert i fald en spændende taktik.
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
