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
            title: "收藏", url: "hiker://collection", pic_url: version.url + 'src/2.png', col_type: 'icon_4',
        });
        d.push({
            title: "历史", url: "hiker://history", pic_url: version.url + 'src/3.png', col_type: 'icon_4',
        });
        d.push({
            title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                require(config.依赖);
                shezhi();
            }), pic_url: version.url + 'src/4.png', col_type: 'icon_4',
        });
        d.push({
            title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
                require(config.依赖);
                sousuo();
            }), pic_url: version.url + 'src/5.png', col_type: 'icon_4',
        });

        d.push({
            col_type: 'line'
        });

    }
    var url = 'https://www.mhww.xyz'
    var MY_URL = " https://www.mhww.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=%E9%9F%93%E6%BC%AB&filmName=";
    var html = fetch(MY_URL);
    var BT = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
    var LJ = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
    var XQ = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
    var TP = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];
        var b = url + a.replace(/window\.open\(\'|\'\)/g, "")
        d.push({
            title: BT[i],
            desc: XQ[i].replace("\r\n", ""),
            pic_url: TP[i],
            url: b + "#immersiveTheme#",
            col_type: 'movie_3',

        });

    }


    setResult(d);
};

function erji() {
    var html = getResCode()
    var d = [];
    var FM = xpath(html, "//*[@id=\"book\"]/div[1]/p[1]/img/@src")
    var SM = xpath(html, "//*[@id=\"book\"]/div[1]/h1/text()")
    var ZZ = xpath(html, "//*[@id=\"book\"]/div[1]/p[2]/a/text()")
    var a1 = xpath(html, "//*[@id=\"book\"]/div[1]/h1/span[1]/text()")
    var a2 = xpath(html, "//*[@id=\"book\"]/div[1]/h1/span[2]/text()")
    var GX = xpath(html, "//*[@id=\"book\"]/div[1]/p[3]/text()")
    var XQ = xpath(html, "//*[@id=\"book\"]/div[1]/p[4]/text()")
    d.push({
        title: "‘‘’’<b>" + SM + '</b>' + "\n" + ' <small> \n作者：<font color="#FA7298">' + ZZ + '/n' +
            '</font> \n类型：' + a1 + a2 +
            "</small>",
        desc: '‘‘’’<font color="#f8ecc9">' + GX + "\n" + XQ + "</font>",

        pic_url: FM,
        col_type: 'movie_1_vertical_pic_blur',

    })


    var BT = xpathArray(html, "//*[@class=\"cell-title\"]/text()");
    var LJ = xpathArray(html, "//*[@id=\"xl3\"]/@onclick");
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];
        let url = eval(a)
        // log(url)
        d.push({
            title: BT[i], url: $(url).lazyRule(() => {
                require(config.依赖);
                return sanji(input)
            }), col_type: 'text_2',
        });

    }
    setResult(d);
}

function sanji(url) {
    var html = fetch(url)
    var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
    var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
    var ll = "pics://"
    for (var i = 0; i < 3; i++) {
        ll = ll + xx[i] + '&&'
    }
    for (var i = 0; i < BT.length; i++) {

        if (i == BT.length - 1) {
            ll = ll + BT[i]
        } else {
            ll = ll + BT[i] + '&&'
        }
    }

    return ll

}

function search() {
    var d = [];
    var html = getResCode()
    var url = 'https://www.mhww.xyz'
    var BT = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
    var LJ = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
    var XQ = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
    var TP = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
    for (var i = 0; i < BT.length; i++) {
        var a = LJ[i];
        var b = url + a.replace(/window\.open\(\'|\'\)/g, "")
        d.push({
            title: BT[i],
            url: b + "#immersiveTheme#",
            img: TP[i],
            desc: XQ[i].replace("\r\n", ""),
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
    var url = 'https://www.mhww.xyz'
    // var MY_URL = " https://www.mhww.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=%E9%9F%93%E6%BC%AB&filmName=" + input;
    // var html = fetch(MY_URL);
    // var BT = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
    // var LJ = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
    // var XQ = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
    // var TP = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
    // for (var i = 0; i < BT.length; i++) {
    //     var a = LJ[i];
    //     var b = url + a.replace(/window\.open\(\'|\'\)/g, "")
    //     d.push({
    //         title: BT[i],
    //         url: b + "#immersiveTheme#",
    //         img: TP[i],
    //         desc: XQ[i].replace("\r\n", ""),
    //     });
    //
    // }
    //

    setResult(d);
};


function a(x) {
    eval(getCryptoJS());
    const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    let j1 = CryptoJS.enc.Utf8.parse(x);
    let jg = CryptoJS.AES.encrypt(j1, j, {
        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    });
    return jg.toString();
}


function openMH(bookid, linkid, path) {
    var localhost = 'https://www.mhdnf.xyz'
    // var idx = id.toString()
    let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + a(linkid)
    return url
}

