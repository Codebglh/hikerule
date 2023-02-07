let requirelist = ["https://raw.githubusercontent.com/", "https://ghproxy.com/https://raw.githubusercontent.com/", "https://cdn.staticaly.com/gh/", "https://github.jevons.vip/https://raw.githubusercontent.com/"]
for (let i = 0; i < requirelist.length; i++) {
    try {//远程依赖索引
        if (i != requirelist.length - 1) {
            relyfile = require(requirelist[i] + 'Codebglh/hikerule/main/l/BGMH.js');
            if (relyfile != null) {
                break;
            }
        } else {
            relyfile = require(requirelist[i])
        }
    } catch (e) {
        log(e.message);
    }
}
initConfig({
    依赖: relyfile
});

