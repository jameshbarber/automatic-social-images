const generateImage = (color) => {
    return encodeURI(`<svg width="638" height="320" viewBox="0 0 638 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M40 320H598C620.091 320 638 302.091 638 280V216.548C617.773 205.794 604 184.506 604 160C604 135.494 617.773 114.206 638 103.452V40C638 17.9086 620.038 0 597.947 0H40.0534C17.962 0 0 17.9086 0 40V103.452C20.2272 114.206 34 135.495 34 160C34 184.505 20.2272 205.794 0 216.548V280C0 302.091 17.9086 320 40 320Z" fill="`) + `%23${color}` + encodeURI(`" />
    </svg>
    `)
}

export default generateImage