let localhost = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/bghouse/';
let localfile = 'hiker://files/rules/bgHouse/js/'

function yiji() {
    if (fileExist(localfile + "yiji.js")) {
        require(localfile + "yiji.js");
    } else {
        downloadFile(localhost + "yiji.js", localfile + "yiji.js")
        require(localfile + "yiji.js");
        toast('yiji下载更新成功')
    }
}

function erji() {
    if (fileExist(localfile + "erji.js")) {
        require(localfile + "erji.js");
    } else {
        downloadFile(localhost + "erji.js", localfile + "erji.js")
        require(localfile + "erji.js");
        toast('erji下载更新成功')
    }
}


function search() {
    if (fileExist(localfile + "sanji.js")) {
        require(localfile + "sanji.js");
    } else {
        downloadFile(localhost + "sanji.js", localfile + "sanji.js")
        require(localfile + "sanji.js");
        toast('下载更新成功')
    }
}

