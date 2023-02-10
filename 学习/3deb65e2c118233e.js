"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([[93], {
    3028: function (t, e, i) {
        function a(t, e) {
            var i = e[t];
            if (i) {
                var a = [];
                return i.forEach((function (t) {
                    "[object Object]" === Object.prototype.toString.call(t) ? a.push(t) : a.push({title: t, id: t})
                })), a
            }
        }

        i.d(e, {
            Z: function () {
                return a
            }
        }), i(3898), i(5389)
    }, 4523: function (t, e, i) {
        function a(t, e) {
            var i = function (t, e) {
                t = t.replace(/^[^?=]*\?/gi, "").split("#")[0];
                var i = {};
                return t.replace(/(^|&)([^&=]+)=([^&]*)/g, (function (t, e, a, l) {
                    try {
                        a = decodeURIComponent(a)
                    } catch (t) {
                    }
                    try {
                        l = decodeURIComponent(l)
                    } catch (t) {
                    }
                    a in i ? i[a] instanceof Array ? i[a].push(l) : i[a] = [i[a], l] : i[a] = /\[\]$/.test(a) ? [l] : l
                })), i
            }(t), a = parseInt(i.pageno, 10) || 1, l = {};
            return e.forEach((function (t) {
                l[t.name] = i[t.name] || t.defaultId, t.state = l
            })), {filter: l, page: a}
        }

        i.d(e, {
            Z: function () {
                return a
            }
        }), i(3898), i(3160), i(36), i(2076)
    }, 4655: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return a
            }
        });
        var a = (0, i(5440).Z)({}, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("keep-alive", [e("router-view")], 1)
        }), [], !1, null, null, null).exports
    }, 4215: function (t, e, i) {
        i.d(e, {
            Z: function () {
                return h
            }
        }), i(4476), i(4879), i(746), i(1541), i(6496), i(2627), i(6784);
        var a = i(6666), l = (i(5266), i(8631), i(3898), i(2076), i(8957), i(3160), i(1905)), n = function () {
            return i.e(128).then(i.t.bind(i, 2128, 23))
        }, r = {
            props: {input: Object}, created: function () {
                this.$props.input.type = n
            }, components: {
                FeatureGroup: function () {
                    return i.e(46).then(i.t.bind(i, 2046, 23))
                }
            }, methods: {
                clickHandle: function (t, e) {
                    (0, l.w)(e, this.input.name || "")
                }
            }
        }, d = i(5440), o = (0, d.Z)(r, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)("FeatureGroup", {
                staticClass: "features",
                attrs: {"data-bk": "list", input: t.input},
                on: {"on-click": t.clickHandle}
            })
        }), [], !1, null, "a1b94b76", null).exports, s = i(4324), c = i(6511);

        function u(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(i), !0).forEach((function (e) {
                    (0, a.Z)(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        var p = {
            props: {
                filterData: {type: Array, required: !0},
                catid: {type: Number, required: !0},
                page: {type: Number, required: !0}
            }, data: function () {
                return {
                    expanded: {},
                    noresult: !1,
                    features: {
                        name: "list",
                        data: [],
                        width: 224,
                        height: 314,
                        hover: "bright",
                        shade: 1 !== this.catid,
                        control: 1 === this.catid ? ["title", "subtitle", "rb", "rt"] : ["title", "subtitle", "rb"]
                    },
                    pageData: {
                        start: 1,
                        end: 0,
                        current: 1,
                        firstShow: 1,
                        lastShow: 1,
                        prevText: "<上一页",
                        nextText: "下一页>",
                        nextEllipsisShow: !1,
                        preEllipsisShow: !0,
                        ellipsis: {start: 2, end: 2}
                    }
                }
            }, created: function () {
                var t = this.catid, e = this.$props.page;
                this.pageData.current = e, this.getApiData(f(f({catid: t}, this.filterData[0].state), {}, {
                    size: 35,
                    pageno: e
                })), window.addEventListener("resize", this.onResize, !1)
            }, beforeDestroy: function () {
                window.removeEventListener("resize", this.onResize)
            }, methods: {
                onClick: function (t) {
                    if (t.event.preventDefault(), -1 === t.event.currentTarget.className.indexOf("active")) {
                        this.$router.push({path: t.item.href}), this.$emit("onChange", t), this.pageData.current = 1;
                        var e = this.catid;
                        this.getApiData(f(f({catid: e}, t.data.state), {}, {size: 35}))
                    }
                }, toggleMore: function (t, e) {
                    t.preventDefault(), this.$set(this.expanded, e, !this.expanded[e])
                }, getApiData: function (t) {
                    var e = this;
                    this.noresult = !1, this.features.data.forEach((function (t) {
                        t.img = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
                    })), (0, s.yb)("https://api.web.360kan.com/v1/filter/list", t, {
                        param: "callback",
                        timeout: 5e3
                    }).then((function (t) {
                        if (0 === t.data.errno && t.data.data) {
                            var i = Math.ceil(t.data.data.total / 35);
                            e.pageData.end = Math.min(i, 20), e.features.data = (0, c.Z)(t.data.data.movies, e.catid), e.features.data.length || (e.noresult = !0)
                        } else e.features.data = [], e.noresult = !0
                    })).catch((function () {
                        e.features.data = [], e.noresult = !0
                    }))
                }, getToggleText: function (t) {
                    return t ? "收起" : "更多"
                }, pageChange: function (t) {
                    var e = this.catid, i = t.current;
                    this.$router.replace({
                        path: location.search,
                        query: {pageno: i}
                    }), this.getApiData(f(f({catid: e}, this.filterData[0].state), {}, {size: 35, pageno: i}))
                }, onResize: function () {
                    var t = this;
                    this.onResize.timer && clearTimeout(this.onResize.timer), this.onResize.timer = setTimeout((function () {
                        t.$refs.filterRow.forEach((function (e, i) {
                            e.offsetHeight > e.firstChild.offsetHeight && (t.expanded[i] = !1)
                        }))
                    }), 300)
                }
            }, components: {
                FilterRow: function () {
                    return i.e(459).then(i.t.bind(i, 1459, 23))
                }, Pagination: function () {
                    return i.e(837).then(i.t.bind(i, 7837, 23))
                }, Features: o
            }
        }, h = (0, d.Z)(p, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", [i("div", {
                staticClass: "filters",
                attrs: {"data-bk": "list-filter"}
            }, t._l(this.$props.filterData, (function (e, a) {
                return i("div", {
                    key: a,
                    ref: "filterRow",
                    refInFor: !0,
                    staticClass: "filter-row-wrap",
                    class: {expanded: t.expanded[a]}
                }, [i("FilterRow", {
                    key: a,
                    staticClass: "filter-row",
                    attrs: {input: e},
                    on: {"i-click": t.onClick},
                    scopedSlots: t._u([{
                        key: "default", fn: function (e) {
                            var a = e.item;
                            return [i("span", {staticClass: "title"}, [t._v("\n            " + t._s(a.title) + "\n            "), a.hot ? i("i", {staticClass: "hot"}) : t._e()])]
                        }
                    }, {
                        key: "filter-meta", fn: function () {
                            return [i("a", {
                                staticClass: "more", attrs: {href: "###"}, on: {
                                    click: function (e) {
                                        return t.toggleMore(e, a)
                                    }
                                }
                            }, [t._v(t._s(t.getToggleText(t.expanded[a])))])]
                        }, proxy: !0
                    }], null, !0)
                })], 1)
            })), 0), t._v(" "), i("Features", {attrs: {input: t.features}}), t._v(" "), t.noresult ? i("div", {staticClass: "noresult"}, [t._v("没有找到相关影片，请尝试其他分类！")]) : t._e(), t._v(" "), i("Pagination", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.pageData.end,
                    expression: "pageData.end"
                }], staticClass: "pager", attrs: {input: t.pageData}, on: {onChange: t.pageChange}
            })], 1)
        }), [], !1, null, "4a58458a", null).exports
    }, 228: function (t, e, i) {
        i.d(e, {
            Z: function () {
                return l
            }
        }), i(5266);
        var a = {
            props: {current: {type: Number, required: !1}},
            nav: {
                data: [{title: "电视剧", href: "/dianshi/list"}, {
                    title: "电影",
                    href: "/dianying/list"
                }, {title: "综艺", href: "/zongyi/list"}, {title: "动漫", href: "/dongman/list"}]
            },
            created: function () {
                this.$options.nav.activeIndex = this.$props.current
            },
            components: {
                List: function () {
                    return i.e(586).then(i.t.bind(i, 586, 23))
                }
            }
        }, l = (0, i(5440).Z)(a, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("List", {
                staticClass: "nav",
                attrs: {"data-bk": "list-nav", input: t.$options.nav},
                scopedSlots: t._u([{
                    key: "default", fn: function (e) {
                        var a = e.title, l = e.href;
                        return e.index, [i("router-link", {staticClass: "router", attrs: {to: l}}, [t._v(t._s(a))])]
                    }
                }])
            })
        }), [], !1, null, null, null).exports
    }, 8996: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return u
            }
        });
        var a = i(4616), l = (i(8957), i(746), i(7498), i(3160), i(228)), n = i(4215), r = [{
                data: [{title: "最近热映", id: "rankhot"}, {title: "最近上映", id: "ranklatest"}, {
                    title: "最受好评",
                    id: "rankpoint"
                }], iteratorEvents: ["click"], label: "排序", name: "rank", defaultId: "rankhot"
            }, {
                data: [{title: "全部", id: ""}, {title: "言情", id: "言情"}, {title: "剧情", id: "剧情"}, {
                    title: "伦理",
                    id: "伦理"
                }, {title: "喜剧", id: "喜剧"}, {title: "悬疑", id: "悬疑"}, {title: "都市", id: "都市"}, {
                    title: "偶像",
                    id: "偶像"
                }, {title: "古装", id: "古装", hot: !0}, {title: "军事", id: "军事"}, {
                    title: "警匪",
                    id: "警匪",
                    hot: !0
                }, {title: "历史", id: "历史"}, {title: "励志", id: "励志"}, {title: "神话", id: "神话"}, {
                    title: "谍战",
                    id: "谍战"
                }, {title: "青春", id: "青春剧"}, {title: "家庭", id: "家庭剧"}, {
                    title: "动作",
                    id: "动作"
                }, {title: "情景", id: "情景"}, {title: "武侠", id: "武侠"}, {title: "科幻", id: "科幻"}, {
                    title: "其他",
                    id: "其他"
                }], iteratorEvents: ["click"], label: "类型", name: "cat", defaultId: ""
            }, {
                data: [{title: "全部", id: ""}, {title: "2022", id: "2022"}, {title: "2021", id: "2021"}, {
                    title: "2020",
                    id: "2020"
                }, {title: "2019", id: "2019"}, {title: "2018", id: "2018"}, {title: "2017", id: "2017"}, {
                    title: "2016",
                    id: "2016"
                }, {title: "2015", id: "2015"}, {title: "2014", id: "2014"}, {title: "2013", id: "2013"}, {
                    title: "2012",
                    id: "2012"
                }, {title: "2010", id: "2010"}, {title: "2009", id: "2009"}, {title: "2008", id: "2008"}, {
                    title: "2007",
                    id: "2007"
                }, {title: "更早", id: "lt_year"}], iteratorEvents: ["click"], label: "年代", name: "year", defaultId: ""
            }, {
                data: [{title: "全部", id: ""}, {title: "内地", id: "内地"}, {
                    title: "中国香港",
                    id: "香港"
                }, {title: "中国台湾", id: "台湾"}, {title: "泰国", id: "泰国"}, {
                    title: "日本",
                    id: "日本"
                }, {title: "韩国", id: "韩国"}, {title: "美国", id: "美国"}, {title: "英国", id: "英国"}, {
                    title: "新加坡",
                    id: "新加坡"
                }], iteratorEvents: ["click"], label: "地区", name: "area", defaultId: ""
            }, {data: [{title: "全部", id: ""}], iteratorEvents: ["click"], label: "明星", name: "act", defaultId: ""}],
            d = {
                "全部": ["杨幂", {title: "热巴", id: "迪丽热巴", hot: !0}, "张嘉译", "赵丽颖", "赵又廷", {
                    title: "胡歌",
                    id: "胡歌",
                    hot: !0
                }, "孙俪", "韩东君", "周迅", "张一山", "李小璐", "李沁", "陈坤", "刘亦菲", "唐嫣", "李小冉", "周冬雨", "于和伟", "李易峰", "雷佳音", "何冰", "阮经天", "梅婷", "徐峥", "祖峰", "秦海璐", "杨紫", "任嘉伦", "贾乃亮", "罗晋"],
                "内地": ["孙俪", "杨幂", "文章", "海清", "黄渤", "刘诗诗", "林永健", "刘涛", "于震", "唐嫣", "刘亦菲", {
                    title: "胡歌",
                    id: "胡歌",
                    hot: !0
                }, "黄晓明"],
                "中国香港": ["蔡少芬", "陈浩民", "佘诗曼", "宣萱", "张卫健", "谢天华", "欧阳震华", "林保怡", "陈豪", "胡杏儿", "刘恺威", "黎耀祥", "邓萃雯", "林峰", "张智霖"],
                "中国台湾": ["林心如", "霍建华", "陈乔恩", "吴奇隆", "林依晨", "明道", "贾静雯", "言承旭", "郑元畅", "贺军翔", "杨丞琳", "徐熙媛", "安以轩", "何润东", "周渝民"],
                "韩国": ["宋慧乔", "尹恩惠", "李多海", "宋承宪", "玄彬", "张赫", "金基范", "文根英", "张根硕", "权相宇", "朴信惠", "朴施厚", "张娜拉", "张东健", "朴有天"],
                "泰国": ["杰西达邦", "马里奥毛瑞尔", "Pong", "查克利·彦纳姆", "素格力·威塞哥", "卡曼妮·耶美肯", "拼塔安", "Ken", "Aum", "Weir"],
                "日本": ["堀北真希", "反町隆史", "江口洋介", "广末凉子", "小栗旬", "木村拓哉", "户田惠梨香", "松田翔太", "常盘贵子", "织田裕二", "竹内结子", "妻夫木聪", "福山雅治", "中山裕介", "观月亚理莎"],
                "美国": ["妮娜·杜波夫", "安德鲁·林肯", "吉姆·帕森斯", "布莱克·莱弗利", "艾伦·旁派", "詹妮弗·安妮斯顿", "艾米丽·万凯普", "泰瑞·海切尔", "托马斯·吉布森", "贾德·帕达里克", "内森·菲利安", "詹妮弗·莫里森"],
                "英国": ["本尼迪克特·康伯巴奇", "克里斯·奥多德", "比莉·派佩", "道格拉斯·韩歇尔", "鲁伯特·彭利·琼斯", "伯恩·乔曼", "休·博内威利", "大卫·苏切特"],
                "新加坡": ["李南星", "范文芳", "郑斌辉", "彭耀顺", "林湘萍", "郭妃丽", "李铭顺", "欧萱", "郭淑贤", "周初明", "郑惠玉", "陈莉萍", "许美珍", "曹国辉"]
            }, o = i(3028), s = i(4523), c = {
                created: function () {
                    var t = (0, s.Z)(location.search, r);
                    this.page = t.page;
                    var e = t.filter.area, i = r[3].data.find((function (t) {
                        return t.id === e
                    }));
                    i && (r[4].data = [r[4].data[0]].concat((0, a.Z)((0, o.Z)(i.title, d))))
                }, data: function () {
                    return {filterData: r, page: 1}
                }, methods: {
                    onChange: function (t) {
                        if ("area" === t.data.name) {
                            var e = (0, o.Z)(t.item.title, d);
                            this.filterData[4].data = [this.filterData[4].data[0]].concat((0, a.Z)(e))
                        }
                    }
                }, components: {
                    HeadNav: function () {
                        return i.e(890).then(i.t.bind(i, 3890, 23))
                    }, Nav: l.Z, Filters: n.Z
                }
            }, u = (0, i(5440).Z)(c, (function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "wrap"}, [i("Nav", {attrs: {current: 0}}), t._v(" "), i("Filters", {
                    attrs: {
                        catid: 2,
                        filterData: t.filterData,
                        page: t.page
                    }, on: {onChange: t.onChange}
                })], 1)
            }), [], !1, null, "03449b6f", null).exports
    }, 7193: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return u
            }
        });
        var a = i(4616), l = (i(8957), i(746), i(7498), i(3160), i(228)), n = i(4215), r = [{
                data: [{title: "最近热映", id: "rankhot"}, {title: "最近上映", id: "ranklatest"}, {
                    title: "最受好评",
                    id: "rankpoint"
                }], iteratorEvents: ["click"], label: "排序", name: "rank", defaultId: "rankhot"
            }, {
                data: [{title: "全部", id: ""}, {title: "喜剧", id: "喜剧", hot: !0}, {
                    title: "爱情",
                    id: "爱情"
                }, {title: "动作", id: "动作", hot: !0}, {title: "恐怖", id: "恐怖"}, {
                    title: "科幻",
                    id: "科幻"
                }, {title: "剧情", id: "剧情"}, {title: "犯罪", id: "犯罪"}, {title: "奇幻", id: "奇幻"}, {
                    title: "战争",
                    id: "战争",
                    hot: !0
                }, {title: "悬疑", id: "悬疑"}, {title: "动画", id: "动画"}, {title: "文艺", id: "文艺"}, {
                    title: "纪录",
                    id: "纪录"
                }, {title: "传记", id: "传记"}, {title: "歌舞", id: "歌舞"}, {title: "古装", id: "古装"}, {
                    title: "历史",
                    id: "历史"
                }, {title: "惊悚", id: "惊悚"}, {title: "伦理", id: "伦理"}, {title: "其他", id: "其他"}],
                iteratorEvents: ["click"],
                label: "类型",
                name: "cat",
                defaultId: ""
            }, {
                data: [{title: "全部", id: ""}, {title: "2022", id: "2022"}, {title: "2021", id: "2021"}, {
                    title: "2020",
                    id: "2020"
                }, {title: "2019", id: "2019"}, {title: "2018", id: "2018"}, {title: "2017", id: "2017"}, {
                    title: "2016",
                    id: "2016"
                }, {title: "2015", id: "2015"}, {title: "2014", id: "2014"}, {title: "2013", id: "2013"}, {
                    title: "2012",
                    id: "2012"
                }, {title: "2010", id: "2010"}, {title: "2009", id: "2009"}, {title: "2008", id: "2008"}, {
                    title: "2007",
                    id: "2007"
                }, {title: "更早", id: "lt_year"}], iteratorEvents: ["click"], label: "年代", name: "year", defaultId: ""
            }, {
                data: [{title: "全部", id: ""}, {title: "内地", id: "大陆"}, {
                    title: "中国香港",
                    id: "香港"
                }, {title: "中国台湾", id: "台湾"}, {title: "泰国", id: "泰国"}, {
                    title: "美国",
                    id: "美国"
                }, {title: "韩国", id: "韩国"}, {title: "日本", id: "日本"}, {title: "法国", id: "法国"}, {
                    title: "英国",
                    id: "英国"
                }, {title: "德国", id: "德国"}, {title: "印度", id: "印度"}, {title: "其他", id: "其他"}],
                iteratorEvents: ["click"],
                label: "地区",
                name: "area",
                defaultId: ""
            }, {data: [{title: "全部", id: ""}], iteratorEvents: ["click"], label: "明星", name: "act", defaultId: ""}],
            d = {
                "全部": ["成龙", "周星驰", "李连杰", {
                    title: "林正英",
                    id: "林正英",
                    hot: !0
                }, "吴京", "徐峥", "黄渤", "王宝强", "李小龙", "张国荣", "洪金宝", "姜文", "沈腾", "邓超", "巩俐", "马丽", "闫妮", "周冬雨", "刘昊然", "汤唯", "舒淇", "白百何"],
                "美国": ["安妮·海瑟薇", "斯嘉丽·约翰逊", "约翰尼·德普", "小罗伯特·唐尼", "汤姆·克鲁斯", "莱昂纳多·迪卡普里奥", "尼古拉斯·凯奇", "安吉丽娜·朱莉", "威尔·史密斯", "布鲁斯·威利斯", "西尔维斯特·史泰龙", "约瑟夫·高登-莱维特"],
                "内地": ["文章", "汤唯", "黄渤", "徐铮", "王宝强", "姜文", "葛优", "章子怡", "白百合", "周迅", "陈坤", "刘烨"],
                "中国香港": ["刘德华", "郭富城", "张国荣", "周星驰", "舒淇", "周润发", "杨紫琼", "甄子丹", "张曼玉", "梁朝伟", "梅艳芳", "刘青云", "成龙", "黄百鸣", "古天乐"],
                "韩国": ["韩艺瑟", "张东健", "张真英", "李成宰", "全度妍", "车太贤", "河智苑", "李秉宪", "孙艺珍", "裴勇俊", "金荷娜", "姜东元", "全智贤", "申贤俊", "崔胜贤", "元彬"],
                "日本": ["木村拓哉", "新垣结衣", "小栗旬", "北川景子", "堀北真希", "竹内结子", "深田恭子", "柏原崇", "绫濑遥", "小田切让", "松山健一", "广末凉子"],
                "法国": ["让·雷诺", "苏菲·玛索", "阿兰·德龙"],
                "英国": ["奥兰多·布鲁姆", "凯拉·奈特利", "肖恩·康纳利"],
                "德国": ["莫里兹·布雷多"],
                "中国台湾": ["林志玲", "陈柏霖", "彭于晏", "陈妍希", "柯震东", "桂纶镁", "张震", "徐若瑄", "徐熙媛", "林依晨", "蓝正龙", "范逸臣", "张孝全", "吴奇隆", "阮经天"],
                "泰国": ["马里奥·毛瑞尔", "赖拉·邦雅淑", "托尼·贾", "苏达拉·布查蓬", "阿南达·爱华灵咸", "阿部宽", "Jirayu La·ongmanee"],
                "印度": ["阿米尔·汗", "伊尔凡·可汗", "艾西瓦娅·雷", "桑杰·达特", "迪皮卡·帕度柯妮", "阿贾耶·德乌干", "阿克谢·库玛尔", "拉妮·玛克赫吉", "赛义夫·阿里·汗"],
                "其他": ["黄渤", "孙红雷", "郑伊健", "吴君如"]
            }, o = i(3028), s = i(4523), c = {
                created: function () {
                    var t = (0, s.Z)(location.search, r);
                    this.page = t.page;
                    var e = t.filter.area, i = r[3].data.find((function (t) {
                        return t.id === e
                    }));
                    i && (r[4].data = [r[4].data[0]].concat((0, a.Z)((0, o.Z)(i.title, d))))
                }, data: function () {
                    return {filterData: r, page: 1}
                }, methods: {
                    onChange: function (t) {
                        if ("area" === t.data.name) {
                            var e = (0, o.Z)(t.item.title, d);
                            this.filterData[4].data = [this.filterData[4].data[0]].concat((0, a.Z)(e))
                        }
                    }
                }, components: {
                    HeadNav: function () {
                        return i.e(890).then(i.t.bind(i, 3890, 23))
                    }, Nav: l.Z, Filters: n.Z
                }
            }, u = (0, i(5440).Z)(c, (function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {staticClass: "wrap"}, [i("Nav", {attrs: {current: 1}}), t._v(" "), i("Filters", {
                    attrs: {
                        catid: 1,
                        filterData: t.filterData,
                        page: t.page
                    }, on: {onChange: t.onChange}
                })], 1)
            }), [], !1, null, "db0158f0", null).exports
    }, 9210: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return o
            }
        }), i(8957);
        var a = i(228), l = i(4215), n = [{
            data: [{title: "最近热映", id: "rankhot"}, {title: "最近上映", id: "ranklatest"}],
            iteratorEvents: ["click"],
            label: "排序",
            name: "rank",
            defaultId: "rankhot"
        }, {
            data: [{title: "全部", id: ""}, {title: "热血", id: "热血", hot: !0}, {
                title: "科幻",
                id: "科幻"
            }, {title: "美少女", id: "美少女"}, {title: "魔幻", id: "魔幻"}, {
                title: "经典",
                id: "经典"
            }, {title: "励志", id: "励志"}, {title: "少儿", id: "少儿"}, {title: "冒险", id: "冒险"}, {
                title: "搞笑",
                id: "搞笑"
            }, {title: "推理", id: "推理"}, {title: "恋爱", id: "恋爱"}, {title: "治愈", id: "治愈"}, {
                title: "幻想",
                id: "幻想"
            }, {title: "校园", id: "校园"}, {title: "动物", id: "动物"}, {title: "机战", id: "机战"}, {
                title: "亲子",
                id: "亲子"
            }, {title: "儿歌", id: "儿歌"}, {title: "运动", id: "运动"}, {title: "悬疑", id: "悬疑"}, {
                title: "怪物",
                id: "怪物"
            }, {title: "战争", id: "战争"}, {title: "益智", id: "益智"}, {title: "青春", id: "青春"}, {
                title: "童话",
                id: "童话"
            }, {title: "竞技", id: "竞技"}, {title: "动作", id: "动作"}, {title: "社会", id: "社会"}, {
                title: "友情",
                id: "友情"
            }, {title: "真人版", id: "真人版"}, {title: "电影版", id: "电影版"}, {
                title: "OVA版",
                id: "OVA版"
            }, {title: "TV版", id: "TV版"}, {title: "新番动画", id: "新番动画"}, {title: "完结动画", id: "完结动画"}],
            iteratorEvents: ["click"],
            label: "类型",
            name: "cat",
            defaultId: ""
        }, {
            data: [{title: "全部", id: ""}, {title: "2022", id: "2022"}, {title: "2021", id: "2021"}, {
                title: "2020",
                id: "2020"
            }, {title: "2019", id: "2019"}, {title: "2018", id: "2018"}, {title: "2017", id: "2017"}, {
                title: "2016",
                id: "2016"
            }, {title: "2015", id: "2015"}, {title: "2014", id: "2014"}, {title: "2013", id: "2013"}, {
                title: "2012",
                id: "2012"
            }, {title: "2011", id: "2011"}, {title: "2010", id: "2010"}, {title: "2009", id: "2009"}, {
                title: "2008",
                id: "2008"
            }, {title: "2007", id: "2007"}, {title: "2006", id: "2006"}, {title: "2005", id: "2005"}, {
                title: "2004",
                id: "2004"
            }, {title: "更早", id: "更早"}], iteratorEvents: ["click"], label: "年代", name: "year", defaultId: ""
        }, {
            data: [{title: "全部", id: ""}, {title: "内地", id: "大陆"}, {title: "日本", id: "日本"}, {
                title: "美国",
                id: "美国"
            }], iteratorEvents: ["click"], label: "地区", name: "area", defaultId: ""
        }], r = i(4523), d = {
            created: function () {
                var t = (0, r.Z)(location.search, n);
                this.page = t.page
            }, data: function () {
                return {filterData: n, page: 1}
            }, components: {
                HeadNav: function () {
                    return i.e(890).then(i.t.bind(i, 3890, 23))
                }, Nav: a.Z, Filters: l.Z
            }
        }, o = (0, i(5440).Z)(d, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "wrap"}, [i("Nav", {attrs: {current: 3}}), t._v(" "), i("Filters", {
                attrs: {
                    catid: 4,
                    filterData: t.filterData,
                    page: t.page
                }
            })], 1)
        }), [], !1, null, "21fd18cf", null).exports
    }, 5098: function (t, e, i) {
        i.r(e), i.d(e, {
            default: function () {
                return o
            }
        }), i(8957);
        var a = i(228), l = i(4215), n = [{
            data: [{title: "最近热映", id: "rankhot"}, {title: "最近上映", id: "ranklatest"}],
            iteratorEvents: ["click"],
            label: "排序",
            name: "rank",
            defaultId: "rankhot"
        }, {
            data: [{title: "全部", id: ""}, {title: "脱口秀", id: "脱口秀"}, {
                title: "真人秀",
                id: "真人秀",
                hot: !0
            }, {title: "搞笑", id: "搞笑"}, {title: "选秀", id: "选秀"}, {title: "八卦", id: "八卦"}, {
                title: "访谈",
                id: "访谈"
            }, {title: "情感", id: "情感"}, {title: "生活", id: "生活"}, {title: "晚会", id: "晚会"}, {
                title: "音乐",
                id: "音乐"
            }, {title: "职场", id: "职场"}, {title: "美食", id: "美食"}, {title: "时尚", id: "时尚"}, {
                title: "游戏",
                id: "游戏"
            }, {title: "少儿", id: "少儿"}, {title: "体育", id: "体育"}, {title: "纪实", id: "纪实"}, {
                title: "科教",
                id: "科教"
            }, {title: "曲艺", id: "曲艺"}, {title: "歌舞", id: "歌舞"}, {title: "财经", id: "财经"}, {
                title: "汽车",
                id: "汽车"
            }, {title: "播报", id: "播报"}, {title: "其他", id: "其他"}],
            iteratorEvents: ["click"],
            label: "类型",
            name: "cat",
            defaultId: ""
        }, {
            data: [{title: "全部", id: ""}, {title: "邓超", id: "邓超"}, {title: "陈赫", id: "陈赫"}, {
                title: "何炅",
                id: "何炅"
            }, {title: "汪涵", id: "汪涵"}, {title: "王俊凯", id: "王俊凯", hot: !0}, {
                title: "黄磊",
                id: "黄磊"
            }, {title: "谢娜", id: "谢娜"}, {title: "黄渤", id: "黄渤"}, {
                title: "周杰伦",
                id: "周杰伦"
            }, {title: "薛之谦", id: "薛之谦"}, {title: "Angelababy", id: "Angelababy"}, {
                title: "易烊千玺",
                id: "易烊千玺"
            }, {title: "岳云鹏", id: "岳云鹏"}, {title: "王嘉尔", id: "王嘉尔"}, {
                title: "鹿晗",
                id: "鹿晗"
            }, {title: "杨幂", id: "杨幂"}, {title: "沈腾", id: "沈腾"}, {
                title: "张艺兴",
                id: "张艺兴"
            }, {title: "潘玮柏", id: "潘玮柏"}, {title: "华晨宇", id: "华晨宇"}, {
                title: "李维嘉",
                id: "李维嘉"
            }, {title: "宋小宝", id: "宋小宝"}, {title: "贾玲", id: "贾玲"}, {
                title: "沙溢",
                id: "沙溢"
            }, {title: "撒贝宁", id: "撒贝宁"}, {title: "涂磊", id: "涂磊"}],
            iteratorEvents: ["click"],
            label: "明星",
            name: "act",
            defaultId: ""
        }, {
            data: [{title: "全部", id: ""}, {title: "内地", id: "大陆"}, {
                title: "中国香港",
                id: "香港"
            }, {title: "中国台湾", id: "台湾"}, {title: "日本", id: "日本"}, {title: "欧美", id: "欧美"}],
            iteratorEvents: ["click"],
            label: "地区",
            name: "area",
            defaultId: ""
        }], r = i(4523), d = {
            created: function () {
                var t = (0, r.Z)(location.search, n);
                this.page = t.page
            }, data: function () {
                return {filterData: n, page: 1}
            }, components: {
                HeadNav: function () {
                    return i.e(890).then(i.t.bind(i, 3890, 23))
                }, Nav: a.Z, Filters: l.Z
            }
        }, o = (0, i(5440).Z)(d, (function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "wrap"}, [i("Nav", {attrs: {current: 2}}), t._v(" "), i("Filters", {
                attrs: {
                    catid: 3,
                    filterData: t.filterData,
                    page: t.page
                }
            })], 1)
        }), [], !1, null, "1a1adc61", null).exports
    }
}]);