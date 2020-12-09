import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* IBM Plex (Latin): 400R */
    @font-face {
        font-family: "IBM Plex Sans";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Latin): 700R */
    @font-face {
        font-family: "IBM Plex Sans";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf")
            format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 400R */
    @font-face {
        font-family: "IBM Plex Sans Thai";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Regular.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Regular.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Regular.ttf")
            format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 500R */
    @font-face {
        font-family: "IBM Plex Sans Thai Medium";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Medium.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Medium.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Medium.ttf")
            format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    /* IBM Plex (Thai): 700R */
    @font-face {
    font-family: "IBM Plex Sans Thai";
        src: url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff2/IBMPlexSansThai-Bold.woff2")
            format("woff2"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/woff/IBMPlexSansThai-Bold.woff")
            format("woff"),
            url("https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans-Thai/fonts/complete/ttf/IBMPlexSansThai-Bold.ttf")
            format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    :root {
        --navbar-brand-image-height: 3rem;
        --navbar-brand-image-margin-right: 0;
        --lm-navbar-bg-image: linear-gradient(89.65deg, #D54143 0%, #FE604A 100%);
        --lm-navbar-bg-color: #FE604A;
        --navbar-border-width: 0;
        --lm-navbar-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        --lm-navbar-link-text-color: white;
        --lm-navbar-link-text-color-hover: white;
        --lm-navbar-link-active-text-color: white;
        --lm-navbar-link-active-text-color-hover: white;
    }

    .nav-link:hover,
    .nav-item.active>.nav-link {
        text-decoration: underline;
    }

    html {
       scroll-behavior: smooth;
    }

    body {
        font-family: 'IBM Plex Sans Thai', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        min-height: 100vh;
        margin: 0;
    }
`;
