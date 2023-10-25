import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";
import "./mandater.scss";

const DATA = [
    {navn: "Ø (Enhedslisten)",	mandater: 17, logo: "./pictures/logos/enhedslisten.png"},
    {navn: "Å (Alternativet)",	mandater: 14, logo: "./pictures/logos/alternativet.png"},
    {navn: "F (Socialistisk Folkeparti)",	mandater: 17, logo: "./pictures/logos/SF.png"},
    {navn: "B (Radikale Venstre)",	mandater: 14, logo: "./pictures/logos/RadikaleVenstre.png"},
    {navn: "V (Venstre)",	mandater: 15, logo: "./pictures/logos/Venstre.png"},
    {navn: "O (Dansk Folkeparti)",	mandater: 14, logo: "./pictures/logos/DF.png"},
    {navn: "Æ (Danmarksdemokraterne)",	mandater: 12, logo: "./pictures/logos/Danmarksdemokraterne.png"},
    {navn: "C (Det Konservative Folkeparti)",	mandater: 22, logo: "./pictures/logos/DetKonservativeFolkeparti.png"},
    {navn: "I (Liberal Alliance)",	mandater: 21, logo: "./pictures/logos/LiberalAlliance.png"},
    {navn: "A(Socialdemokratiet)",	mandater: 19, logo: "./pictures/logos/Socialdemokratiet.png"},
    {navn: "M (Moderaterne)",	mandater: 14, logo: "./pictures/logos/Moderaterne.png"}
];

const Mandater = () => {
    const dat = DATA.sort((a, b) => {
        return b.mandater - a.mandater;
    });
    
    return (
        <ArticleBox>
            <ArticleBox.Title title="Mandater"/>
            <ArticleBox.Article>
                <table>
                    <thead>
                        <th>
                            <h3 className="thHeadParti">Parti</h3>
                        </th>
                        <th>
                            <h3>Mandater</h3>
                        </th>
                    </thead>
                    <div className="line"></div>
                    <tbody>
                        {dat.map((data, key) => {   
                            return (
                                <tr key={key}>
                                    <td className="parti"><img src={data.logo} alt="logo" width="50"/> <li>{data.navn}</li></td>
                                    <td className="mandater">{data.mandater}</td>
                                </tr>
                            );
                        })
                        }    
                    </tbody>
                    
                </table>
            </ArticleBox.Article>
            <ArticleBox.date date="Dato: 25/10-2023" />
        </ArticleBox>
    );
};

export default Mandater;