 var moban = fetch(version.url);
 if (moban != "") {
     eval("var JYresou=" + Juyingresou + ";");
     var list = JYresou['resoulist'] || [];
 } else {
     var JYresou = {};
     var list = [];
 }
 var nowtime = Date.now();
 var oldtime = JYresou.updatetime || 0;
 if (list.length == 0 || nowtime > (oldtime + 24 * 60 * 60 * 1000)) {
     var html = request(version.url + 'json/url.json');
     // var list = pdfa(html, "body&&.hot-list&&li");
     JYresou['resoulist'] = list;
     JYresou['updatetime'] = nowtime;
     writeFile(file, JSON.stringify(JYresou));
 }