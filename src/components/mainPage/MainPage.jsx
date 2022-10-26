import React from 'react'
import BreakingBox from '../breakinBox/BreakingBox'
import './MainPage.scss'

export default function MainPage() {
    return (
        <div className="MainPage">
            
            <BreakingBox 
                title={(<h1>Mandater nu udgivet</h1>)}
                breakingText="BREAKING"
                sitesrc={"./mandater"}
                imgsrc=""
                color="yellow"
            />
            
            <BreakingBox 
                title={(<h1>Har formand for <br /> Alternativet et <br /> Gudekompleks?</h1>)}
                breakingText=""
                sitesrc={"./gudekompleks"}
                imgsrc="./pictures/August.jpg"
                color="lightblue"
            />

            <BreakingBox 
                title={(<h1>RADIKALE TIL <br /> HEMMELIGT MØDE?!</h1>)}
                breakingText="GIGA BREAKING:"
                sitesrc={"./hemmeligt"}
                imgsrc=""
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>LYDOPTAGELSE AF <br /> PARTIFORMAND <br /> ÆNDRER ALT!</h1>)}
                breakingText="BREAKING:"
                sitesrc={"./lydoptagelse"}
                imgsrc="./pictures/Gorm.jpeg"
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>SMÅ PARTIER <br /> STÅR MED <br /> OVERHÅNDEN?</h1>)}
                breakingText="BREAKING:"
                sitesrc={"./overhaand"}
                imgsrc=""
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>Poolitik??</h1>)}
                breakingText="BREAKING:"
                sitesrc={"./poolitik"}
                imgsrc="./pictures/Oliver.jpg"
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>Keder de <br /> andre partier <br /> Enhedslisten?</h1>)}
                breakingText=""
                sitesrc={"./soevn"}
                imgsrc="./pictures/Willow.jpg"
                color="lightblue"
            />

            <BreakingBox 
                title={(<h1>Hader Det <br /> Konservative <br /> Folkeparti <br /> kvinder?</h1>)}
                breakingText="BREAKING:"
                sitesrc={"./kvindehaderne"}
                imgsrc="./pictures/Magne.jpg"
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>Skandale på <h1 style={{color: 'blue'}}>blå</h1> blok</h1>)}
                breakingText="BREAKING:"
                sitesrc={"./BlueScandal"}
                imgsrc="./pictures/Kasper.jpg"
                color="yellow"
            />

            <BreakingBox 
                title={(<h1>Står Danmarks <br /> Demokraterne <br /> inde for pædofili?</h1>)}
                breakingText=""
                sitesrc={"./Paedo"}
                imgsrc="./pictures/Mika.jpg"
                color="lightblue"
            />

        </div>
    )
}

function handleClick(url) {
    window.location.href = url
}
