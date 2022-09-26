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
    };
    d.push({
        col_type: "blank_block"
    });
    //站位符
    url = MY_URL + "/index.php/vod/show/id/" + getMyVar('SrcJuying$FL', '1') + "/page/" + MY_PAGE + ".html"

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


    var easy = $("").lazyRule((path) => {
        eval(request(path));
        return lazy(input);

    }, ("hiker://files/rules/Src/Juying/自动匹配免嗅.js"));




    clearMyVar(XL)

    for (var i in XL) {
        d.push({
            title: getMyVar('SrcJuying$XL', "") === XL[i] ? getHead(XLN[i] + '↓') : XLN[i],
            url: $('#noLoading#').lazyRule((XL) => {
                putMyVar('SrcJuying$XL', XL);
                refreshPage(false);
                return "hiker://empty";
            }, XL[i]),
            col_type: 'scroll_button',

        });
    }

    var xx = getMyVar('SrcJuying$XL', XL[i])
    var url = 'https://360yy.cn';
    cc = url + bbb
    setLists(cc)



    function setLists(bbb) {
        var 播放 = '//*[@class="fed-play-item fed-drop-item fed-visible"]/ul[2]/li/a/@href'
        DZ = xpathArray(bbb, 播放)
        for (var i = 1; i < DZ.length + 1; i++) {

            d.push({
                title: i + '',
                url: url + DZ[i - 1] + easy,
                col_type: 'text_4',
            });
        }
    }


    setResult(d);
}

function getHead(title) {
    var Color = 'blue'
    return '‘‘’’<strong><font color="' + Color + '">' + title + '</front></strong>';
}

function url() {
    var a = []





    return (a);
}

function 设置(d, end) {
    end = end || false;
    if (typeof(page) === 'undefined' || !page) {
        page = MY_PAGE || 1;
    }
    if (parseInt(page) === 1) {
        if (!getMyVar('是否进入规则', '')) {
            try {
                eval(fetch(version.jsRoot + '更新.js', { timeout: 2000 }));
                let jsUpdate = new Date(updateT).getTime();
                // 依赖更新时间默认为当前减去一天
                let localDate = lsg.getItem('dr依赖更新时间', '' + (new Date().getTime() - 3600 * 24 * 1000));
                // if(parseInt(jsUpdate)!==parseInt(localDate)){
                if (parseInt(jsUpdate) > parseInt(localDate)) {
                    log('云端依赖更新时间:' + jsUpdate + '\n,本地依赖更新时间:' + localDate);
                    confirm({
                        title: '更新完毕',
                        // content:'已自动更新依赖\n本地依赖时间:'+new Date(parseInt(localDate)).toLocaleString()+'\n云端最新时间:'+new Date(jsUpdate).toLocaleString(),
                        content: '已自动更新依赖\n本地依赖时间:' + $.dateFormat(new Date(parseInt(localDate)), "yyyy-MM-dd HH:mm:ss") + '\n云端最新时间:' + $.dateFormat(new Date(jsUpdate), "yyyy-MM-dd HH:mm:ss"),
                    });
                    try {
                        更新依赖();
                        lsg.setItem('dr依赖更新时间', '' + jsUpdate);
                        refreshPage(true);
                    } catch (e) {}
                }
            } catch (e) {
                //confirm({title:'提示',content:e.message})
                log(new Date().toLocaleString() + '检测更新错误,可能是超时返回了空源码:' + e.message)
            }
        }
        putMyVar('是否进入规则', '是');
        let settings = {
            title: '⚙️设置',
            col_type: 'scroll_button',
            url: $().rule((color, htmlTag, blank) => {
                try {
                    require(getVar('dr依赖'));
                } catch (e) {
                    setResult([{
                        title: e.message,
                        col_type: 'long_text',
                        url: 'hiker://empty'
                    }]);
                }

                function small(text) {
                    return htmlTag("small", text);
                }
                let d = [];
                addListener('onClose', $.toString(() => {
                    // refreshPage(false); //返回自动刷新使设置生效
                }));
                d.push({
                    title: '小程序个性化设置 ' + blank() + small(color('帮助', '#0048ff')),
                    desc: 'dr模板(道长多功能模板+reborn动态分类)\n影视/漫画/听书/小说/图片/随机小姐姐',
                    col_type: 'text_1',
                    url: $().rule(() => {
                        setPageTitle('影漫模板套娃帮助');
                        require(config['模板']);
                        require("http://hiker.nokia.press/hikerule/rulelist.json?id=3187"); //md插件
                        let d = [];
                        // let help = fetch(version.jsRoot+'帮助.html');
                        let help = "#### 获取帮助失败,请检查网络";
                        try {
                            help = fetch(version.jsRoot + 'dr_help.md');
                        } catch (e) {}
                        d.push({
                            title: '<h4>更新日志:</h4><div>' + version.info.replace('\n', '<br>') + '</div>',
                            col_type: 'rich_text'
                        });
                        d.push({
                            // title:help,
                            title: marked.parse(help),
                            col_type: 'rich_text'
                        });
                        setResult(d);
                    })
                });
                let all_cols = [''].concat(getColTypes());
                // ['','text_2','text_3','text_4','text_5','flex_button']
                let 按钮样式 = all_cols.map((it) => {
                    return it === (lsg.getItem('按钮样式', '') || '') ? '👉' + it : it;
                });
                d.push({
                    title: '选集按钮样式:' + (lsg.getItem('按钮样式', '') || ''),
                    col_type: 'text_1',
                    url: $(按钮样式, 2, '请选择选集按钮样式').select(() => {
                        require(getVar('dr依赖'));
                        input = input.replace(/👉/g, '');
                        lsg.setItem('按钮样式', input);
                        refreshPage(true);
                        return 'toast://已切换选集按钮样式为:' + input;
                    })
                });

                let zdcs = '““””<b><span style="color: #FF0000">∨</span></b>';
                let zdcss = lsg.getItem('折叠样式', zdcs) || zdcs;
                d.push({
                    title: '动态分类折叠按钮样式:' + zdcss,
                    col_type: 'text_1',
                    url: $(zdcss).input(() => {
                        require(getVar('dr依赖'));
                        lsg.setItem('折叠样式', input);
                        refreshPage(false);
                        return 'hiker://empty'
                    })
                });
                let zkcs = '““””<b><span style="color: #1aad19">∧</span></b>';
                let zkcssd = lsg.getItem('展开样式', zkcs) || zkcs;
                d.push({
                    title: '动态分类展开按钮样式:' + zkcssd,
                    col_type: 'text_1',
                    url: $(zkcssd).input(() => {
                        require(getVar('dr依赖'));
                        lsg.setItem('展开样式', input);
                        refreshPage(false);
                        return 'hiker://empty'
                    }),
                    extra: {
                        lineVisible: false
                    }
                });
                d = d.concat(匹配设置());
                let catecolor = '#1aad19';
                catecolor = (lsg.getItem('分类颜色', catecolor) || catecolor);
                d.push({
                    title: '分类颜色:' + color(catecolor, catecolor),
                    col_type: 'text_2',
                    url: $(catecolor).input(() => {
                        require(getVar('dr依赖'));
                        lsg.setItem('分类颜色', input);
                        refreshPage(false);
                        return 'toast://已设置分类按钮颜色为:' + input
                    })
                });
                let jjwords = '100';
                d.push({
                    title: '简介字数:' + color(lsg.getItem('简介字数', jjwords), '#ff7000'),
                    col_type: 'text_2',
                    url: $(jjwords).input(() => {
                        if (!parseInt(input) || parseInt(input) <= 0) {
                            return 'toast://请设置字数必须大于0'
                        }
                        require(getVar('dr依赖'));
                        lsg.setItem('简介字数', input);
                        refreshPage(false);
                        return 'toast://已设置简介字数为:' + input
                    })
                });

                let 模板样式 = ['滚动', '默认'].map((it) => {
                    return it === lsg.getItem('样式', '滚动') ? '👉' + it : it;
                });
                d.push({
                    title: '样式:' + lsg.getItem('样式', '滚动'),
                    col_type: 'text_3',
                    url: $(模板样式, 2, '请选择模板样式').select(() => {
                        require(getVar('dr依赖'));
                        input = input.replace(/👉/g, '');
                        lsg.setItem('样式', input);
                        refreshPage(true);
                        return 'toast://已切换模板样式为:' + input;
                    })
                });

                d.push({
                    title: "通免:" + color(lsg.getItem("通免", "WEB"), "#ff7000"),
                    col_type: "text_3",
                    url: $('#noLoading#').lazyRule(() => {
                        require(getVar('dr依赖'));
                        if (lsg.getItem("通免", "X5") === "X5") {
                            lsg.setItem("通免", "WEB");
                        } else {
                            lsg.setItem("通免", "X5");
                        }
                        refreshPage(false);
                        return "toast://已设置仓库通免模式为:" + lsg.getItem("通免");
                    })
                });

                d.push({
                    title: "超时:" + color(lsg.getItem("timeout", "5000"), "#ff7000"),
                    col_type: "text_3",
                    url: $(lsg.getItem("timeout", "5000"), '请输入通免超时毫秒数').input(() => {
                        require(getVar('dr依赖'));
                        if (Number(input)) {
                            lsg.setItem("timeout", input);
                            refreshPage(false);
                            return "toast://已设置仓库通免超时时间为:" + lsg.getItem("timeout");
                        } else {
                            return "toast://超时设置不合理,必须为整数。推荐5000~15000";
                        }
                    })
                });

                let ua = ['电脑', '手机'].map((it) => {
                    return it === (lsg.getItem('ua', '电脑') || '电脑') ? '👉' + it : it;
                });
                d.push({
                    title: '全局UA:' + (lsg.getItem('ua', '电脑') || '电脑'),
                    col_type: 'text_2',
                    url: $(ua, 2, '请选择全局UA').select(() => {
                        require(getVar('dr依赖'));
                        input = input.replace(/👉/g, '');
                        lsg.setItem('ua', input);
                        refreshPage(true);
                        return 'toast://已切换全局UA为:' + input;
                    })
                });
                let 分隔符 = ['双空格', '换行符'].map((it) => {
                    return it === (lsg.getItem('分隔符', '换行符') || '换行符') ? '👉' + it : it;
                });
                d.push({
                    title: '分隔符:' + (lsg.getItem('分隔符', '换行符') || '换行符'),
                    col_type: 'text_2',
                    url: $(分隔符, 2, '请选择分隔符').select(() => {
                        require(getVar('dr依赖'));
                        input = input.replace(/👉/g, '');
                        lsg.setItem('分隔符', input);
                        refreshPage(true);
                        return 'toast://已切换分隔符为:' + input;
                    })
                });

                d.push({
                    title: '清除已选动态分类',
                    col_type: 'text_2',
                    url: $('因开发者未过滤错误分类导致切换到该分类后源码全丢,可通过此按钮重置，是否继续?').confirm(() => {
                        clearMyVar('header.url');
                        clearMyVar('header.category');
                        // clearMyVar('header.fold');
                        return 'toast://已清除'
                    })
                });
                d.push({
                    title: '清除cookie',
                    col_type: 'text_2',
                    url: $('开发者用于测试是否成功过网站验证的好帮手,清除后需要重新验证，继续?').confirm(() => {
                        clearMyVar('cookie');
                        clearMyVar('请求头');
                        return 'toast://已清除cookie及请求头'
                    })
                });
                d.push({
                    title: '翻页阀值:' + color(lsg.getItem('翻页阀值', 40), '#d96715'),
                    col_type: 'text_2',
                    url: $(lsg.getItem('翻页阀值', 40), '最低指定线路选集总数超过此值才会显示翻页元素').input(() => {
                        if (isNaN(parseInt(input))) {
                            return 'toast://滚犊子吧,输入的都不是数字'
                        }
                        let num = parseInt(input);
                        if (num < 40) {
                            return 'toast://不可以小于40，谢谢'
                        }
                        require(getVar('dr依赖'));
                        lsg.setItem('翻页阀值', num + '');
                        refreshPage(false);
                        return 'toast://已保存'
                    })
                });
                d.push({
                    title: '每页数量:' + color(lsg.getItem('每页数量', 40), '#d96715'),
                    col_type: 'text_2',
                    url: $(lsg.getItem('每页数量', 40), '满足选集翻页模式时每页显示选集数量').input(() => {
                        if (isNaN(parseInt(input))) {
                            return 'toast://滚犊子吧,输入的都不是数字'
                        }
                        let num = parseInt(input);
                        if (num < 40) {
                            return 'toast://不可以小于40，谢谢'
                        }
                        require(getVar('dr依赖'));
                        lsg.setItem('每页数量', num + '');
                        refreshPage(false);
                        return 'toast://已保存'
                    })
                });
                d.push({
                    title: '清空翻页足迹',
                    col_type: 'text_3',
                    url: $('清除所有dr小程序的二级翻页足迹，是否继续?').confirm(() => {
                        require(getVar('dr依赖'));
                        lsg.removeItem('footHistory'); //移除足迹
                        refreshPage(false);
                        return 'toast://已清除足迹'
                    })
                });
                d.push({
                    title: '恢复出厂设置',
                    col_type: 'text_3',
                    url: $('恢复所有自定义配置项为默认，是否继续?').confirm((zkcs, zdcs) => {
                        require(getVar('dr依赖'));
                        clearMyVar('header.url');
                        lsg.clear(); //清除所有
                        lsg.setItem('分类颜色', '#1aad19');
                        lsg.setItem('展开样式', zkcs);
                        lsg.setItem('折叠样式', zdcs);
                        lsg.setItem('分隔符', '换行符');
                        lsg.setItem('ua', '电脑');
                        lsg.setItem('按钮样式', '');
                        lsg.setItem('样式', '滚动');
                        // clearItem('dr_mode');
                        lsg.setItem('dr_mode', 'WEB');
                        // lsg.removeItem('footHistory');
                        refreshPage(false);
                        return 'toast://已恢复'
                    }, zkcs, zdcs)
                });
                d.push((new 匹配设置('text_3')).slice(-1)[0]); //将匹配的模式切换最后一个放进去
                d.push({
                    title: '🔙返回并刷新生效',
                    desc: '为节省性能，直接点左上角返回不会刷新和生效',
                    col_type: 'text_1',
                    url: $('#noLoading#').lazyRule(() => {
                        clearMyVar('是否进入规则');
                        back(true)
                        return 'hiker://empty'
                    })
                });
                d.push({
                    title: '♻清除依赖并返回升级',
                    desc: '清除所有dr依赖,等同于长按小程序标题清除缓存',
                    col_type: 'text_1',
                    url: $('确认清除所有dr系列小程序的缓存依赖吗?').confirm(() => {
                        deleteCache();
                        clearMyVar('是否进入规则');
                        back(true)
                        return 'toast://模块依赖缓存已清除'
                    })
                });
                setResult(d);
            }, color, htmlTag, blank)
        };
        if (!end) {
            d.unshift(settings)
        } else {
            d.splice(-1, 0, settings);
        }
    }
}