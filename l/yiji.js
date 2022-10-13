function yiji() {
    var d = [];
    if (MY_PAGE == 1) { //第一页的筛选
        for (var i in FL) {
            var a = FL[0];
            // log(a);
            d.push({
                title: getMyVar('SrcJuying$FL', '1') === FL[i] ? getHead(FLN[i]) : FLN[i],
                url: $('#noLoading#').lazyRule((FL) => {
                    putMyVar('SrcJuying$FL', FL);
                    refreshPage(false);
                    return "hiker://empty";
                }, FL[i]),
                col_type: 'scroll_button'
            });
        }
    }

    d.push({
        col_type: "blank_block"
    });
    //站位符
    url = MY_URL + "/index.php/vod/show/id/" + getMyVar('SrcJuying$FL', '1') + "/page/" + MY_PAGE + ".html";

    //  log(url)
    var html = request(url); //fetch直接访问链接
    var BT = xpathArray(html, 标题);
    var LJ = xpathArray(html, 链接);
    var XQ = xpathArray(html, 详情);
    var TP = xpathArray(html, 图片);


    // log(XQ)
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
