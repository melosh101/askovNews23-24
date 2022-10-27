import React from 'react'
import ArticleBox from '../../articleBox/ArticleBox'

export default function Videoer() {
    return (
        <div>
            <ArticleBox>
                <ArticleBox.Title title="Videoer" />
                {/* <ArticleBox.UnderTitle undertitle="undertitel" /> */}
                <ArticleBox.Article
                    article={
                        <p>
                            <img
                                src="./pictures/video.png"
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                }}
                                onClick={() =>
                                    clickHandler(
                                        'https://askovefterskole-my.sharepoint.com/:v:/g/personal/t218_askovefterskole_dk/EWdtHcOFlDhMkbfhkGkXD4gBKSJGkHbxhGtZ6asHcwbEAQ?e=Y0jWtu'
                                    )
                                }
                            />
                        </p>
                    }
                />
            </ArticleBox>
        </div>
    )
}

function clickHandler(url) {
    window.open(url)
}
