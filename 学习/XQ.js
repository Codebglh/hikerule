function xq() {
    var d = [];
    var code = getResCode();
    var Icon_prefix = 'https://lanmeiguojiang.com/tubiao/q/107.png';
    var Label_set_icon = ['107.png', '18.png', '32.png'];

    var 头部 = pdfa(code, "body&&.Introduct_Sub")[0];
    d.push({
        title: "‘‘’’<b>" + pdfh(code, '#comicName&&Text') + '</b> <small> \n作者：<font color="#FA7298">' + pdfh(头部, '.sub_r&&.txtItme,0&&Text') + '</font> \n类型：' + pdfh(头部, '.sub_r&&.txtItme,1&&Text') + "</small>",
        desc: '‘‘’’<font color="#f8ecc9">分类：' + pdfh(头部, '.sub_r&&.txtItme,2&&Text') + '\n时间：' + pdfh(头部, '.sub_r&&.txtItme,3&&Text') + "</font>",
        pic_url: pd(头部, 'img&&src'),
        url: MY_URL + "",
        col_type: 'movie_1_vertical_pic_blur'
    });

//简介
    var 简介 = pdfh(code, "#simple-des&&Text").replace("介绍:", "").replace("漫画简介：", "");
    var 简介全 = pdfh(code, "#full-des&&Text").replace("介绍:", "").replace("漫画简介：", "").replace(/"/g, '°');
    简介全 = 简介全.length < 1 ? 简介 : 简介全
    var jj = getVar(MY_URL + "简介收", "已收起");
    var mztext = "&nbsp;&nbsp;&nbsp;&nbsp;<small>简介</small><br>"


    var bttitle = '<font color="#098AC1">漫画简介  </font><small><small><font color="#f47983">简介收></font></small></small>'


    var jjurl = $("#noLoading#").lazyRule((简介全, 收, 收内容, 当前URL) => {
        var jsbl = 当前URL + "简介收";
        var jj = getVar(当前URL + "简介收", "已收起");
        jj = jj == "已收起" ? "展开" : "已收起";
        putVar(jsbl, jj)
        updateItem({
            extra: {
                id: 当前URL + "_bt"
            },
            title: 收.replace("简介收", jj)
        })

        updateItem({
            extra: {
                id: 当前URL + "_mz"
            },
            title: jj == "已收起" ? 收内容.replace("简介", 简介全).substr(0, 75) + " ...<br>" : 收内容.replace("简介", 简介全)
        })
        return "hiker://empty"
    }, 简介全, bttitle, mztext, MY_URL)

    d.push({
        title: bttitle.replace("简介收", jj),
        url: jjurl,
        col_type: "avatar",
        pic_url: Icon_prefix + Label_set_icon[0],
        extra: {
            id: MY_URL + "_bt"
        }
    });


    d.push({
        title: jj == "已收起" ? mztext.replace("简介", 简介全).substr(0, 75) + " ...<br>" : mztext.replace("简介", 简介全),
        col_type: "rich_text",
        extra: {
            id: MY_URL + "_mz"
        }
    });


    var 章节 = pdfa(code, "#chapter-list-1&&li");
    var 排序 = getVar(MY_URL + "章节排序", "正序");
    var 提示 = 排序 == '倒序' ? '正序' : '倒序';
    var 排序名 = '<b>章节列表</b>  <small><small><font color=#f9906f>排序 ></font></small></small>'


    var 排序url = $("#noLoading#").lazyRule((排序名, tjurl, lazy, 章节) => {
        var 排序 = getVar(tjurl + "章节排序", "正序");
        var 提示 = 排序 == '倒序' ? '正序' : '倒序';
        updateItem({
            extra: {
                id: tjurl + "_排序"
            },
            title: 排序名.replace('排序', 提示)
        })


        if (提示 == '倒序') {
            章节.reverse()
        }

        var 去除章节 = ['下载App', '🔒', '下拉式阅读'];
        去除章节.forEach(function (data) {
            var 标识id = 章节.findIndex(返回 => 返回.indexOf(data) != -1);
            if (标识id != -1) {
                章节.splice(标识id, 1)
            }
            ;
        });

        章节.forEach(function (data, ssid) {
            updateItem({
                title: pdfh(data, 'Text'),
                url: pd(data, 'a&&href') + lazy,
                extra: {
                    id: tjurl + "_选集" + ssid
                }
            });
        });


        putVar(tjurl + "章节排序", 提示)
        return "hiker://empty"
    }, 排序名, MY_URL, lazy, 章节)


    d.push({
        title: "<b>章节列表</b>  <small><small><font color='#f9906f'>" + 排序 + " ></font></small></small>",
        pic_url: Icon_prefix + Label_set_icon[1],
        url: 排序url,
        col_type: "avatar",
        extra: {
            id: MY_URL + "_排序"
        }
    });

    if (排序 == '倒序') {
        章节.reverse()
    }

    var 去除章节 = ['下载App', '🔒', '下拉式阅读'];
    去除章节.forEach(function (data) {
        var 标识id = 章节.findIndex(返回 => 返回.indexOf(data) != -1);
        if (标识id != -1) {
            章节.splice(标识id, 1)
        }
        ;
    });

    章节.forEach(function (data, id) {
        d.push({
            title: pdfh(data, 'Text'),
            url: pd(data, 'a&&href') + lazy,
            col_type: "text_2",
            extra: {
                id: MY_URL + "_选集" + id
            }
        });
    });


    d.push({
        title: '<b>热门推荐</b>',
        pic_url: Icon_prefix + Label_set_icon[2],
        col_type: "avatar"
    });

    pdfa(code, ".imgBox&&ul&&li").forEach(function (zdata) {
        d.push({
            title: pdfh(zdata, '.txtA&&Text'),
            url: pd(zdata, 'a&&href') + '#immersiveTheme#?Name=' + pdfh(zdata, '.txtA&&Text') + '@rule=js:$.require("hiker://page/details")',
            pic_url: pd(zdata, 'img&&src'),
            desc: pdfh(zdata, '.info&&Text')
        });
    });

    d.push({
        title: '\n',
        col_type: 'long_text'
    });

    Icon_prefix = 'https://lanmeiguojiang.com/tubiao/more/';
    var sicon = ['213.png', '279.png'];
    var stitle = ['书架', '下载', '口令'];
    var surl = ['hiker://page/Main.view?rule=本地资源管理', 'hiker://page/download.view#noRecordHistory##noRefresh#?rule=本地资源管理'];


    var doList = [];
    章节.forEach(function (data) {
        doList.push({
            title: pdfh(data, 'Text'),
            url: pd(data, 'a&&href'),
        });
    });

}
