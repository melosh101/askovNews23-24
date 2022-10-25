import React from 'react'
import './BlueScandal.scss'
import Header from './../../Header/Header'

export default function BlueScandal() {
    return (
        <div className="BlueScandal">
            <Header />
            <div className="article">
                <h1>Skandale på blå blok.</h1>
                <p>
                    {' '}
                    Blå Blok var hurtigt ude af starthullerne, og fik på blot få
                    timer efter valg kampagnens start allerede lavet alliancer
                    på kryds og tværs af mærkesager. <br />
                    <br />
                    Men er det egentligt så enkelt at lægge mærkesagerne på
                    hylden, og gå på kompromis? <br />
                    <br />
                    Det er det i hvert faldt for Nye borgerliges formand Kasper
                    Werup, som i et forsøg på at få Venstre med i en “Blå
                    alliance” lyver om partiets mærkesager.
                    <br />
                    <br />
                    Var det strategi eller skyder Ny borgerlige sig selv i
                    foden. <br />
                    Hvilken effekt kommer det til at have på den “Blå alliance”
                    og samarbejdet på blå blok?
                    <br />
                </p>
            </div>
        </div>
    )
}
