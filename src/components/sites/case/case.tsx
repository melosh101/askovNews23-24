import React from "react";
import ArticleBox from "../../articleBox/ArticleBox";

const Case = () => {
    return (
        <ArticleBox>
            <ArticleBox.Article>
                <iframe
                    height="450"
                    width="800"
                    src="https://www.youtube-nocookie.com/embed/mdrfGjJSdPk?si=L97Vwal7nacm0Rj2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </ArticleBox.Article>
        </ArticleBox>
    );
};

export default Case;
