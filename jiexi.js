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
    x = getMyVar('SrcJuying$FL', '1')
        //https://360yy.cn
        // MY_URL1 = '/index.php/vod/show/id/'
        // MY_URL2 = '/page/'
        // MY_URL2 = '.html'
        // MY_PAGE
    var html = fetch(MY_URL); //fetch直接访问链接
    var BT = xpathArray(html, 标题);
    var LJ = xpathArray(html, 链接);
    var XQ = xpathArray(html, 详情);
    var TP = xpathArray(html, 图片);


    log(XQ)
    for (var i in BT) {
        d.push({
            title: BT[i],
            desc: XQ[i],
            pic_url: TP[i],
            url: LJ[i],
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
    var 列表='';//xpath解析规则
    var 标题='';
    var 详情='';
    var 图片='';
    var 链接='';
    */
}

// function url() {
//     if (MY_URL == "")
// }