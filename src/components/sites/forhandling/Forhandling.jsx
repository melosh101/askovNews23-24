import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'
import './Forhandling.scss'

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

                    <table>
                                <tr>
                                    <th>Ministerpost</th>
                                    <th>Navn</th>
                                </tr>
                                <tr>
                                    <td>Statsminister</td>
                                    <td>Lulle Guldahl Andersen</td>
                                </tr>
                                <tr>
                                    <td>Udenrigsminister</td>
                                    <td>Abelone Lønholdt</td>
                                </tr>
                                <tr>
                                    <td>Ligestillingsminister</td>
                                    <td>Johan Holmgaard Thomsen</td>
                                </tr>
                                <tr>
                                    <td>Klimaminister</td>
                                    <td>Emilie Egebjerg</td>
                                </tr>
                                <tr>
                                    <td>Flygtningeminister</td>
                                    <td>Magne Holmboe Jensen</td>
                                </tr>
                                <tr>
                                    <td>Forsvarsminister</td>
                                    <td>Kristine Egelund</td>
                                </tr>
                                <tr>
                                    <td>Sundhedsminister</td>
                                    <td>Emilie Egebjerg</td>
                                </tr>
                            </table>
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
