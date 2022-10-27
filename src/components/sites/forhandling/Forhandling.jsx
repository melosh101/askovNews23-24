import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Forhandling() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="Forhandling resultat" />
            <ArticleBox.UnderTitle undertitle="Hvilke partier er endt i regeringen?" />
            <ArticleBox.Article article={(
                <p>
                    <b>Det høres fra en anonym kilde at:</b> <br />
                    Regeringen består af: <br />
                    Socialdemokratiet <br />
                    Konservative <br />
                    Venstre <br /><br />

                    <b>Og disse partier er støtte partier:</b><br />
                    Liberal Alliance <br />
                    Dansk Folkeparti <br />
                    Danmarksdemokraterne <br />
                    Nye Borgerlige <br />
                    Færøerne <br /><br />

                    Det bliver spændende om hvem der får de forskellige roller
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
