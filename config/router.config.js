export default [
    /** User */
    {
        path: '/login',
        component: '../layout/login',
        routes: [
            {
                path: '/login',
                name: '登陆',
                component: './login',
            },
            {
                path: '/login/register',
                name: '注册',
                component: './login/register',
            },
            {
                path: '/login/update',
                name: '修改密码',
                component: './login/update',
            },
        ],
    },

    /** app */
    {
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './home',
            },
            {
                path: '/buttons',
                name: '按钮',
                component: './ui/buttons',
            },
            {
                path: '/modals',
                name: '弹框',
                component: './ui/modals',
            },
            {
                path: '/loading',
                name: '加载',
                component: './ui/loading',
            },
            {
                path: '/notification',
                name: '通知提醒',
                component: './ui/notice',
            },
            {
                path: '/messages',
                name: '全局提醒',
                component: './ui/message',
            },
            {
                path: '/tabs',
                name: 'tab页签',
                component: './ui/tab',
            },
            {
                path: '/Hooks',
                name: 'Hooks',
                component: './ui/hooks',
            },
            {
                path: '/gallery',
                name: '图片画廊',
                component: './ui/gallery',
            },
            {
                path: '/carousel',
                name: '轮播图',
                component: './ui/carousel',
            },
            {
                path: '/table/basic',
                name: '基础表格',
                component: './table/basicTable',
            },
            {
                path: '/table/high',
                name: '高级表格',
                component: './table/highTable',
            },
            {
                path: '/Order',
                name: '订单管理',
                component: './order',
            },
        ],
    },
];
