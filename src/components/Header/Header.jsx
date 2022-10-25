import React from "react";
import './Header.scss';

export default function TopBar(){
    return (
        <div className="TopBar">
            <div className="left">
                <img src="logo.jpg" alt="" width={100} onClick={() => ClickEvent()} />
                <div className="text">
                    <h3>ØX23</h3>
                    <p>Askov Efterskolevalg</p>
                </div>
            </div>
            <div className="right">
                
            </div>
        </div>
    )
}

function ClickEvent() {
    window.location.href = './';
}