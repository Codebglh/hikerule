function test(a, b) {
    var c
    c = a + b
    if (c > 1) {
        return false
    }
}
if (!test(1, 2)) {
    console.log(22)
} else {
    console.log(2)
}

//为啥同一个文件夹用vs code的终端会报错？？？？苹果自带终端不报错