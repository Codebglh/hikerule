function yiji() {
    // Version();
    /*
    addListener("onClose", $.toString(() => {
        clearMyVar('isverifyA');
    }));
*/
    clearMyVar('SrcJy$back');
    var d = [];
    const Color = "#3399cc";
    const categorys = ['电视剧', '电影', '动漫', '综艺', '纪录片'];
    const listTabs = ['teleplay', 'film', 'cartoon', 'tvshow', 'documentary'];
    const fold = getMyVar('SrcJuying$fold', "0");
    const 类型 = getMyVar('SrcJuying$类型', '');
    const 地区 = getMyVar('SrcJuying$地区', '');
    const 年代 = getMyVar('SrcJuying$年代', '');
    const 资源 = getMyVar('SrcJuying$资源', '');
    const 明星 = getMyVar('SrcJuying$明星', '');
    const 排序 = getMyVar('SrcJuying$排序', '');
    MY_URL = "https://waptv.sogou.com/napi/video/classlist?abtest=0&iploc=CN1304&spver=&listTab=" + getMyVar('SrcJuying$listTab', 'teleplay') + "&filter=&start=" + (MY_PAGE - 1) * 15 + "&len=15&fr=filter";

    if (类型 != "") {
        MY_URL = MY_URL + "&style=" + 类型;
    }
    if (地区 != "") {
        MY_URL = MY_URL + "&zone=" + 地区;
    }
    if (年代 != "") {
        MY_URL = MY_URL + "&year=" + 年代;
    }
    if (资源 != "") {
        MY_URL = MY_URL + "&fee=" + 资源;
    }
    if (明星 != "") {
        MY_URL = MY_URL + "&emcee=" + 明星;
    }
    if (排序 != "") {
        MY_URL = MY_URL + "&order=" + (排序 == "最新" ? "time" : "score");
    }

    var cfgfile = "hiker://files/rules/Src/Juying/config.json";
    var Juyingcfg = fetch(cfgfile);
    if (Juyingcfg != "") {
        eval("var JYconfig=" + Juyingcfg + ";");
    } else {
        var JYconfig = {};
    }
    if (MY_PAGE == 1) {
        // d.push({
        //     title: "管理",
        //     url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        //         require(config.依赖.match(/https.*\//)[0] + 'SrcJySet.js');
        //         SRCSet();
        //     }),
        //     pic_url: 'https://lanmeiguojiang.com/tubiao/more/129.png',
        //     col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        // });
        d.push({
            title: JYconfig['recordentry'] != 2 ? "历史" : "收藏",
            url: JYconfig['recordentry'] != 2 ? "hiker://history" : "hiker://collection",
            pic_url: 'https://lanmeiguojiang.com/tubiao/more/109.png',
            col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        });
        // d.push({
        //     title: "搜索",
        //     url: $("hiker://empty#noRecordHistory##noHistory#").rule(() => {
        //         require(config.依赖);
        //         sousuo2();
        //     }),
        //     pic_url: 'https://lanmeiguojiang.com/tubiao/more/101.png',
        //     col_type: getAppVersion() >= 3188 ? 'icon_5' : 'icon_small_4'
        // });
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
        if (getAppVersion() >= 3188) {
            d.push({
                title: "展示",
                url: $("hiker://empty##fypage#noRecordHistory##noHistory#").rule(() => {
                    require(config.依赖);
                    jiekouyiji();
                }),
                pic_url: 'https://lanmeiguojiang.com/tubiao/more/105.png',
                col_type: 'icon_5'
            });
        }

        d.push({
            col_type: 'line'
        });
        for (let i = 0; i < 10; i++) {
            d.push({
                col_type: "blank_block"
            })
        }

        for (var i in categorys) {
            d.push({
                title: getMyVar('SrcJuying$listTab', 'teleplay') === listTabs[i] ? '““””<b><span style="color:' + Color + '">' + categorys[i] + '</span></b>' : categorys[i],
                url: $('#noLoading#').lazyRule((listTab) => {
                    putMyVar('SrcJuying$listTab', listTab);
                    refreshPage(false);
                    return "hiker://empty";
                }, listTabs[i]),
                col_type: 'scroll_button'
            });
        }
        d.push({
            col_type: "blank_block"
        });

        var html = JSON.parse(request(MY_URL));

        if (fold === '1') {
            var filter = html.listData.list.filter_list;
            for (var i in filter) {
                d.push({
                    title: filter[i].name == "排序" ? 排序 == "" ? '““””<span style="color:red">最热</span>' : "最热" : (类型 == "" && filter[i].name == "类型") || (地区 == "" && filter[i].name == "地区") || (年代 == "" && filter[i].name == "年代") || (资源 == "" && filter[i].name == "资源") || (明星 == "" && filter[i].name == "明星") ? '““””<span style="color:red">全部</span>' : "全部",
                    url: $('#noLoading#').lazyRule((name) => {
                        putMyVar('SrcJuying$' + name, '');
                        refreshPage(false);
                        return "hiker://empty";
                    }, filter[i].name),
                    col_type: 'scroll_button',
                })
                let option_list = filter[i].option_list;
                for (var j in option_list) {
                    d.push({
                        title: getMyVar('SrcJuying$' + filter[i].name, '') == option_list[j] ? '““””<span style="color:red">' + option_list[j] + '</span>' : option_list[j],
                        url: $('#noLoading#').lazyRule((name, option) => {
                            putMyVar('SrcJuying$' + name, option);
                            refreshPage(false);
                            return "hiker://empty";
                        }, filter[i].name, option_list[j]),
                        col_type: 'scroll_button'
                    });
                }
                d.push({
                    col_type: "blank_block"
                });
            }
        }
    } else {
        var html = JSON.parse(request(MY_URL));
    }
    // var seachurl = $('').lazyRule(() => {
    //     return $('hiker://empty#noRecordHistory##noHistory#').rule((name) => {
    //         require(config.依赖.match(/https.*\//)[0] + 'SrcJyXunmi.js');
    //         xunmi(name);
    //     }, input);
    // });

    // var list = html.listData.results;
    // for (var i in list) {
    //     d.push({
    //         title: list[i].name,
    //         img: list[i].v_picurl + '@Referer=',
    //         url: JYconfig['erjimode'] != 2 ? "hiker://empty##https://v.sogou.com" + list[i].url.replace('teleplay', 'series').replace('cartoon', 'series') + "#immersiveTheme#" : list[i].name + seachurl,
    //         desc: list[i].ipad_play_for_list.finish_episode ? list[i].ipad_play_for_list.episode == list[i].ipad_play_for_list.finish_episode ? "全集" + list[i].ipad_play_for_list.finish_episode : "连载" + list[i].ipad_play_for_list.episode + "/" + list[i].ipad_play_for_list.finish_episode : "",
    //         extra: {
    //             pic: list[i].v_picurl,
    //             name: list[i].name
    //         }
    //     });
    // }


}
// // setResult(d);
// if (getMyVar('jydingyue', '0') == "0" && JYconfig['codeid2'] && JYconfig['codeid'] != JYconfig['codeid2']) {
//     putMyVar('jydingyue', '1');
//     try {
//         var nowtime = Date.now();
//         var oldtime = parseInt(getItem('dingyuetime', '0').replace('time', ''));
//         if (nowtime > (oldtime + 6 * 60 * 60 * 1000)) {
//             let pasteurl = JYconfig['codeid2'];
//             let text = parsePaste('https://netcut.cn/p/' + aesDecode('Juying', pasteurl));
//             if (pasteurl && !/^error/.test(text)) {
//                 let pastedata = JSON.parse(base64Decode(text));
//                 var jkfilepath = "hiker://files/rules/Src/Juying/jiekou.json";
//                 var jkdatalist = pastedata.jiekou;
//                 if (jkdatalist.length > 0) {
//                     writeFile(jkfilepath, JSON.stringify(jkdatalist));
//                 }
//                 var jxfilepath = "hiker://files/rules/Src/Juying/myjiexi.json";
//                 var jxdatalist = pastedata.jiexi;
//                 if (jxdatalist.length > 0) {
//                     writeFile(jxfilepath, JSON.stringify(jxdatalist));
//                 }
//                 log("自动订阅同步完成");
//             } else {
//                 log("自动订阅同步口令错误或已失效");
//             }
//             setItem('dingyuetime', nowtime + "time");
//         }
//     } catch (e) {
//         log('自动订阅更新失败：' + e.message);
//     }
// }