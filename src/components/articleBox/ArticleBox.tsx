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

const Article = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return children;
};

const Image = ({ src, alt, credits }: { src: string; alt: string, credits?: string }) => {
    return (
        <div className="article_image">
            <img src={src} alt={alt} />
            <li className="image_text">{alt} {credits? ` - ${credits}` : ""}</li>
        </div>
    );
};
const Date = ({ date }: { date?: string }) => {
    return (
        <>
            <li className="date">{date}</li>
        </>
    );
};

ArticleBox.Title = Title;
ArticleBox.UnderTitle = UnderTitle;
ArticleBox.Article = Article;
ArticleBox.date = Date;
ArticleBox.Image = Image;

export default ArticleBox;
