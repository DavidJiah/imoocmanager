const menuList = [
    {
        title: '首页',
        key: '/admin/home',
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
            },
            {
                title: '弹框',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading',
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notification',
            },
            {
                title: '全局Message',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/tabs',
            },
        ],
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [
            {
                title: '登陆',
                key: '/admin/form/login',
            },
            {
                title: '注册',
                key: '/admin/form/reg',
            },
        ],
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '行',
                key: '/admin/form/tr',
            },
            {
                title: '列',
                key: '/admin/form/td',
            },
        ],
    },
    {
        title: '富文本',
        key: '/admin/text',
    },
    {
        title: '城市管理',
        key: '/admin/city',
    },
    {
        title: '订单管理',
        key: '/admin/Order',
    },
    {
        title: '员工管理',
        key: '/admin/people',
    },
    {
        title: '车辆地图',
        key: '/admin/car',
    },
    {
        title: '图标',
        key: '/admin/icon',
    },
    {
        title: '权限设置',
        key: '/admin/authority',
    },
];
export default menuList;
