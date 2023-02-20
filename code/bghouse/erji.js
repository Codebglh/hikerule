function erji() {
    let d = []
    // let LJ = str.split(/第.*?集|\$|#/g)
    // var a = 0;
    // let url = [];
    // for (let i = 0; i < LJ.length; i++) {
    //     if (LJ[i] != '') {
    //         url[a] = LJ[i];
    //         a = a + 1;
    //     }
    // }
    let a = MY_PARAMS.title
    let b = MY_PARAMS.pic_url
    let c = MY_PARAMS.desc
    d.push({
        title: a,
        desc: c,
        url: b,
        pic_url: b,
        col_type: 'movie_1_vertical_pic_blur',
    });
    setResult(d);
}