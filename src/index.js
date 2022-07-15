module.exports = function check(str, bracketsConfig) {
    let delim = '', strTmp = '';
    while (strTmp != str) {
        strTmp = str;
        for (let i = 0; i < bracketsConfig.length; i++) {
            delim = bracketsConfig[i].join('');
            while (str.includes(delim)) {
                str = str.replaceAll(delim, '')
            }
        }
    }
    return str == '';
}
