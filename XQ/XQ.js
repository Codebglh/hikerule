var erjimenu = [
    {
        title: "剧情简介",
        url: "empty#noRecordHistory##noHistory#",
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/messages.png',
        col_type: 'icon_small_3'
    },
    {
        title: "观影设置",
        url: $('hiker://empty#noRecordHistory##noHistory#').rule(() => {
            require(config.依赖.match(/http(s)?:\/\/.*\//)[0] + 'SrcJyMenu.js');
            lookset();
        }),
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/setting.png',
        col_type: 'icon_small_3'
    },
    {
        title: "更多片源",
        url: "empty#noRecordHistory##noHistory#",
        pic_url: 'https://ghproxy.com/https://raw.githubusercontent.com/Codebglh/hikerule/main/XQ/src/search.png',

        col_type: 'icon_small_3',

    }
]