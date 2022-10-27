import React from 'react'
import './ArticleBox.scss'
import Header from '../Header/Header'

const ArticleBox = ({ children }) => {
    return (
        <div className="ArticleBox">
            <Header />
            <div className="Article">{children}</div>
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

const UnderTitle = ({ undertitle }) => {
    return (
        <>
            <h2>{undertitle}</h2>
        </>
    )
}

const Article = ({ article }) => {
    return <>{article}</>
}

ArticleBox.Title = Title
ArticleBox.UnderTitle = UnderTitle
ArticleBox.Article = Article

export default ArticleBox
