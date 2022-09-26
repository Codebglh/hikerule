function 检测依赖() {
    let libs = [{
        title: '道长仓库Pro',
        url: 'http://hiker.nokia.press/hikerule/rulelist.json?id=1094',
        version: 105
    }];
    let d = [];
    let ruleHead = '海阔视界首页频道规则【道长仓库Pro】￥home_rule_url￥';
    // log(ruleHead);
    for (let i in libs) {
        let it = libs[i];
        let rule = "hiker://home@" + it.title;
        // log(rule);
        let r = fetch(rule);
        if (r) {
            r = JSON.parse(r);
            if (r.version < it.version) {
                d.push({
                    title: it.title + '版本不符',
                    desc: it.title + '版本需要' + it.version + ',当前:' + r.version + ' 点击导入',
                    url: 'rule://' + base64Encode(ruleHead + it.url),
                    col_type: 'text_1'
                })
            }
        } else {
            d.push({
                title: it.title + '版本不符',
                desc: it.title + '未安装,点击导入',
                url: 'rule://' + base64Encode(ruleHead + it.url),
                col_type: 'text_1'
            })
        }
    }
    if (d.length > 0) {
        let tips = d.map(it => it.title.replace('版本不符', '')).join(',')
        setResult(d);
        throw "请在上方先导入" + tips + '等前置规则,方能刷新使用本程序';
    }
}