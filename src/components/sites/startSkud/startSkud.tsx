import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";


const StartSkud: React.FC = () => {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Startskuddet har lydt og valgkampen er begyndt på askov efterskole"/>
                <ArticleBox.Article>
                    <p>
                        Startskuddet har lydt og alle partier er nu i fuld gang med at føre valgkamp.
                        <br />
                        Der bliver forhandlet, diskuteret mellem partierne.
                        <br />
                        følg med hos Æ&#39;ny&#39; hvor vi vil følge valgkampen tæt. og komme med de seneste nyheder.
                    </p>
                </ArticleBox.Article>
                <ArticleBox.date date="Dato: 23/10-2023" />
            </ArticleBox>
        </div>
    );
};

export default StartSkud;
