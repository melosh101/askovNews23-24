import React from "react";
import "./ArticleBox.scss";
import Header from "../Header/Header";

type ArticleBoxProps = {
    children: React.ReactNode;
};

const ArticleBox = ({ children }: ArticleBoxProps) => {
    return (
        <div className="ArticleBox">
            <Header />
            <div className="Article">{children}</div>
        </div>
    );
};

const Title = ({ title }: { title: string }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

const UnderTitle = ({ undertitle }: { undertitle: string }) => {
    return (
        <>
            <h2>{undertitle}</h2>
        </>
    );
};

const Article = ({ article }: { article: string }) => {
    return <>{article}</>;
};

ArticleBox.Title = Title;
ArticleBox.UnderTitle = UnderTitle;
ArticleBox.Article = Article;

export default ArticleBox;
