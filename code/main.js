let file = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/code/yiji.js';
let name = 'hiker://files/rules/bgHouse/js/yiji.js';

let relyfile = "";
if (fileExist(name)) {
    relyfile = name;
} else {
    downloadFile(file, name)
}
if (relyfile == "") {
    relyfile = file;
}

