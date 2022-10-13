function update() {

    d.push({
        title: '““””<span style="color: #1aad19">♻检测升级</span>',
        desc: '清除所有DR模板依赖,等同于长按小程序标题清除缓存',
        col_type: 'scroll_button',
        url: $('#noLoading#').lazyRule(() => {
            showLoading('升级检测中,请稍等...');
            require('http://hiker.nokia.press/hikerule/rulelist.json?id=2505');
            config = {
                模板: 'http://hiker.nokia.press/hikerule/rulelist.json?id=2505'
            }
            require(config['模板']);
            let requireId = version.requireId;
            let ver = version.ver;
            let update = version.update;
            let localDate = new Date(update);
            try {
                var webLib = fetch(requireId);
                var webVer = (function (webLib) {
                    eval(webLib);
                    return version;
                })(webLib);
            } catch (e) {
                hideLoading();
                return 'toast://远程服务器通讯错误,本次检测升级失败\n' + e.message;
            }
            let webDate = new Date(webVer.update);
            // $.dateFormat(new Date(parseInt(localDate)),"yyyy-MM-dd HH:mm:ss");
            if (webDate > localDate || webVer.ver !== ver) { //网页更新时间大于本地库时间或者版本号不等
                hideLoading();
                let msg = '本地依赖更新时间:' + update + ',版本:' + ver + '\n云端依赖更新时间:' + webVer.update + ',版本:' + webVer.ver + '\n有升级:[' + ver + ']=>[' + webVer.ver + '],立即升级?';
                return $(msg).confirm((requireId, webLib) => {
                    let jsp = 'hiker://files/libs/' + md5(requireId) + '.js';
                    log('本地依赖模块路径=> ' + jsp);
                    deleteCache();
                    clearMyVar('是否进入规则');
                    writeFile(jsp, webLib)
                    refreshPage(false);
                    return 'toast://升级成功!模块依赖缓存已清除'
                }, requireId, webLib);
            } else {
                hideLoading();
                return 'toast://经检测已经是最新的[' + ver + ']了!'
            }
        })
    });
}