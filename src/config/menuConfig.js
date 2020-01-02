const menuList = [
    {
        title: '首页',
        key: '/',
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/buttons',
            },
            {
                title: '弹框',
                key: '/modals',
            },
            {
                title: 'Loading',
                key: '/loading',
            },
            {
                title: '通知提醒',
                key: '/notification',
            },
            {
                title: '全局Message',
                key: '/messages',
            },
            {
                title: 'Tab页签',
                key: '/tabs',
            },
        ],
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登陆',
                key: '/login',
            },
            {
                title: '注册',
                key: '/login/register',
            },
            {
                title: '修改',
                key: '/login/update',
            },
        ],
    },
    {
        title: '表格',
        key: '/table',
        children: [
            {
                title: '行',
                key: '/tr',
            },
            {
                title: '列',
                key: '/td',
            },
        ],
    },
    {
        title: '富文本',
        key: '/text',
    },
    {
        title: '城市管理',
        key: '/city',
    },
    {
        title: '订单管理',
        key: '/Order',
    },
    {
        title: '员工管理',
        key: '/people',
    },
    {
        title: '车辆地图',
        key: '/car',
    },
    {
        title: '图标',
        key: '/icon',
    },
    {
        title: '权限设置',
        key: '/authority',
    },
];
export default menuList;
