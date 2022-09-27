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
    d.push({
        title: 'L模版说明-点击管理模版',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            moban();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_1',
    });


    d.push({
        title: '一级模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            yjm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
    });

    d.push({
        title: '二级模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            ejm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
    });

    d.push({
        title: '搜索模版制作',
        url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
            require(config.依赖);
            ssm();
        }),
        desc: "所见即所得，只要你能看见你就能做出来",
        col_type: 'text_3',
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

function moban() {

};

function yjm() {
    // addListener("onClose", $.toString(() => {
    //     clearMyVar('zhuye$input');
    // }));
    var d = [];
    d.push({
        title: "获取",
        url: $.toString(() => {
            return input;
        }),
        desc: "请输入URL",
        col_type: "input",
    });
    d.push({
        title: '规则使用xpath选择器',
        desc: '使用具体教程请百度xpath语法或观看B站视频',
        col_type: 'text_1',
    });
    d.push({
        title: "标题",
        url: '',
        desc: "输入语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
    });
    d.push({
        title: "描述",
        url: '',
        desc: "输入语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
    });
    d.push({
        title: "链接",
        url: '',
        desc: "输入语法例如：//*[@class=\"fed-tabs-boxs\"]/@href",
        col_type: 'input',
    });
    d.push({
        title: "图片",
        url: '',
        desc: "输入语法例如：//*[@class=\"fed-tabs-boxs\"]/@src",
        col_type: 'input',
    });
    d.push({
        title: "类型",
        url: '',
        desc: "输入海阔自带类型例如：movie_1,movie_2,movie_3等等",
        col_type: 'input',
    });



    setResult(d);
};

function ejm() {
    // addListener("onClose", $.toString(() => {
    //     clearMyVar('zhuye$input');
    // }));
    var d = [];
    d.push({

    })
};

function ssm() {
    // addListener("onClose", $.toString(() => {
    //     clearMyVar('zhuye$input');
    // }));
    var d = [];
    d.push({

    })
};