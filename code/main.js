let file1 = "https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/yiji.js";

let relyfile = "";
if (fileExist('hiker://files/libs/' + md5(file1) + '.js')) {
    relyfile = file1;
}
if (relyfile == "") {
    let cjFile = request(file1, {timeout: 3000});
    if (cjFile.indexOf('nowVersion') > -1) {
        relyfile = file1;
    }
}
