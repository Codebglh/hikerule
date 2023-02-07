if (!config.依赖) {
    //远程依赖索引文件代理地址列表
    let requirelist = ['https://raw.githubusercontent.com/', 'https://ghproxy.com/https://raw.githubusercontent.com/', 'https://cdn.staticaly.com/gh/', 'https://github.jevons.vip/https://raw.githubusercontent.com/', 'https://cdn.jsdelivr.net/gh/Codebglh/hikerule/main/l/BGMH.js']
    for (let i = 0; i < requirelist.length; i++) {
        try {//远程依赖索引
            if (i != requirelist.length - 1) {
                require(requirelist[i] + 'Codebglh/hikerule/main/l/BGMH.js');
                if (relyfile) {
                    break;
                }
            } else {
                require(requirelist[i])
            }
        } catch (e) {
            log(e.message);
        }
    }
    initConfig({
        依赖: relyfile
    });
}
