function erji(str) {
    let LJ = str.split(/第.*?集|\$|#/g)
    var a = 0;
    let url = [];
    for (let i = 0; i < LJ.length; i++) {
        if (LJ[i] != '') {
            url[a] = LJ[i];
            a = a + 1;
        }
    }
    d.push({
        title: url[1].vod_name,
    });
}