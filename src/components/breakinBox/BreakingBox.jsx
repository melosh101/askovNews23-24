import React from 'react';
import './BreakingBox.scss';

export default function BreakingBox({title, breakingText, imgsrc, sitesrc, color}) {
  return (
    <div className='BreakingBox'>
        <div
                className="Article"
                onClick={() => handleClick(sitesrc)}
                style={{
                    backgroundColor: color
                }}
            >
                <div className="left">
                    {breakingText ? (<strong>{breakingText}</strong>):(null)}
                        {title}
                </div>
                <div className="right">
                    {imgsrc ? (<img src={imgsrc} style={{backgroundColor:"yellow"}} />):(null)}
                </div>
            </div>
    </div>
  )
}

function handleClick(url) {
    window.location.href = url
}
