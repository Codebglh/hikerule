d.push({
    title: '详情页标识',
    url: $.toString(() => {
        return $('清空输入?').confirm(() => {
            putMyVar('detailUrl', '');
            refreshPage(false);
            return 'toast://已清空详情页标识'
        });
    }),
    col_type: "input",
    desc: "输入网站的影片详情页标识或完整链接,必填",
    pic_url: "",
    extra: {
        defaultValue: getMyVar('detailUrl', 'detail'),
        onChange: "putMyVar('detailUrl',input)",
        titleVisible: true,
        textSize: 13,
        type: "textarea",
        height: 1,
    }
});
d.push({
    title: '系统功能',
    url: $.toString(() => {
        return $('清空输入?').confirm(() => {
            putMyVar('system', '');
            refreshPage(false);
            return 'toast://已清空系统功能链接'
        });
    }),
    col_type: "input",
    desc: "拦截网站的某个可点击链接进行注入模板的设置功能,选填。不拦截填true",
    pic_url: "",
    extra: {
        defaultValue: getMyVar('system', 'true'),
        onChange: "putMyVar('system',input)",
        titleVisible: true,
        textSize: 13,
        type: "textarea",
        height: 2,
    }
});