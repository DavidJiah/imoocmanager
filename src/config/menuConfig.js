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
];
export default menuList;
