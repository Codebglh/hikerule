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
        title: "主页",
        url: "hiker://history",
        pic_url: version.url + 'src/1.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "收藏",
        url: "hiker://collection",
        pic_url: version.url + 'src/2.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "历史",
        url: "hiker://history",
        pic_url: version.url + 'src/3.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "设置",
        url: "hiker://history",
        pic_url: version.url + 'src/4.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "搜索",
        url: "hiker://history",
        pic_url: version.url + 'src/5.png',
        col_type: 'icon_5',
    });
    // for (var i in FL) {
    //     d.push({
    //         title: getMyVar('FL', 'FL[0]') === FL[i] ? '““””<b><span style="color:' + Color + '">' + FLN[i] + '</span></b>' : FLN[i],
    //         url: $('#noLoading#').lazyRule((FL) => {
    //             putMyVar('FL', FL);
    //             refreshPage(false);
    //             return "hiker://empty";
    //         }, FL[i]),
    //         col_type: 'scroll_button'
    //     });
    // }

    // d.push({ col_type: "blank_block" });
    // var html = request(url); //fetch直接访问链接
    // var BT = xpathArray(html, 标题);
    // var LJ = xpathArray(html, 链接);
    // var XQ = xpathArray(html, 详情);
    // var TP = xpathArray(html, 图片);


















    setResult(d);
};