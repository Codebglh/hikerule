const ss = 'http://comic.321mh.com/app_api/v5/getcomicinfo_body/?comic_id=108850&from_page=search&platformname=android&productname=mht' +
    '' +
    '' +
    '' +
    '' +
    '@rule=js:var jsonfile = "hiker://files/manhua/JM/mht.js";' +
    'var picfun = fetch(jsonfile);' +
    'if(!picfun){picfun = fetch("http://hiker.nokia.press/hikerule/rulelist.json?id=2598",{});' +
    'writeFile(jsonfile,picfun);}eval(picfun);' +
    'getChapter();'