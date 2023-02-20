let localhost = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/bghouse/';
let localfile = 'hiker://files/rules/bgHouse/js/'

function yiji() {
    xiazai();
    require(localfile + "yiji.js");
}

function erji() {
    require(localfile + "erji.js")
}


function search() {
    require(localfile + "search.js")
}


function xiazai() {
    file = localhost + 'yiji.js';
    local = localfile + 'yiji.js';
    file1 = localhost + 'erji.js';
    local1 = localfile + 'erji.js';
    file2 = localhost + 'sanji.js';
    local2 = localfile + 'sanji.js';
    if (md5(file) == md5(local) && md5(file1) == md5(local1) && md5(file2) == md5(local2)) {
        toast("已经是最新")
    } else {
        if (fileExist(local)) {
            deleteFile(local)
        }
        if (fileExist(local1)) {
            deleteFile(local1)
        }
        if (fileExist(local2)) {
            deleteFile(local2)
        }
        downloadFile(file, local)
        downloadFile(file1, local1)
        downloadFile(file2, local2)
        toast('更新成功')
    }
}