let localhost = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/house/js/';

function yiji() {
    require(config.依赖);
    xiazai();
    require(localhost + "yiji.js");
}

function erji() {
    require(localhost + "erji.js")
}

// function sanji() {
//     require(localhost + "sanji.js")
// }

function search() {
    require(localhost + "search.js")
}


function xiazai() {
    let name = 'hiker://files/rules/bgHouse/js/yiji.js';
    let file = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/YJ.js'
    downloadFile(file, name)
}