var updateLog = '2022/09/26 初制作模版';
var version = {
    author: "bgcode",
    ver: "0.0.1",
    Id: "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/moban.js",
    update: '2022/09/26 14:25',
    info: updateLog,
    ok: 'https://okjx.cc/?url=',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/',
};

function yiji() {
    var d = [];
    if (MY_PAGE == 1) { //第一页的筛选
        d.push({
            title: "收藏",
            url: "hiker://collection",
            pic_url: version.url + 'src/2.png',
            col_type: 'icon_4',
        });
        d.push({
            title: "历史",
            url: "hiker://history",
            pic_url: version.url + 'src/3.png',
            col_type: 'icon_4',
        });
        d.push({
            title: "设置",
            url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                require(config.依赖);
                shezhi();
            }),
            pic_url: version.url + 'src/4.png',
            col_type: 'icon_4',
        });
        d.push({
            title: "搜索",
            url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                require(config.依赖);
                sousuo();
            }),
            pic_url: version.url + 'src/5.png',
            col_type: 'icon_4',
        });

        d.push({
            col_type: 'line'
        });

    }
    var url = 'https://www.mhww.xyz'
    var MY_URL = " https://www.mhww.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=%E9%9F%93%E6%BC%AB&filmName=";
    var html = fetch(MY_URL);
    const 标题 = '//*[@id="booklist"]/div/div/div/p/span/text()';
    const 链接 = '//*[@id="booklist"]/div/div/@onclick';
    const 详情 = '//*[@id="booklist"]/div/div/div[2]/p[2]/text()';
    // const 图片 = '//*[@id="booklist"]/div/div/div[1]/img/@src';
    const BT = xpathArray(html, 标题);
    const LJ = xpathArray(html, 链接);
    const XQ = xpathArray(html, 详情);
    // const TP = xpathArray(html, 图片);
    //
    // log(TP)
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];
        const b = url + a.replace(/window\.open\(\'|\'\)/g, "")
        d.push({

            title: BT[i],
            desc: XQ[i].replace("\r\n", ""),
            // pic_url: TP[i],
            url: b,
            col_type: 'movie_3',

        })
        ;

    }


    setResult(d);
};

function erji() {
    var html = getResCode()
    var d = [];

    var BT = xpathArray(html, "//*[@class=\"cell-title\"]/text()");
    var LJ = xpathArray(html, "//*[@id=\"xl3\"]/@onclick");
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];

        d.push({
            title: BT[i],
            url: a + "#immersiveTheme#",
            col_type: 'text_2',
        });

    }
    setResult(d);
}

function zhuye() {
    var d = [];
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};


function shezhi() {
    addListener("onClose", $.toString(() => {
        clearMyVar('shezhi$input');
    }));
    var d = [];
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};


function sousuo() {
    addListener("onClose", $.toString(() => {
        clearMyVar('sousuo$input');
    }));
    var d = [];
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};

const CryptoJS = require("https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/crypto-js.js");


function Encrypt(_0x157851) {
    var _0x36c4b0 = {
        'GikQP': function _0x4e097b(_0x1c0739, _0x2d281b) {
            return _0x1c0739 + _0x2d281b;
        },
        'yAZXg': 'defg12',
        'tDppi': 'cdefefga',
        'okkgt': '12cdefgabc'
    };
    var _0x3dfce5 = '10|1|0|9|7|6|4|2|3|8|5'['split']('|'), _0x4bbc59 = 0;
    while (!![]) {
        switch (_0x3dfce5[_0x4bbc59++]) {
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
                var _0x1ca75a = CryptoJS['enc']['Utf8']['parse'](_0x157851);
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

function openMH(bookid, id, name) {
    var localhost = 'https://www.mhdnf.xyz/'
    const url = localhost + '/play?linkId=' + bookid + '&bookId=' + id + "&path=" + name + '&key=' + Encrypt(id)
    return url
}

