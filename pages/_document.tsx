import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/image/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"/>
                <link rel="stylesheet" href="/vendor/font-awesome/all.min.css"/>
                <link rel="stylesheet" href="/vendor/flag-icon-css/css/flag-icon.min.css"/>
                <link rel="stylesheet" href="/vendor/core/core.css"/>
                <link rel="stylesheet" href="/css/demo1/style.min.css"/>
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="/vendor/core/core.js"></script>
                <script src="/js/template.js"></script>
            </body>
        </Html>
    )
}