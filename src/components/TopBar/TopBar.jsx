import React from "react";
import './TopBar.scss';

export default function TopBar(){
    return (
        <div className="TopBar">
            <div className="left">
                <img src="logo192.png" alt="" width={100} />
                <h2>ØX23</h2>
            </div>
            <div className="right">
                <h3>Hello there!</h3>
            </div>
        </div>
    )
}