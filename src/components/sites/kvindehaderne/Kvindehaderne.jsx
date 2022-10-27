import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Kvindehaderne() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Hadet Det Konservative Folkeparti kvinder?" />
                {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
                <ArticleBox.Article
                    article={
                        <p>
                            Det gik ellers vildt til da der i mandags blev
                            overtrådt alle grænser. <br />
                            <br />
                            Da Konservative Folkepartis formand, Magne Holmboe
                            Jensen truede to kvindelige journalister, da de i et
                            forsøg på at orientere sig om nye politiske poster
                            skreg af de to kvinder “JEG DRUKNER JER” hvor efter
                            han pegede en finger på den ene journalist og med
                            stadig hævet stemme skreg “JEG DRUKNER DIG”.
                            <br />
                            <br />
                            Han er senere kommet ud med udtalelsen “Det var en
                            intern joke i partiet” <br />
                            <br />
                            Hvad gik der galt, hvad fik Konservative Folkepartis
                            Formand til at skrige dødstrusler af to kvindelige
                            journalister? Og hvilken konsekvens vil det komme
                            til at have på det kvindehadende Konservative
                            Folkeparti under denne valgkamp?
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
