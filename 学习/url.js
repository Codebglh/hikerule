if (!config.依赖) {
    //远程依赖索引文件代理地址列表
    let requirelist = ['https://ghproxy.net/https://raw.githubusercontent.com/', 'https://ghproxy.com/https://raw.githubusercontent.com/', 'https://cdn.staticaly.com/gh/', 'https://github.jevons.vip/https://raw.githubusercontent.com/']
    for (let i = 0; i < requirelist.length; i++) {
        try {//远程依赖索引
            require(requirelist[i] + 'src48597962/hk/master/require.js');
            if (relyfile) {
                break;
            }
        } catch (e) {
            log(e.message);
        }
    }
    initConfig({
        依赖: relyfile
    });
}

'https://ghproxy.net/https://raw.githubusercontent.com/gh/Codebglh/hikerule/l/BGMH.js
https://cdn.jsdelivr.net/gh/Codebglh/hikerule/l/BGMH.js
    https://ghproxy.com/https://raw.githubusercontent.com/gh/Codebglh/hikerule/l/BGMH.js