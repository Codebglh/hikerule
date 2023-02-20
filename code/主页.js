let l_0 = 'hiker://files/icon/lanmei/tubiao/';
let w_0 = 'https://lanmeiguojiang.com/tubiao/';
var ch = fetch('hiker://files//icon/lanmei_skin');
if (!ch || ch == '当前使用的是皮肤1') {
    w = w_0 + '01/';
    l = l_0 + '01/'
} else if (!ch || ch == '当前使用的是皮肤2') {
    w = w_0 + '02/';
    l = l_0 + '02/'
} else {
    w = w_0 + '03/';
    l = l_0 + '03/'
}
;
var n;

let name = ['01', '02', '03', '04', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', 'douyin', 'lanmei', 'dianying', 'zhibo', '爱奇艺', '腾讯', '优酷', '芒果', 'B', '搜狗', '360', '美女', '咪咕', '乐视', 'xcx', 'ck', 'g',];

for (n = 0; n < name.length; n++) {
    var localfile = [l + name[n] + '.svg'];
    var webfile = [w + name[n] + '.svg'];

    for (var i in localfile) {
        var update = 0;//设为1重新加载
        update || !fileExist(localfile[i]) ? (writeFile(localfile[i], request(webfile[i]))) : 0;
        /*saveImage(webfile[i],localfile[i]):0;*/
//如果你下载的是一般图片格式，请用注释的这条
    }
}
[] 