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

//@version 1.0.0
function yiji() {
    var d = [];
    // &wd=狂飙
    var MY_URL = "http://cj.lziapi.com/api.php/provide/vod/?ac=videolist&pg=" + MY_PAGE;
    var html = JSON.parse(fetch(MY_URL));
    let a = html.list
    for (var i = 0; i < a.length; i++) {
        let url = a[i].vod_play_url
        d.push({
            title: a[i].vod_name,
            desc: a[i].vod_blurb,
            pic_url: a[i].vod_pic,
            url: $(url).lazyRule(() => {
                require(config.依赖);
                erji(input)
            }) + "#immersiveTheme#",
            col_type: 'movie_3',

        });

    }
    setResult(d);
};

function erji(str) {
    var a = str.split()
}
