function erji() {
    let LJ = getVar('url').split(/第.*?集|\$|#/g)
    var a = 0;
    let url = [];
    for (let i = 0; i < LJ.length; i++) {
        if (LJ[i] != '') {
            url[a] = LJ[i];
            a = a + 1;
        }
    }
    d.push({
        title: getVar('title'),
        desc: getVar('desc'),
        url: getVar('pic_url'),
        pic_url: getVar('pic_url'),
        col_type: 'movie_1_vertical_pic_blur',
    });
}