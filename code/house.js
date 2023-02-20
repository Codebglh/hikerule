let localhost = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/bghouse/js/';
let localfile = 'hiker://files/rules/bgHouse/js/'

function yiji() {
    fetch(localfile + "yiji.js");
}

function erji() {
    fetch(localfile + "erji.js")
}


function search() {
    fetch(localfile + "search.js")
}


function xiazai() {
    file = localhost + 'yiji.js';
    local = localfile + 'yiji.js';
    file1 = localhost + 'erji.js';
    local1 = localfile + 'erji.js';
    file2 = localhost + 'sanji.js';
    local2 = localfile + 'sanji.js';
    if (md5(file1) == md5(local) && md5(file2) == md5(local1) && md5(file3) == md5(local2)) {
        break
    } else {
        deleteFile(local)
        deleteFile(local1)
        deleteFile(local2)
        downloadFile(file, local)
        downloadFile(file1, local)
        downloadFile(file2, local)
    }
}