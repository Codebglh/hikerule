let version = {
    author: "bgcode",
    ver: "0.0.1",
    update: '2023/2/19 14:25',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/',
};
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
    if (MY_PAGE == 1) {
        for (var i in yijimenu) {
            d.push(yijimenu [i])
        }
    }
    setResult(d);
}

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
    var searchurl = $('').lazyRule(() => {


        return "hiker://search?rule=" + MY_RULE.title + "&s=" + input;
        

    });
    d.push({
        title: '🔍',
        url: $.toString((searchurl) => {
            return input + searchurl;
        }, searchurl),

        col_type: 'input',
        extra: {
            titleVisible: true,
            id: "searchinput",
            onChange: $.toString(() => {
                log("sda")
            })
        }
    });
    setResult(d);
};
