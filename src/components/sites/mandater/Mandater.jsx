import React from 'react';
import './Mandater.scss';
import Header from './../../Header/Header'

const data = [
    { logoPath: "", parti: "Socialdemokratiet", mandater: 0 },
    { logoPath: "", parti: "Venstre", mandater: 0 },
    { logoPath: "", parti: "Den Konservative Folkeparti", mandater: 0 },
    { logoPath: "", parti: "Socialistisk Folkeparti", mandater: 0 },
    { logoPath: "", parti: "Radikale Venstre", mandater: 0 },
    { logoPath: "", parti: "Enhedslisten", mandater: 0 },
    { logoPath: "", parti: "Danmarksdemokraterne", mandater: 0 },
    { logoPath: "", parti: "Dansk Folkeparti", mandater: 0 },
    { logoPath: "", parti: "Nye Borgerlige", mandater: 0 },
    { logoPath: "", parti: "Liberal Alliance", mandater: 0 },
    { logoPath: "", parti: "Frie Grønne", mandater: 0 },
    { logoPath: "", parti: "Alternativet", mandater: 0 },
    { logoPath: "", parti: "Moderaterne", mandater: 0 },
    { logoPath: "", parti: "Grønlandske mandater", mandater: 0 },
    { logoPath: "", parti: "Færøske mandater", mandater: 0 },
]

export default function Mandater() {
  return (
    <div className='Mandater'>
        <Header />
        <div className='mainContent'>
            <table>
                <tr>
                    <th>Logo</th>
                    <th>Parti</th>
                    <th>Mandater</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td><img src={val.logoPath} alt="" width={50}/></td>
                            <td>{val.parti}</td>
                            <td>{val.mandater}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}
