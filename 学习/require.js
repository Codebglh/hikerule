let file1 = "https://cdn.jsdelivr.net/gh/Codebglh/hikerule/main/l/BGMH.js";
let file2 = "https://github.jevons.vip/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/BGMH.js";
let file3 = "https://cdn.staticaly.com/gh/Codebglh/hikerule/main/l/BGMH.js";
let file4 = "https://ghproxy.com/https://raw.githubusercontent.com/"
let relyfile = "";
if (fileExist('hiker://files/libs/' + md5(file1) + '.js')) {
    relyfile = file1;
} else if (fileExist('hiker://files/libs/' + md5(file2) + '.js')) {
    relyfile = file2;
} else if (fileExist('hiker://files/libs/' + md5(file3) + '.js')) {
    relyfile = file3;
} else if (fileExist('hiker://files/libs/' + md5(file4) + '.js')) {
    relyfile = file4;
}
if (relyfile == "") {
    let cjFile = request(file1, {timeout: 3000});
    if (cjFile.indexOf('nowVersion') > -1) {
        relyfile = file1;
    } else {
        let cjFile = request(file2, {timeout: 3000});
        if (cjFile.indexOf('nowVersion') > -1) {
            relyfile = file2;
        } else {
            relyfile = file3;
        }
    }
}
  
