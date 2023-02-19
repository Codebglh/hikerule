let localhost = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/house/js/';

function yiji() {
    require(config.依赖);
    xiazai();
    require(localhost + "yiji.js");
}

function erji() {
    require(localhost + "erji.js")
}

function sanji(input) {
    // var url = eval(input)
    // var html = fetch(url)
    // var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
    // var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
    // var ll = "pics://"
    // for (var i = 0; i < 3; i++) {
    //     ll = ll + xx[i] + '&&'
    // }
    // for (var i = 0; i < BT.length; i++) {
    //
    //     if (i == BT.length - 1) {
    //         ll = ll + BT[i]
    //     } else {
    //         ll = ll + BT[i] + '&&'
    //     }
    // }
    require(localhost + "sanji.js")
}

function search() {
    require(localhost + "search.js")
}


function xiazai() {
    let name = 'hiker://files/rules/bgHouse/js/yiji.js';
    let file = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/YJ.js'
    downloadFile(file, name)
}

function openMH(bookid, linkid, path) {
    // var localhost = 'https://www.mhdnf.xyz'
    // eval(getCryptoJS());
    // const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    // let j1 = CryptoJS.enc.Utf8.parse(linkid);
    // let jg = CryptoJS.AES.encrypt(j1, j, {
    //     'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    // });
    // let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
    // return url
    require(localhost + "openMH.js")
}
