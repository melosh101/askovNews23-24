import React from 'react'
import ArticleBox from '../../../articleBox/ArticleBox'

export default function Blue() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="På den ene side har man de blå partier." />
            <ArticleBox.UnderTitle undertitle="" />
            <ArticleBox.Article article={(
                <p>
                  <b>Mærkesager:</b>
                  <br /><br />
                  <b>Nye borgerlige:</b> Strammere indvandrerpolitik - Lavere skat - Individuel frihed.
                  <br /><br />
                  <b>Liberal alliance:</b> Lavere skat - Billigere og bedre velfærd - Klima.
                  <br /><br />
                  <b>Venstre:</b> Hårdere krav til flygtninge - Moderne og bedre sygehuse - Lavere skat.
                  <br /><br />
                  <b>Konservative:</b> Lavere skat - Indvandrerpolitik (Hurtigt integreret, det skal ikke være attraktivt at være indvandrere) - Klima.
                  <br /><br />
                  <b>Danmarks demokraterne:</b> Sammenhæng i Danmark - Velfærd for de svage (Ældre) - Ingen indvandrere medmindre de integrerer sig selv.
                  <br /><br />
                  <b>Færøerne:</b> Legalisering af hash - Klima - Uddannelsesudvikling. 
                  <br /><br />
                  <b>Dansk folkeparti:</b> Stop indvandring - Tidligere pension - Atomkraft.

                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
