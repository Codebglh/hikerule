function yiji() {
    var d = [];
    var Color = 'blue'

    if (MY_PAGE == 1) { //第一页的筛选
        for (var i in FL) {
            d.push({
                title: getMyVar('SrcJuying$FL', '1') === FL[i] ? '““””<b><span style="color:' + Color + '">' + FLN[i] + '</span></b>' : FLN[i],
                url: $('#noLoading#').lazyRule((FL) => {
                    putMyVar('SrcJuying$FL', FL);
                    refreshPage(false);
                    return "hiker://empty";
                }, FL[i]),
                col_type: 'scroll_button'
            });
        }
    };
    d.push({
        col_type: "blank_block"
    });
    //站位符
    url = MY_URL + "/index.php/vod/show/id/" + getMyVar('SrcJuying$FL', '1') + "/page/" + MY_PAGE + ".html"

    log(url)
    var html = fetch(url); //fetch直接访问链接
    var BT = xpathArray(html, 标题);
    var LJ = xpathArray(html, 链接);
    var XQ = xpathArray(html, 详情);
    var TP = xpathArray(html, 图片);


    log(XQ)
    for (var i in BT) {
        d.push({
            title: BT[i],
            desc: XQ[i].replace("\r\n", ""),
            pic_url: TP[i],
            url: MY_URL + LJ[i] + "#immersiveTheme#",
            col_type: 'movie_3',
        });

    }
    setResult(d);
    //需要导入参数为：
    /*
    var FL=[];  //链接变量
    var FLN=[]; //链接名
    var MY_URL ="";
    var MY_URL ="";
    var 标题='';//xpath解析规则
    var 详情='';
    var 图片='';
    var 链接='';
    */
}

function erji() {

    var d = [];
    var html = getResCode();
    d.push({
        title: xpath(html, 标题),
        desc: xpath(html, 描述),
        img: xpath(html, 图片),
        url: MY_URL,
        col_type: 'movie_1_vertical_pic_blur'
    });
    var 线路名 = '//*[@class="fed-tabs-boxs"]/div/div/ul/li/a/text()';
    var XLN = xpathArray(html, 线路名);
    var 线路 = '//*[@class="fed-tabs-boxs"]/div/div/ul/li/a/@href';
    var XL = xpathArray(html, 线路);
    var Color = 'blue'



    for (var i in XL) {
        d.push({
            title: getMyVar('SrcJuying$FL', XL[0]) === XL[i] ? '““””<b><span style="color:' + Color + '">' + XLN[i] + '</span></b>' : XLN[i],
            url: $('#noLoading#').lazyRule((XL) => {
                putMyVar('SrcJuying$XL', XL);
                refreshPage(false);
                return "hiker://empty";
            }, XL[i]),
            col_type: 'scroll_button',
        });
    }

    var easy = $("").lazyRule((path) => {
        eval(request(path));
        return lazy(input);

    }, ("hiker://files/rules/Src/Juying/自动匹配免嗅.js"));






    var url = 'https://360yy.cn';
    cc = url + getMyVar('SrcJuying$XL', XL[0])
    var 播放 = '//*[@class="fed-play-item fed-drop-item fed-visible"]/ul[2]/li/a/@href'
    DZ = xpathArray(fetch(cc), 播放)
    for (var i = 1; i < DZ.length + 1; i++) {

        d.push({
            title: i,
            url: url + DZ[i - 1] + easy,
            col_type: 'text_4',
        });
    }

    setResult(d);
}