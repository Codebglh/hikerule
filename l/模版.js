var yijimoban = [];
var erjimoban = [];
var sousuomoban = [];
var location = 'hiker://files/rules/bgHouse/json/';

function moban_init() {
    let api = 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/l/json/'
    let location = 'hiker://files/rules/bgHouse/json/';
    let moban = {
        yiji: api + '1',
        erji: api + '2',
        sousuo: api + '3',
    }
    requireDownload(moban.yiji, `${location}yijimoban.json`);
    requireDownload(moban.erji, `${location}erjimoban.json`);
    requireDownload(moban.sousuo, `${location}sousuomoban.json`);
}
moban_init()