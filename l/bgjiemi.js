const CryptoJS = require("crypto-js");

function Encrypt(id) {
    var _0x36c4b0 = {
        'GikQP': function _0x4e097b(_0x1c0739, _0x2d281b) {
            return _0x1c0739 + _0x2d281b;
        },
        'yAZXg': 'defg12',
        'tDppi': 'cdefefga',
        'okkgt': '12cdefgabc'
    };
    var _0x3dfce5 = '10|1|0|9|7|6|4|2|3|8|5'['split']('|'), i = 0;
    while (!![]) {
        switch (_0x3dfce5[i++]) {
            case '0':
                var _0x260583 = 'fg12';
                continue;
            case '1':
                var _0xb14205 = 'efga';
                continue;
            case '2':
                var _0x149db8 = CryptoJS['enc']['Utf8']['parse'](_0x36c4b0['GikQP'](_0x49eef0, _0x330991));
                continue;
            case '3':
                var _0x1ca75a = CryptoJS['enc']['Utf8']['parse'](id);
                continue;
            case '4':
                var _0x4b70eb = CryptoJS['enc']['Utf8']['parse'](_0x36c4b0['GikQP'](_0xb14205, _0x25ca91));
                continue;
            case '5':
                return _0x42dbb6['toString']();
            case '6':
                var _0x330991 = _0x36c4b0['yAZXg'];
                continue;
            case '7':
                var _0x3a29de = _0x36c4b0['tDppi'];
                continue;
            case '8':
                var _0x42dbb6 = CryptoJS['AES']['encrypt'](_0x1ca75a, _0x149db8, {
                    'mode': CryptoJS['mode']['ECB'],
                    'padding': CryptoJS['pad']['Pkcs7']
                });
                continue;
            case '9':
                var _0x25ca91 = 'cdefg';
                continue;
            case '10':
                var _0x49eef0 = _0x36c4b0['okkgt'];
                continue;
        }
        break;
    }
}

// function openHM(bookid, id, name) {
//     var localhost = 'https://www.mhdnf.xyz/'
//     const url = localhost + '/play?linkId=' + bookid + '&bookId=' + id + "&path=" + name + '&key=' + Encrypt(bookid)
//     return url
// }

console.log(Encrypt(157551))

//https://www.mhdnf.xyz/play?linkId=1575514&bookId=1497&path=1&key=kZhVYZwYmsj0FNT3+1z9+Q==