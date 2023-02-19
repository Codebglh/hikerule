var html = fetch(url)
var xx = xpathArray(html, "//*[@id=\"imgList\"]/img/@src");
var BT = xpathArray(html, "//*[@id=\"imgList\"]/img/@data-original");
var ll = "pics://"
for (var i = 0; i < 3; i++) {
    ll = ll + xx[i] + '&&'
}
for (var i = 0; i < BT.length; i++) {

    if (i == BT.length - 1) {
        ll = ll + BT[i]
    } else {
        ll = ll + BT[i] + '&&'
    }
}
