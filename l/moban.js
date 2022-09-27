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
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            zhuye();
        }),
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
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            shezhi();
        }),
        pic_url: version.url + 'src/4.png',
        col_type: 'icon_5',
    });
    d.push({
        title: "搜索",
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            sousuo();
        }),
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







    // 设置(d)


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

function zhuye() {
    addListener("onClose", $.toString(() => {
        clearMyVar('zhuye$input');
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