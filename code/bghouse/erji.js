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
        title: MY_PARAMS.title,
        desc: MY_PARAMS.desc,
        url: MY_PARAMS.pic_url,
        pic_url: MY_PARAMS.pic_url,
        col_type: 'movie_1_vertical_pic_blur',
    });
}