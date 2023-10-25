import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";

const MeningsMåling = () => {
    return (
        <ArticleBox>
            <ArticleBox.Title title="Meningsmålingerne er inde: Lys fremtid for Dansk Folkeparti og medlemmer af Alternativet" />
            <ArticleBox.Article>
                <p>
                    Æ’ NY’ har foretaget en meningsmåling iblandt valgkomitéen.
                    De professionelle har svaret og der hentydes til, at det kan
                    blive et godt valg for Danskfolkeparti. Desuden er
                    Alternativet, Enhedslisten og Det Konservative Folkeparti
                    fremhævet.
                </p>
                <p>
                    Især Alternativets partileder Melvin Bak Obsen blev
                    fremhævet. Charlie Lund Friis og Line Ryberg Boe er også
                    nævnt.
                </p>
                <p>
                    Det må dog nævnes at meningsmålingen ikke er afgørende for
                    valgets resultat.
                </p>
                <br />
                <p>
                    resultaterne kan ses <a href="/mandater">her</a>
                </p>
            </ArticleBox.Article>
        </ArticleBox>
    );
};

export default MeningsMåling;
