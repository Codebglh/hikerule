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
var d = [];
if (MY_PAGE == 1) {
    for (var i in yijimenu) {
        d.push(yijimenu [i])
    }
}
var url = 'https://www.mhww.xyz'
var MY_URL = " https://www.mhww.xyz/?page.currentPage=" + MY_PAGE + "&orderType=3&subjectName=%E9%9F%93%E6%BC%AB&filmName=";
var html = fetch(MY_URL);
var BT = xpathArray(html, '//*[@id="booklist"]/div/div/div/p/span/text()');
var LJ = xpathArray(html, '//*[@id="booklist"]/div/div/@onclick');
var XQ = xpathArray(html, '//*[@id="booklist"]/div/div/div[2]/p[2]/text()');
var TP = xpathArray(html, '//*[@id="booklist"]/div/div/div[1]/img/@src');
for (var i = 0; i < BT.length; i++) {
    var a = LJ[i];
    var b = url + a.replace(/window\.open\(\'|\'\)/g, "")
    d.push({
        title: BT[i],
        desc: XQ[i].replace("\r\n", ""),
        pic_url: TP[i],
        url: b + "#immersiveTheme##noHistory#",
        col_type: 'movie_3',

    });

}
setResult(d);