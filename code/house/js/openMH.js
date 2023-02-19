var localhost = 'https://www.mhdnf.xyz'
eval(getCryptoJS());
const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
let j1 = CryptoJS.enc.Utf8.parse(linkid);
let jg = CryptoJS.AES.encrypt(j1, j, {
    'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
});
let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
return url