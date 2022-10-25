import React from 'react';
import './MainPage.scss';

export default function MainPage() {
    return (
    <div className='MainPage'>
        <div className='Article' onClick={() => handleClick()}>
            <div className='left'>
                <strong>BREAKING:</strong>
                <h1>Magne's <br />rettigheder <br />fjernet?</h1>
            </div>
            <div className='right'>
                <img src="./pictures/Magne.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

function handleClick(){
    window.location.href = 'https://www.ingenting.tk';
}