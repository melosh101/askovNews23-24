import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'
import ReactAudioPlayer from 'react-audio-player'

export default function Lydoptagelse() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="LYDOPTAGELSE AF PARTIFORMAND ÆNDRER ALT!" />
                <ArticleBox.UnderTitle undertitle="Tirsdag aften optog en anonym kilde en samtale der måske kunne have potentialet til at ændre alt" />
                <ReactAudioPlayer
                    src="./sound/lydoptagelse.mp3"
                    controls
                    className="audioPlayer"
                    style={{
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                />
                <ArticleBox.Article
                    article={
                        <p>
                            De sidste par dage har der været en intenst strid i
                            den blå blok, flere alliancer er hurtigt blevet
                            dannet, men er også blevet opløst lige så hurtigt.{' '}
                            <br />
                            <br />
                            Mange folk er forvirrede da alliancerne næsten
                            skifter hver eneste dag hvilket selvfølgelig kunne
                            skyldes de mange uligheder mellem partierne, men
                            måske også de personlige forhold mellem
                            kandidaterne.
                            <br />
                            <br />
                            I går aftes fik en journalist fra ØX-23 fat i en
                            lydoptagelse af en partiformand fra den blå blok,
                            som udtaler sig om sit eget partis alliancer.
                            Partiformanden gik med til at pitche sin egen stemme
                            ned, da personen ville udtrykke sine holdninger
                            anonymt.
                            <br />
                            <br />
                            Her er nogle vigtige punkter i lydoptagelsen:
                            <br />
                            <br />
                            00.47 i lydoptagelsen - “Vi har i hvert fald Liberal
                            Alliance, Venstre, Grønland og Færøerne og så kan vi
                            sørge for at få Ny Borgerlige med” - Dette er
                            partiformandens opsummering af sine egne alliancer.
                            <br />
                            <br />
                            00.24 i lydoptagelsen siger partiformanden også at
                            “Ingen gider at være sammen med Dansk Folkeparti!” -
                            Denne udtalelse stemmer også overens efter DF’s
                            lavtstående lovforslags tale, da DF’s egen
                            partiformand Phillip tumlede over hans egne ord
                            sammen med sin ordfører Oliver forlod scenen i
                            tavshed.
                            <br />
                            <br />
                            00.42 i lydoptagelsen siger den anonyme partiformand
                            at - “Venstre har også fat i Grønland og Færøerne” -
                            Denne udtalelse stemmer ikke helt overens med hvad
                            Socialdemokratiet mener, da de siger at de også har
                            haft meget kontakt med både Grønland og Færøerne.
                            <br />
                            <br />
                            Dette kunne måske være et tidligt tegn på en kamp
                            mellem de to største partier, om retten til de to
                            mindste partier.
                            <br />
                            <br />
                            Opdateres:
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}
