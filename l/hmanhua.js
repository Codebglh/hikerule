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
            title: getMyVar('SrcJuying$listTab', '') === listTabs[i] ? '““””<b><span style="color:blue">' + categorys[i] + '</span></b>' : categorys[i],
            url: $('#noLoading#').lazyRule((listTab) => {
                putMyVar('SrcJuying$listTab', listTab);
                refreshPage(false);
                return "hiker://empty";
            }, listTabs[i]),
            col_type: 'scroll_button'
        });
    }
    var url = 'https://www.mhww.xyz'
    var MY_URL = "https://www.onetgb.xyz/0/index?filmName=&page.currentPage=" + MY_PAGE + "&target=" + getMyVar('listTab', '') + "&orderType=1&createTimeType=";
    var html = fetch(MY_URL);
    var BT = xpathArray(html, 标题);
    var LJ = xpathArray(html, 链接);
    var XQ = xpathArray(html, 详情);
    var TP = xpathArray(html, 图片);

    log(html)
    for (var i in BT) {
        d.push({
            title: BT[i],
            desc: XQ[i],
            pic_url: TP[i],
            url: url + LJ[i].replace(/window\.open\(\'|\'\)/g, "") + "#immersiveTheme#",
            col_type: 'movie_3',
        });

    }




    setResult(d);
};

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