var erjimenu = [{
    title: "剧情简介",
    url: "empty#noRecordHistory##noHistory#",
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/message.png',
    col_type: 'icon_2'
}, {
    title: "观影设置",
    url: $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
        require(config.依赖);
        shezhi();
    }),
    pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/setting.png',
    col_type: 'icon_2'
}, {
    title: getMyVar('shsort') == 0 ? '““””<b><span style="color: #cb5656">∨</span></b>' : '““””<b><span style="color: #00FFFF">∧</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('shsort') == '1') {
            putMyVar('shsort', '0');
        } else {
            putMyVar('shsort', '1');
        }
        ;refreshPage(false);
        return 'toast://切换排序成功'
    }),
    col_type: 'scroll_button'
}, {
    title: getMyVar('path') == '0' ? '““””<b><span style="color: #cb5656">线路一</span></b>' : '““””<b><span style="color: #00FFFF">线路一</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('path') != '0') {
            putMyVar('path', '0');
        }
        refreshPage(false);
        return 'toast://切换路线成功'
    }),
    col_type: 'scroll_button'
}, {
    title: getMyVar('path') == '1' ? '““””<b><span style="color: #cb5656">线路二</span></b>' : '““””<b><span style="color:	#00FFFF">线路二</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('path') != '1') {
            putMyVar('path', '1');
        }

        refreshPage(false);
        return 'toast://切换路线成功'
    }),
    col_type: 'scroll_button'
}, {
    title: getMyVar('path') == '2' ? '““””<b><span style="color: #cb5656">线路三</span></b>' : '““””<b><span style="color:	#00FFFF">线路三</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('path') != '2') {

            putMyVar('path', '2');
        }
        ;refreshPage(false);
        return 'toast://切换路线成功'
    }),
    col_type: 'scroll_button'
}, {
    title: getMyVar('path') == '3' ? '““””<b><span style="color: #cb5656">线路四</span></b>' : '““””<b><span style="color:	#00FFFF">线路四</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('path') != '3') {
            putMyVar('path', '3');
        }
        ;refreshPage(false);
        return 'toast://切换路线成功'
    }),
    col_type: 'scroll_button'
}, {
    title: getMyVar('path') == '4' ? '““””<b><span style="color: #cb5656">线路五</span></b>' : '““””<b><span style="color:	#00FFFF">线路五</span></b>',
    url: $("#noLoading#").lazyRule(() => {
        if (getMyVar('path') != '4') {

            putMyVar('path', '4');
        }
        ;refreshPage(false);
        return 'toast://切换路线成功'
    }),
    col_type: 'scroll_button'
}, {
    col_type: 'line'
}]

addListener("onClose", $.toString(() => {
    clearMyVar('erji$path');
    clearMyVar('erji$shsort');
}));
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
    d.push(erjimenu[i])
}
var xpat = ['//*[@id=\"xl1\"]/@onclick', '//*[@id=\"xl2\"]/@onclick', "//*[@id=\"xl3\"]/@onclick", '//*[@id=\"xl4\"]/@onclick', '//*[@id=\"xl5\"]/@onclick']
var BT = xpathArray(html, "//*[@class=\"cell-title\"]/text()");
if (getMyVar('path') != 0) {
    var LJ = xpathArray(html, xpat[getMyVar('path')]);
} else {
    var LJ = xpathArray(html, xpat[0]);
}


if (getMyVar('shsort') == 0) {
    for (var i = 0; i < BT.length; i++) {
        let url = LJ[i];
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
        let url = LJ[i];
        d.push({
            title: "第" + (i + 1) + "话",
            url: $(url).lazyRule(() => {
                require(local);
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
