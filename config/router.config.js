export default [
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
                name: 'buttons',
                component: './ui/buttons',
            },
            {
                path: '/modals',
                name: 'modals',
                component: './ui/modals',
            },
            {
                path: '/loading',
                name: 'loading',
                component: './ui/loading',
            },
            {
                path: '/notification',
                name: 'notice',
                component: './ui/notice',
            },
            {
                path: '/messages',
                name: 'message',
                component: './ui/message',
            },
        ],
    },
];
