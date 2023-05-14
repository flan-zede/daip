import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/image/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="/vendor/flag-icon-css/css/flag-icon.min.css" />
                <link rel="stylesheet" href="/vendor/core/core.css" />
                <link rel="stylesheet" href="/css/demo1/style.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="/vendor/core/core.js"></script>
                <script src="/js/template.js"></script>
                <script src="/js/demo.js"></script>
            </body>
        </Html>
    );
}