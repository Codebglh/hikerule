function sousuo() {
    addListener("onClose", $.toString(() => {
        clearMyVar('sousuo$input');
    }));
    var searchurl = $('').lazyRule(() => {
        let recordlist = storage0.getItem('searchrecord') || [];
        if (recordlist.indexOf(input) > -1) {
            recordlist = recordlist.filter((item) => item !== input);
        }
        recordlist.unshift(input);
        if (recordlist.length > 20) {
            recordlist.splice(recordlist.length - 1, 1);
        }
        storage0.setItem('searchrecord', recordlist);
        if (getItem('searchmode') == "hiker") {
            return "hiker://search?rule=" + MY_RULE.title + "&s=" + input;
        } else {
            return $('hiker://empty#noRecordHistory##noHistory#').rule((name) => {
                require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJyXunmi.js');
                xunmi(name);
            }, input);
        }
    });
    var d = [];
    d.push({
        title: "🔍",
        url: $.toString((searchurl) => {
            return input + searchurl;
        }, searchurl),
        desc: "搜你想看的...",
        col_type: "input",
        extra: {
            titleVisible: true,
            id: "searchinput",
            onChange: $.toString((searchurl) => {
                if (input.length == 1) {
                    deleteItemByCls('suggest');
                }
                if (input.length > 1 && input != getMyVar('sousuo$input', '')) {
                    putMyVar('sousuo$input', input);
                    deleteItemByCls('suggest');
                    var html = request("https://movie.douban.com/j/subject_suggest?q=" + input, {timeout: 3000});
                    var list = JSON.parse(html) || [];
                    let suggest = list.map((sug) => {
                        try {
                            if (sug.img != "") {
                                return {
                                    title: sug.title,
                                    img: sug.img + '@Referer=',
                                    url: sug.title + searchurl,
                                    desc: "年份：" + sug.year,
                                    col_type: "movie_1_vertical_pic",
                                    extra: {
                                        cls: 'suggest'
                                    }
                                }
                            } else {
                                return {
                                    title: "⚡" + sug.title,
                                    url: sug.title + searchurl,
                                    col_type: "text_1",
                                    extra: {
                                        cls: 'suggest'
                                    }
                                }
                            }
                        } catch (e) {
                        }
                    });
                    if (suggest.length > 0) {
                        addItemAfter('searchinput', suggest);
                    }
                }
            }, searchurl)
        }
    });
    if (getItem('searchrecordide', '0') == '1') {
        let recordlist = storage0.getItem('searchrecord') || [];
        if (recordlist.length > 0) {
            d.push({
                title: '🗑清空',
                url: $('#noLoading#').lazyRule(() => {
                    clearItem('searchrecord');
                    deleteItemByCls('searchrecord');
                    return "toast://已清空";
                }),
                col_type: 'scroll_button'
            });
        } else {
            d.push({
                title: '↻无记录',
                url: "hiker://empty",
                col_type: 'scroll_button'
            });
        }
        recordlist.forEach(item => {
            d.push({
                title: item,
                url: item + searchurl,
                col_type: 'scroll_button',
                extra: {
                    cls: 'searchrecord'
                }
            });
        })
    }
    d.push({
        title: '<span style="color:#ff6600"><b>\t热搜榜\t\t\t</b></span>',
        url: "hiker://empty",
        pic_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3779990328,1416553241&fm=179&app=35&f=PNG?w=60&h=70&s=E7951B62A4639D153293A4E90300401B',
        col_type: 'icon_small_3'
    });

    var resoufile = "hiker://files/rules/Src/Juying/resou.json";
    var Juyingresou = fetch(resoufile);
    if (Juyingresou != "") {
        eval("var JYresou=" + Juyingresou + ";");
        var list = JYresou['resoulist'] || [];
    } else {
        var JYresou = {};
        var list = [];
    }
    var nowtime = Date.now();
    var oldtime = JYresou.updatetime || 0;
    if (list.length == 0 || nowtime > (oldtime + 24 * 60 * 60 * 1000)) {
        var html = request("https://waptv.sogou.com/hotsugg");
        var list = pdfa(html, "body&&.hot-list&&li");
        JYresou['resoulist'] = list;
        JYresou['updatetime'] = nowtime;
        writeFile(resoufile, JSON.stringify(JYresou));
    }

    for (var i in list) {
        d.push({
            title: i == "0" ? '““””<span style="color:#ff3300">' + (parseInt(i) + 1).toString() + '</span>' + "\t\t\t" + pdfh(list[i], "a&&Text") : i == "1" ? '““””<span style="color:#ff6600">' + (parseInt(i) + 1).toString() + '</span>' + "\t\t\t" + pdfh(list[i], "a&&Text") : i == "2" ? '““””<span style="color:#ff9900">' + (parseInt(i) + 1).toString() + '</span>' + "\t\t\t" + pdfh(list[i], "a&&Text") : '““””<span>' + (parseInt(i) + 1).toString() + '</span>' + "\t\t\t" + pdfh(list[i], "a&&Text"),
            url: pdfh(list[i], "a&&Text") + searchurl,
            col_type: "text_1"
        },);
    }

    setResult(d);
}