function yjm() {

    clearMyVar('moban$input');

    var d = [];
    let input = ['https://360yy.cn'];
    d.push({
        title: "获取",
        url: $.toString(() => {
            putMyVar('name', input);
            refreshPage(false);
            return 'toast://完成访问'
        }, ),
        desc: "请输入URL",
        col_type: "input",

        extra: {
            defaultValue: getMyVar('name', ''),
            onChange: "putMyVar('name',input)",
            titleVisible: true,
            textSize: 13,
            type: "textarea",
            height: 1,
        }
    });
    log()
    let html = getMyVar('name', input);
    let code = request(html);
    if (code && code.length > 30) {
        return 'toast://成功'
    } else {
        return 'toast://无法访问'
    }
    d.push({
        title: '规则使用xpath选择器',

        desc: '使用具体教程请百度xpath语法或观看B站视频',
        col_type: 'text_1',
    });
    d.push({
        title: "标题",
        url: $.toString(() => {
            putMyVar('name', input);
            refreshPage(false);
            return 'toast://完成访问'
        }, ),
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
        extra: {
            defaultValue: getMyVar('name', ''),
            onChange: "putMyVar('name',input)",
            titleVisible: true,
            textSize: 13,
            type: "textarea",
            height: 2
        },
    });
    let 标题 = getMyVar('name', input)
    var BT = xpathArray(code, 标题);
    log(BT)
    d.push({
        title: "描述",
        url: '',
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/text()",
        col_type: 'input',
        extra: {
            type: 'textarea',
            height: 2
        },
    });
    d.push({
        title: "链接",
        url: '',
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/@href",
        col_type: 'input',
        extra: {
            type: 'textarea',
            height: 2
        },
    });
    d.push({
        title: "图片",
        url: '',
        desc: "输入xpath语法例如：//*[@class=\"fed-tabs-boxs\"]/@src",
        col_type: 'input',
        extra: {
            type: 'textarea',
            height: 2
        },
    });
    d.push({
        title: "类型",
        url: '',
        desc: "输入海阔自带类型例如：movie_1,movie_2,movie_3等等",
        col_type: 'input',
        extra: {
            type: 'textarea',
            height: 2
        }
    });



    setResult(d);
};

function ejm() {
    // addListener("onClose", $.toString(() => {
    //     clearMyVar('zhuye$input');
    // }));
    var d = [];
    d.push({

    })
};

function ssm() {
    // addListener("onClose", $.toString(() => {
    //     clearMyVar('zhuye$input');
    // }));
    var d = [];
    d.push({

    })
};