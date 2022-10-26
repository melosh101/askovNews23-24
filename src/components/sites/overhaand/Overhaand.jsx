import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Overhaand() {
  return (
    <div>
        <ArticleBox>
            <ArticleBox.Title title="SMÅ PARTIER STÅR MED OVERHÅNDEN?" />
            {/* <ArticleBox.UnderTitle undertitsle="undertitel" /> */}
            <ArticleBox.Article article={(
                <p>
                    I et interview med Færøerne blev deres alliancer leaket
                    allerede anden dag, det gav et indblik i hvad der egentlig
                    foregik på de forskellige blokke. Færøerne kom til at falde
                    for et simpelt spørgsmål, og fortalte intervieweren om deres
                    alliancer på den blå blok. Men da senere på ugen, hvor alle
                    partierne præsenterede deres lovforslag, forrådte Færøerne
                    flere af de andre partier. <br />
                    <br />
                    Ved Danmarksdemokraternes storslåede lovforslags
                    præsentation, havde Færøerne lovet samarbejde ved at stemme
                    på hinandens parti, men Færøerne brudte dette løfte.
                    Færøerne troede det havde hånden hævet over de andre
                    partier, men da deres parti endelig stod på scenen, sejlede
                    de. Færøernes lovforslag fokuserede kun på deres egen ø og
                    overraskende nok også Tyskland, uden at sætte fokus på
                    Danmark overhovedet. De nævnte faktisk til deres
                    fremlæggelse at de ville bruge Danmark som transportmiddel
                    til nabolandet, Tyskland.
                    <br />
                    <br />
                    Grønland har sammenlignende historier. Grønland har ikke
                    haft mulighed for at bestemme sig, og har derfor tilsluttet
                    sig både rød og blå blok. Ved disse partier det endnu? Kunne
                    Grønland være smartere end de andre partier? Har Grønland
                    sikret sig en position i folketinget?
                </p>
            )} />
        </ArticleBox>
    </div>
  )
}
