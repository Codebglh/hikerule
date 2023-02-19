//本代码仅用于个人学习，请勿用于其他作用，下载后请24小时内删除，代码虽然是公开学习的，但请尊重作者，应留下说明
var updateLog = '2022/09/26 初制作模版';
var version = {
    author: "bgcode",
    ver: "0.0.1",
    Id: "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/moban.js",
    update: '2023/1/11 9:27',
    info: updateLog,
    ok: 'https://okjx.cc/?url=',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/',
};
var erjimenu = [
    {
        title: "剧情简介",
        url: "empty#noRecordHistory##noHistory#",
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/message.png',
        col_type: 'icon_small_3'
    },
    {
        title: "观影设置",
        url: $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
            require(config.依赖);
            shezhi();
        }),
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/setting.png',
        col_type: 'icon_small_3'
    },
    {
        title: "更多片源",
        url: "empty#noRecordHistory##noHistory#",
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/search.png',

        col_type: 'icon_small_3',

    },
    {
        title: getMyVar('shsort') == '1' ? '““””<b><span style="color: #cb5656">∨</span></b>' : '““””<b><span style="color: #00FFFF">∧</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('shsort') == '1') {
                putMyVar('shsort', '0');
            } else {
                putMyVar('shsort', '1');
            }
            ;
            refreshPage(false);
            return 'toast://切换排序成功'
        }),
        col_type: 'scroll_button'
    },
    {
        title: getMyVar('path') == '0' ? '““””<b><span style="color: #cb5656">线路一</span></b>' : '““””<b><span style="color: #00FFFF">线路一</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('path') == '0') {
                putMyVar('path', '0');
            }
            refreshPage(false);
            return 'toast://切换路线成功'
        }),
        col_type: 'scroll_button'
    },
    {
        title: getMyVar('path') == '1' ? '““””<b><span style="color: #cb5656">线路二</span></b>' : '““””<b><span style="color:	#00FFFF">线路二</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('path') == '1') {
                putMyVar('path', '1');
            }

            refreshPage(false);
            return 'toast://切换路线成功'
        }),
        col_type: 'scroll_button'
    },
    {
        title: getMyVar('path') == '2' ? '““””<b><span style="color: #cb5656">线路三</span></b>' : '““””<b><span style="color:	#00FFFF">线路三</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('path') == '2') {

                putMyVar('path', '2');
            }
            ;
            refreshPage(false);
            return 'toast://切换路线成功'
        }),
        col_type: 'scroll_button'
    },
    {
        title: getMyVar('path') == '3' ? '““””<b><span style="color: #cb5656">线路四</span></b>' : '““””<b><span style="color:	#00FFFF">线路四</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('path') == '3') {
                putMyVar('path', '3');
            }
            ;
            refreshPage(false);
            return 'toast://切换路线成功'
        }),
        col_type: 'scroll_button'
    },
    {
        title: getMyVar('path') == '4' ? '““””<b><span style="color: #cb5656">线路五</span></b>' : '““””<b><span style="color:	#00FFFF">线路五</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('path') == '4') {

                putMyVar('path', '4');
            }
            ;
            refreshPage(false);
            return 'toast://切换路线成功'
        }),
        col_type: 'scroll_button'
    },
    {
        col_type: 'line'
    }
]
var yijimenu = [{
    title: "收藏", url: "hiker://collection", pic_url: version.url + 'src/2.png', col_type: 'icon_4',
}, {
    title: "历史", url: "hiker://history", pic_url: version.url + 'src/3.png', col_type: 'icon_4',
}, {
    title: "设置", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        shezhi();
    }), pic_url: version.url + 'src/4.png', col_type: 'icon_4',
}, {
    title: "搜索", url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        require(config.依赖);
        sousuo();
    }), pic_url: version.url + 'src/5.png', col_type: 'icon_4',
}, {
    col_type: 'line'
}]

function yiji() {
    var d = [];
    if (MY_PAGE == 1) { //第一页的筛选
        for (var i in yijimenu) {
            d.push(
                yijimenu [i]
            )
        }
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
            url: b + "#immersiveTheme##noRecordHistory##noHistory#",
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
        title: '‘‘’’<b>' + SM + '</b>' + "\n" + "作者：" + ZZ + "\n" + "类型：" + a1 + a2,
        desc: '‘‘’’<font color="#f8ecc9">' + GX + "\n" + XQ + "</font>",
        pic_url: FM,
        url: FM + "@Referer=#noHistory##noRecordHistory#",
        col_type: 'movie_1_vertical_pic_blur',
        extra: {"gradient": true},
    })
    for (var i in erjimenu) {
        d.push(erjimenu[i]
        )
    }

    // var shsort = true
    var xpat = ['//*[@id=\"xl1\"]/@onclick', '//*[@id=\"xl2\"]/@onclick', "//*[@id=\"xl3\"]/@onclick", '//*[@id=\"xl4\"]/@onclick', '//*[@id=\"xl5\"]/@onclick']

    var BT = xpathArray(html, "//*[@class=\"cell-title\"]/text()");
    var LJ = xpathArray(html, xpat[getMyVar('path')]);
    log(LJ[0]);
    if (getMyVar('shsort') == '0') {
        for (var i = 0; i < BT.length; i++) {
            var a = LJ[i];
            let url = eval(a)
            d.push({
                title: "第" + (i + 1) + "话",
                url: $(url).lazyRule(() => {
                    require(config.依赖);
                    return sanji(input)
                }), col_type: 'text_4',
            });

        }
    } else {
        for (var i = BT.length - 1; i >= 0; i--) {
            var a = LJ[i];
            let url = eval(a)
            d.push({
                title: "第" + (i + 1) + "话",
                url: $(url).lazyRule(() => {
                    require(config.依赖);
                    return sanji(input)
                }), col_type: 'text_4',
            });

        }
    }

    d.push({
        desc: "‘‘’’<small><font color=#f20c00>此规则仅限学习交流使用，请于导入后24小时内删除，任何团体或个人不得以任何方式方法传播此规则的整体或部分！</font></small>",
        url: "toast://温馨提示：且用且珍惜！",
        col_type: 'text_center_1',
    })
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
    var searchurl = "https://www.mhdnf.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=&filmName=";
    var d = [];
    d.push(
        {
            title: '🔍',
            url: $.toString((searchurl) => {
                return "hiker://erji.js?rule=" + searchurl + input;
            }, searchurl),
            desc: "搜你想看的...",
            col_type: 'input',
            extra: {
                titleVisible: true
            }
        }
    )


    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });
    setResult(d);
};


function openMH(bookid, linkid, path) {
    var localhost = 'https://www.mhdnf.xyz'
    eval(getCryptoJS());
    const j = CryptoJS.enc.Utf8.parse('12cdefgabcdefg12');
    let j1 = CryptoJS.enc.Utf8.parse(linkid);
    let jg = CryptoJS.AES.encrypt(j1, j, {
        'mode': CryptoJS.mode.ECB, 'padding': CryptoJS.pad.Pkcs7
    });
    let url = localhost + '/play?linkId=' + linkid + '&bookId=' + bookid + "&path=" + path + '&key=' + jg.toString()
    return url
}

function lookset() {

}
