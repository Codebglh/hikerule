function erji() {

    // let LJ = str.split(/第.*?集|\$|#/g)
    // var a = 0;
    // let url = [];
    // for (let i = 0; i < LJ.length; i++) {
    //     if (LJ[i] != '') {
    //         url[a] = LJ[i];
    //         a = a + 1;
    //     }
    // }
    let a = MY_PARAMS.pic_url
    toast(a);
    d.push({
        title: MY_PARAMS.title,
        desc: MY_PARAMS.desc,
        url: a,
        pic_url: a,
        col_type: 'movie_1_vertical_pic_blur',
    });
    setResult(d);
}