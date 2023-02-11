function setTabs(tabs, vari) {
    d.push({
        title: getMyVar('shsort') == '1' ? '““””<b><span style="color: #FF0000">∨</span></b>' : '““””<b><span style="color: #1aad19">∧</span></b>',
        url: $("#noLoading#").lazyRule(() => {
            if (getMyVar('shsort') == '1') {
                putMyVar('shsort', '0');
            } else {
                putMyVar('shsort', '1')
            }
            ;
            refreshPage(false);
            return 'toast://切换排序成功'
        }),
        col_type: 'scroll_button'
    })
    for (var i in tabs) {
        if (tabs[i] != "") {
            d.push({
                title: getMyVar(vari, '0') == i ? getHead(tabs[i], Color1, 1) : getHead(tabs[i], Color2),
                url: $("#noLoading#").lazyRule((vari, i, Marksum) => {
                    if (parseInt(getMyVar(vari, '0')) != i) {
                        try {
                            eval('var SrcMark = ' + fetch("hiker://files/cache/SrcMark.json"));
                        } catch (e) {
                            var SrcMark = "";
                        }
                        if (SrcMark == "") {
                            SrcMark = {route: {}};
                        } else if (SrcMark.route == undefined) {
                            SrcMark.route = {};
                        }
                        SrcMark.route[vari] = i;
                        var key = 0;
                        var one = "";
                        for (var k in SrcMark.route) {
                            key++;
                            if (key == 1) {
                                one = k
                            }
                        }
                        if (key > Marksum) {
                            delete SrcMark.route[one];
                        }
                        writeFile("hiker://files/cache/SrcMark.json", JSON.stringify(SrcMark));
                        putMyVar(vari, i);
                        refreshPage(false);
                        return 'toast://切换成功'
                    } else {
                        return '#noHistory#hiker://empty'
                    }
                }, vari, i, Marksum),
                col_type: 'scroll_button'
            })
        }
    }
}
  