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
    file = ['yiji.js', 'erji.js', 'sanji.js']
    for (var i = 0; i < file.length; i++) {
        if (fileExist(localfile + file[i])) {
            if (md5(localfile + file[i] != md5(localhost + file[i]))) {
                deleteFile(localfile + file[i])
                downloadFile(localhost + file[i], localfile + file[i])
                toast('更新成功')
            } else {
                toast('已是最新')
            }
        } else {
            downloadFile(localhost + file[i], localfile + file[i])
            toast('下载更新成功')
        }
    }
}