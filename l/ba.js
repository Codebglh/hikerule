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
    var url = 'http://51smt4.xyz/api.php/provide/vod/?ac=detail&t=23&pg=4'
    var MY_URL = "http://51smt4.xyz/api.php/provide/vod/?ac=detail&t=23&pg=" + MY_PAGE;
    var html = fetch(MY_URL);
    let av = JSON.parse(html)
    // log(av.list.length)
    var BT = av.list;


    log(BT)
    for (var i in BT) {
        d.push({
            title: BT[i].vod_name,
            // desc: XQ[i].replace("\r\n", ""),
            // pic_url: TP[i],
            // url: url + LJ[i] + "#immersiveTheme#",
            col_type: 'text_2',
        });

    }


    setResult(d);
}


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