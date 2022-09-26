var updateLog = '2022/09/26 初制作模版';
var version = {
    author: "bgcode",
    ver: "0.0.1",
    requireId: "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/moban.js",
    update: '2022/08/24 14:25',
    info: updateLog,
    ok: 'https://okjx.cc/?url=',
    jsRoot: 'https://gitcode.net/qq_32394351/dr/-/raw/master/js/',
    url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/',
}

function yiji() {
    var d = [];
    var a = version.url + 'src/1.png'
    log(a);
    if (MY_PAGE == 1) {
        d.push({
            title: "历史",
            url: "hiker://history",
            pic_url: a,
            col_type: 'icon_5'
        });
    }
    d.push({ col_type: "blank_block" })
};