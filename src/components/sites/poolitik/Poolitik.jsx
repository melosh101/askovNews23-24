import React from 'react'
import './Poolitik.scss'
import Header from '../../Header/Header'

export default function Poolitik() {
    return (
        <div className="Poolitik">
            <Header />
            <div className="article">
                <h1>Poolitik</h1>
                <h2>DF vil hellere spille pool.</h2>
                <p>
                    Det skete i går, DFs politiske ordfører udtalte sig “Kan i
                    ikke skrive om hvor god jeg er til pool?” <br />
                    <br />
                    Da det er første gang vi får noget input fra DF er vi meget
                    overraskede over at det handler om pool over politik.
                    <br />
                    <br />
                    Er det sådan partiet har lyst til at blive repræsenteret? Er
                    de virkelig fuldstændig ligeglade med ikke bare andre, men
                    også med sig selv. <br />
                    <br />
                    Og kan man virkelig stole på et parti der foretrækker pool
                    over politik?
                </p>
            </div>
        </div>
    )
}
