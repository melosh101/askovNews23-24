import React from 'react'

function SimpleComponent() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <iframe
                plausible-embed
                src="https://plausible.io/share/melosh.space?auth=BaBzkaGyPK4IGFrS17YkS&embed=true&theme=light"
                scrolling="no"
                frameborder="0"
                loading="lazy"
                style="width: 1px; min-width: 100%; height: 1600px;"
            ></iframe>
            <div style="font-size: 14px; padding-bottom: 14px;">
                Stats powered by{' '}
                <a
                    target="_blank"
                    style="color: #4F46E5; text-decoration: underline;"
                    href="https://plausible.io"
                >
                    Plausible Analytics
                </a>
            </div>
            <script async src="https://plausible.io/js/embed.host.js"></script>
        </div>
    )
}

export default SimpleComponent
