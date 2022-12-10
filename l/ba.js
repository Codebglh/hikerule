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
        const Color = "#3399cc";
        const categorys = ['全部', '热门资源', 'f2d资源', 'hy资源', 'zmw资源', 'msn资源', 'ysj资源', 'xn资源', 'bp资源', 'xsm资源', 'hav资源', '9c资源', 'btt资源', 'lb资源'];
        const listTabs = ['', 'zizhi', 'f2d', 'hy', 'zmw', 'msn', 'ysj', 'xn', 'bp', 'xsm', 'hav', '9c', 'btt', 'lb'];
        d.push({
            col_type: 'line'
        });
        for (var i in categorys) {
            d.push({
                title: getMyVar('listTab', '') === listTabs[i] ? '““””<b><span style="color:blue">' + categorys[i] + '</span></b>' : categorys[i],
                url: $('#noLoading#').lazyRule((listTab) => {
                    putMyVar('listTab', listTab);
                    refreshPage(false);
                    return "hiker://empty";
                }, listTabs[i]),
                col_type: 'scroll_button'
            });
        }
    }
    var url = 'http://51smt4.xyz/api.php/provide/vod/?ac=detail&t=23&pg=4'
    var MY_URL = "http://51smt4.xyz/api.php/provide/vod/?ac=detail&t=" + getMyVar('listTab', '') + "&pg=" + MY_PAGE;
    var html = fetch(MY_URL);
    let av = JSON.parse(html)
    log(av)
    var BT = xpathArray(html, 标题);
    var LJ = xpathArray(html, 链接);
    var XQ = xpathArray(html, 详情);
    // var TP = xpathArray(html, 图片);

    // log(TP)
    for (var i in BT) {
        d.push({
            title: BT[i],
            desc: XQ[i].replace("\r\n", ""),
            // pic_url: TP[i],
            url: url + LJ[i] + "#immersiveTheme#",
            col_type: 'text_2',
        });

    }


    setResult(d);
};


function erji() {

    var d = [];
    var html = getResCode();
    d.push({
        title: xpath(html, 标题),
        desc: xpath(html, 描述),
        img: xpath(html, 图片) + '#noHistory#',
        url: MY_URL + '#noHistory#',
        col_type: 'movie_1_vertical_pic_blur'
    });

    var XL = xpathArray(html, 线路);


    var easy = $("").lazyRule((path) => {
        eval(request(path));
        return lazy(input);

    }, ("hiker://files/rules/Src/Juying/自动匹配免嗅.js"));

    for (var i = 1; i < XL.length + 1; i++) {
        var url = 网站 + XL[i - 1].replace(/amp\;/g, "")
        d.push({
            title: i + "",
            url: url + easy,
            col_type: 'text_4',
        });
    }


    setResult(d);
}