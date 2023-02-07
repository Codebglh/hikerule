http://getcomicinfo-globalapi.zymk.cn/app_api/v5/getsortlist_new/?key=

// **
// &page=
//
//

    js:
        var d = [];
var json = JSON.parse(getResCode());
for (var i in json.data.page.comic_list) {
    var r = {};
    var j = json.data.page.comic_list[i];
    r.title = j.comic_name;
    r.url = 'http://getcomicinfo-globalapi.zymk.cn/app_api/v5/getcomicinfo/?comic_id=' + j.comic_id + "#immersiveTheme#";
    r.img = 'https://image.zymkcdn.com/file/cover/000/000/' + j.comic_id + '.jpg-300x400.webp';
    r.desc = j.last_chapter.name;
    d.push(r);
}

setResult(d);