import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Paedo() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="Står Danmarks demokraterne inde for Pædofili?" />
            {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
            <ArticleBox.Article article={(
                <p>
                    I interview med Danmarks demokraterne, kom Mika Hammer med
                    et meget risky statement tidligt i valgkampen. “Jeg elsker
                    børn.” var den udtagelse der rystede hele spisesalen mandag
                    eftermiddag. <br />
                    <br />
                    Danmarks demokraterne har tidligere udtalt sig om, at der
                    skal være mere tjek på daginstitutionerne. Men hvad mener de
                    egentlig med det? Er deres endelige plan med denne mærkesag
                    at lade Mika gå rundt på daginstitutionerne og tjekke børn
                    ud?! Hvad mener hun med ELSKER? Har Mika i virkeligheden en
                    trang til at gramse på mindreårige?
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
