const fs = require('fs')
import generateImage from './bg-image';

function getCss(color) {

    const bgImage = generateImage(color);
    console.log(bgImage)

    return `

    @font-face {
        font-family: 'Aeonik Pro';
        font-style:  normal;
        font-weight: 700;
        src: url('http://localhost:3000/fonts/AeonikPro-Bold.woff2') format('woff2'),
    }

    @font-face {
        font-family: 'Aeonik Pro';
        font-style:  normal;
        font-weight: 500;
        src: url('http://localhost:3000/fonts/AeonikPro-Medium.woff2') format('woff2'),
    }

    body {
        background-size: contain;
        height: 100vh;
        text-align: center;
        background-image: url("data:image/svg+xml;utf8, ${bgImage}");
        mask-size: 100vmin;
        mask-repeat: no-repeat;
        mask-position: center;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .spacer {
        margin: 50px;
    }
    
    .voucher-code {
        font-family: 'Aeonik Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 256px;
        line-height: 256px;
        color: #FFFFFF;
        font-family: 'Aeonik Pro';
        font-weight: 700;
        color: white;
        margin-top: 96px;
    }

    .voucher-message {
        font-family: 'Aeonik Pro';
font-style: normal;
font-weight: 700;
font-size: 96px;
line-height: 112px;
color: white;
text-align: center;
    }

    .voucher-conditions {
        margin-top: 80px;
font-family: 'Aeonik Pro';
font-style: normal;
font-weight: 500;
font-size: 40px;
color: white;
line-height: 56px;
    }
    
    
    `;
}

export function getHtml(parsedReq) {
    const { voucher, conditions, type, color, message } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Automatic Social Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(color)}
    </style>
    <body>
        <div>
            <div class="voucher-code">${sanitizeHtml(voucher)}${type === 'absolute' ? "&euro;" : "%"}</div>
            </div>
            <div class="voucher-message">
            ${message ?? "Startguthaben"}
            </div>
            <div class="voucher-conditions">${sanitizeHtml(conditions)}
            </div>
        </div>
    </body>
</html>`;
}

const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
};

export function sanitizeHtml(html) {
    return String(html).replace(/[&<>"'\/]/g, (key) => entityMap[key]);
}
