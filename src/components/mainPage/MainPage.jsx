import React from 'react'
import BreakingBox from '../breakinBox/BreakingBox'
import './MainPage.scss'

export default function MainPage() {
    return (
        <div className="MainPage">
            <BreakingBox
                title={<h1>MANDATER!</h1>}
                breakingText="BREAKING:"
                sitesrc={'./mandater'}
                imgsrc=""
                color="yellow"
            />

            <BreakingBox
                title={
                    <h1>
                        Mistillid i Alternativet, <br /> kan det blive godt
                        igen?
                    </h1>
                }
                breakingText="BREAKING:"
                sitesrc={'./mistillid'}
                imgsrc=""
                color="yellow"
            />

            <BreakingBox
                title={
                    <h1>
                        Er Corona en <br /> joke?
                    </h1>
                }
                breakingText="BREAKING:"
                sitesrc={'./corona'}
                imgsrc="./pictures/Corona.webp"
                color="yellow"
            />

            <BreakingBox
                title={
                    <h1>
                        Ingen tillid i den <br /> rød- grønne alliance
                    </h1>
                }
                breakingText="BREAKING:"
                sitesrc={'./tillid'}
                imgsrc=""
                color="yellow"
            />

            <BreakingBox
                title={
                    <h1>
                        På den ene side <br />
                        har man de blå partier.
                    </h1>
                }
                breakingText=""
                sitesrc={'./blue'}
                imgsrc=""
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        På den anden side
                        <br /> har man de røde.
                    </h1>
                }
                breakingText=""
                sitesrc={'./red'}
                imgsrc=""
                color="red"
            />

            <BreakingBox
                title={
                    <h1>
                        Der er også
                        <br /> de grønne
                    </h1>
                }
                breakingText=""
                sitesrc={'./green'}
                imgsrc=""
                color="lightgreen"
            />

            <BreakingBox
                title={
                    <h1>
                        For slet ikke at <br />
                        nævne midterpartierne
                    </h1>
                }
                breakingText=""
                sitesrc={'./midter'}
                imgsrc=""
                color="lightpink"
            />

            <BreakingBox
                title={
                    <h1>
                        LYDOPTAGELSE AF <br /> PARTIFORMAND <br /> ÆNDRER ALT!
                    </h1>
                }
                breakingText=""
                sitesrc={'./lydoptagelse'}
                imgsrc="./pictures/Gorm.jpeg"
                color="lightblue"
            />

            <BreakingBox
                title={<h1>Videoer</h1>}
                breakingText=""
                sitesrc={'./videoer'}
                imgsrc=""
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        RADIKALE TIL <br /> HEMMELIGT MØDE?!
                    </h1>
                }
                breakingText=""
                sitesrc={'./hemmeligt'}
                imgsrc=""
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Er de frie <br />
                        grønne <br /> virkelig frie?
                    </h1>
                }
                breakingText=""
                sitesrc={'./ikkeFrie'}
                imgsrc="./pictures/Frie.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Har formand for <br /> Alternativet et <br />{' '}
                        Gudekompleks?
                    </h1>
                }
                breakingText=""
                sitesrc={'./gudekompleks'}
                imgsrc="./pictures/August.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        SMÅ PARTIER <br /> STÅR MED <br /> OVERHÅNDEN?
                    </h1>
                }
                breakingText=""
                sitesrc={'./overhaand'}
                imgsrc=""
                color="lightblue"
            />

            <BreakingBox
                title={<h1>Poolitik??</h1>}
                breakingText=""
                sitesrc={'./poolitik'}
                imgsrc="./pictures/Oliver.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Keder de <br /> andre partier <br /> Enhedslisten?
                    </h1>
                }
                breakingText=""
                sitesrc={'./soevn'}
                imgsrc="./pictures/Willow.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Hader Det <br /> Konservative <br /> Folkeparti <br />{' '}
                        kvinder?
                    </h1>
                }
                breakingText=""
                sitesrc={'./kvindehaderne'}
                imgsrc="./pictures/Magne.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Skandale på <h1 style={{ color: 'blue' }}>blå</h1> blok
                    </h1>
                }
                breakingText=""
                sitesrc={'./BlueScandal'}
                imgsrc="./pictures/Kasper.jpg"
                color="lightblue"
            />

            <BreakingBox
                title={
                    <h1>
                        Står Danmarks <br /> Demokraterne <br /> inde for
                        pædofili?
                    </h1>
                }
                breakingText=""
                sitesrc={'./Paedo'}
                imgsrc="./pictures/Mika.jpg"
                color="lightblue"
            />
        </div>
    )
}

function handleClick(url) {
    window.location.href = url
}
