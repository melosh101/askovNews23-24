import React from 'react'
import './MainPage.scss'

export default function MainPage() {
    return (
        <div className="MainPage">
            <div
                className="Article"
                onClick={() => handleClick('./Kvindehaderne')}
            >
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>
                        Hader Det <br /> Konservative <br /> Folkeparti <br />{' '}
                        kvinder?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Magne.jpg" alt="KASPER" />
                </div>
            </div>
            <div
                className="Article"
                onClick={() => handleClick('./BlueScandal')}
            >
                <div className="left">
                    <strong>BREAKING:</strong>
                    <h1>
                        Skandale på <h1 className="blue">blå</h1> blok
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Kasper.jpg" alt="KASPER" />
                </div>
            </div>
            <div
                className="Article blueA"
                onClick={() => handleClick('./Paedo')}
            >
                <div className="left">
                    <h1>
                        Står Danmarks <br /> demokraterne <br /> inde for
                        Pædofili?
                    </h1>
                </div>
                <div className="right">
                    <img src="./pictures/Mika.jpg" alt="MIKA" />
                </div>
            </div>
        </div>
    )
}

function handleClick(url) {
    window.location.href = url
}
