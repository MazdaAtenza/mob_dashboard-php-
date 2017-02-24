'use strict';

/**
 * @ngdoc function
 * @name prealarmFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prealarmFrontendApp
 */

componentApp.factory('umsStatisticsList', function() {   
     return {
        title: ["日期", "启动设备", "新设备", "新注册用户", "登录用户", "平均停留时长", "注册转化率", "平均打开次数"],
        allInfoList: [
            {date: "2017-01-01", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-02", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-03", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-04", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-05", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-06", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-07", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-08", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-09", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-10", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-01-11", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
        ],
        IOSInfoList: [
            {date: "2017-02-01", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-02", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-03", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-04", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-05", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-06", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-07", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-08", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-02-09", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
        ],
        AndroidInfoList: [
            {date: "2017-03-01", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-03-02", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-03-03", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-03-04", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
            {date: "2017-03-05", startDevice: "1209", newDevice: "298", newRegister: "100", newLogoin: "1309", onlineTime: "12'13\"", transformRate: "30%", openTimes: "14"},
        ]
    };
});
 
componentApp.factory('umsSaveDate', function() {   
     return {
        tabs: [
            {tabNo: 0, value: "allInfoList", platformName: "全部", status: true, url: "one.tpl.html", statisticsList: [], cur_shown_list:[], cur_page: 1, page_size: 4},
            {tabNo: 1, value: "IOSInfoList", platformName: "IOS", status: false, url: "two.tpl.html", statisticsList: [], cur_shown_list:[], cur_page: 1, page_size: 3},
            {tabNo: 2, value: "AndroidInfoList", platformName: "Android", status: false, url: "three.tpl.html", statisticsList: [], cur_shown_list:[], cur_page: 1, page_size: 2}
        ]
    }
});

componentApp.factory("fieldSettingDate", function(){
    return {
        title: ["数据字段名", "字段名称","数据类型", "说明","分类", "是否开启",],
        fieldContent: [
            {enName: "id", name: "ID", type: "字符串类型(String)", note: "最大不超过1MB，其次，超过1KB的字段不给创建索引", classify: "基本资料字段", active: false},
            {enName: "mima", name: "mima ", type: "数值类型(Number)", note: "不超过16字节，支持整数型以及浮点型", classify: "社交资料字段", active: true},
            {enName: "nicheng", name: "昵称  ", type: "时间类型(Date)", note: "数据库的日期时间格式，客户端、前端、服务端以时间戳的形式通", classify: "基本资料字段", active: false},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "自定义资料字段", active: true},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "通用资料字段", active: true},
            {enName: "nicheng", name: "昵称  ", type: "时间类型(Date)", note: "数据库的日期时间格式，客户端、前端、服务端以时间戳的形式通", classify: "基本资料字段", active: false},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "社交资料字段", active: true},
            {enName: "id", name: "ID", type: "字符串类型(String)", note: "最大不超过1MB，其次，超过1KB的字段不给创建索引", classify: "通用资料字段", active: false},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "自定义资料字段", active: true},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "基本资料字段", active: true},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "社交资料字段", active: true},
            {enName: "nicheng", name: "昵称  ", type: "时间类型(Date)", note: "数据库的日期时间格式，客户端、前端、服务端以时间戳的形式通", classify: "基本资料字段", active: false},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "自定义资料字段", active: true},
            {enName: "nicheng", name: "昵称  ", type: "时间类型(Date)", note: "数据库的日期时间格式，客户端、前端、服务端以时间戳的形式通", classify: "社交资料字段", active: false},
            {enName: "touxiang", name: "头像", type: "数组类型(Array)", note: "仅支持String、Number、Boolean、Date类型的数组", classify: "社交资料字段", active: true},
        ]
    }
})

componentApp.factory('umsSaveFieldDate', function() {   
    return {
        thisFieldDate: [],
        cur_shown_list:[], 
        cur_page: 1, 
        page_size: 3
    }

});

componentApp.factory("umsUserNumberFilter", function(){
    return {
        sortType: {
            options: [
                {
                    key: "1",
                    value: "注册时间"
                },
                {
                    key: "2",
                    value: "最后登录时间"
                }
            ],
            setValue: "注册时间",
            filedName:"排序",
            width: 3
        },
        logoinDate: {
            options: [
                {
                    key: "1",
                    value: "注册日期"
                },
                {
                    key: "2",
                    value: "登录日期"
                }
            ],
            setValue: "登录日期",
            filedName:"",
            width: 2
        },
        registerDate: {
            options: [
            {
                key: "1",
                value: "注册日期"
            },
            {
                key: "2",
                value: "登录日期"
            }
        ],
            setValue: "注册日期",
            filedName:"",
            width: 2
        },
        registerType: {
            options: [
            {
                key: "1",
                value: "微信"
            },
            {
                key: "2",
                value: "QQ"
            },
            {
                key: "3",
                value: "微博"
            },
            {
                key: "4",
                value: "手机号"
            }
        ],
            setValue: "注册类型",
            filedName:"",
            width: 2
        }
    };
});

componentApp.factory("umsUserNumberList", function(){
    return {
        title: ["ID", "头像", "昵称", "手机号码", "注册方式", "注册时间", "终端", "登陆次数", "操作"],
        userList: [
            {ID: "9098674", headImg: "../../../../images/avatar5.png", nickname:"阿斯达所多", phoneNo: "12345678901", registerType: "微信", registerTime: "2012-06-18", terminal: "iPhone7", loginTime: "5", operation: "编辑"},
            {ID: "2468012", headImg: "../../../../images/avatar5.png", nickname:"二东方新城", phoneNo: "09876543211", registerType: "QQ", registerTime: "2016-06-18", terminal: "iPhone7", loginTime: "6", operation: "编辑"},
            {ID: "1357926", headImg: "../../../../images/avatar5.png", nickname:"高合金钢鸡", phoneNo: "18888888888", registerType: "微博", registerTime: "2013-06-18", terminal: "iPhone7", loginTime: "2", operation: "编辑"},
            {ID: "8375189", headImg: "../../../../images/avatar5.png", nickname:"国剧盛典所", phoneNo: "16666666666", registerType: "手机号码", registerTime: "2015-06-18", terminal: "iPhone7", loginTime: "8", operation: "编辑"},
         ],
    }
});