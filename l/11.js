function yiji() {
    clearMyVar('SrcJy$back');
    var d = [];
    const Color = "#3399cc";
    const categorys = ['全部', '热门资源', 'f2d资源', 'hy资源', 'zmw资源', 'msn资源', 'ysj资源', 'xn资源', 'bp资源', 'xsm资源', 'hav资源', '9c资源', 'btt资源', 'lb资源'];
    const listTab = ['', 'zizhi', 'f2d', 'hy', 'zmw', 'msn', 'ysj', 'xn', 'bp', 'xsm', 'hav', '9c', 'btt', 'lb'];
    const fold = getMyVar('SrcJuying$fold', "0");

    var MY_URL = "https://www.onetgb.xyz/0/index?filmName=&page.currentPage=" + MY_PAGE + "&target=" + getMyVar('SrcJuying$listTab', 'hy') + "&orderType=1&createTimeType=";
    //  log(MY_URL);
    if (MY_PAGE == 1) {
        d.push({
            title: "收藏",
            url: "hiker://collection",
            pic_url: 'https://lanmeiguojiang.com/tubiao/more/109.png',
            col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        });
        //收藏按钮

        d.push({
            title: "历史",
            url: "hiker://history",
            pic_url: 'https://lanmeiguojiang.com/tubiao/more/109.png',
            col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        });

        d.push({
            title: "筛选",
            url: $('#noLoading#').lazyRule((fold) => {
                putMyVar('SrcJuying$fold', fold === '1' ? '0' : '1');
                refreshPage(false);
                return "hiker://empty";
            }, fold),
            pic_url: fold === '1' ? 'https://lanmeiguojiang.com/tubiao/more/213.png' : 'https://lanmeiguojiang.com/tubiao/more/172.png',
            col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        });
        //塞选按钮
        d.push({
            col_type: 'line'
        });
        for (var i in categorys) {
            d.push({
                title: getMyVar('SrcJuying$listTab', 'listTab[0]') === listTab[i] ? '““””<b><span style="color:' + Color + '">' + categorys[i] + '</span></b>' : categorys[i],
                url: $('#noLoading#').lazyRule((listTab) => {
                    putMyVar('SrcJuying$listTab', listTab);
                    refreshPage(false);
                    return "hiker://empty";
                }, listTab[i]),
                col_type: 'scroll_button'
            });
        }
        //第一排
        d.push({
            col_type: "blank_block"
        });
    }
    var html = fetch(MY_URL);
    var list = parseDomForArray(html, 列表);

    log(MY_PAGE)
        //log(list);
    for (var i in list) {
        var n = parseDomForHtml(list[i], 链接);
        log(list[i])
        var cc = xpath(list[i], '/div/div[2]/div[2]/video/@src');
        log(cc);
        d.push({
            title: parseDomForHtml(list[i], 标题),
            desc: parseDomForHtml(list[i], 描述),
            pic_url: parseDomForHtml(list[i], 图片) + '#noHistory#',
            url: 网站 + n + "#immersiveTheme#",
            col_type: 'movie_2',

        });
    }
    setResult(d);
}

function erji() {

    var d = [];
    var html = getResCode();
    var cc = pdfh(html, 线路);
    //log(cc);
    d.push({
        title: pdfh(html, 标题),
        desc: pdfh(html, 描述),
        img: pd(html, 图片) + '#noHistory#',
        url: MY_URL + '#noHistory#',
        col_type: 'movie_1_vertical_pic_blur'
    });

    var plays = pdfh(html, 线路);
    var url = 网站 + plays;
    var easy = $("").lazyRule((path) => {
        eval(request(path));
        return lazy(input);

    }, ("hiker://files/rules/Src/Juying/自动匹配免嗅.js"));
    d.push({
        title: "播放",
        url: url + easy,
        col_type: 'text_4',
    });


    setResult(d);
}