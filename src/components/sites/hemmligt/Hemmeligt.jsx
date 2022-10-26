import React from 'react'
import Header from '../../Header/Header'
import './Hemmeligt.scss'

export default function Hemmeligt() {
    return (
        <div className="Hemmeligt">
            <Header />
            <div className="article">
                <h1>Hemmeligt møde?</h1>
                <h2>Hvem er inviteret?</h2>
                <p>
                    Et ikke så hemmeligt møde har lige taget sted mellem SF,
                    Radikal Venstre og moderaterne?
                    <br />
                    <br />
                    Er det starten på en alliance? og hvorfor vælger de to
                    midterpartier, bidt sig fast i det ellers Meget røde parti?
                    <br />
                    <br />
                    Og hvordan vil socialdemokraterne reagere, når de finder ud
                    af at de ikke er inviterede?
                    <br />
                    <br />
                    Det kunne være starten på en solid alliance over midten,
                    eller starten på en rød bloks krig.
                </p>
            </div>
        </div>
    )
}
