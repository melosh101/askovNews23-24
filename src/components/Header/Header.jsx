import React from 'react'
import './Header.scss'

export default function TopBar() {
    return (
        <div className="TopBar">
            <div className="left">
                <img
                    src="logo.jpg"
                    alt="logo"
                    width={100}
                    onClick={() => ClickEvent()}
                />
                <div className="text">
                    <h3>Æ'ny'</h3>
                    <p>Askov Efterskolevalg</p>
                </div>
            </div>
            <div className="right"></div>
        </div>
    )
}

function ClickEvent() {
    window.location.href = './'
}
