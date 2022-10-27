import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function IkkeFri() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="Er de frie grønne virkelig frie?" />
            {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
            <ArticleBox.Article article={(
                <p>
                    Så spørgsmålet er: Undertrykker de frie grønne virkelig deres medlemmer? For hvis det er sagen, går det jo imod selve deres navn. <br /><br />
                    Flere gange har vi fået udtagelser fra et medlem af det mest grønne parti, nemlig de frie grønne. Han har udtrykket sig om, at mens han føler at han er en del af partiet, føler han sig ikke fri.<br /><br />
                    Han fortalte også at han derfor måtte resultere til at bruge tiden på at lave ”gak og løjer” men da jeg spurgte mere ind til dette gik han i selvsving og gentog den samme sætning, hvilket er et klart eksempel på traumer fra at have været fanget af hans parti.<br /><br /> 
                    Men er han den eneste? Eller er han bare den eneste som turde at udtrykke sig? 
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}