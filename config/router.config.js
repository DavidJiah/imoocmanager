export default [
    /** User */
    {
        path: '/login',
        component: '../layout/login',
        routes: [
            {
                path: '/login',
                name: 'login',
                component: './login',
            },
            {
                path: '/login/register',
                name: 'register',
                component: './login/register',
            },
            {
                path: '/login/update',
                name: 'update',
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
            {
                path: '/tabs',
                name: 'tabs',
                component: './ui/tab',
            },
            {
                path: '/Hooks',
                name: 'Hooks',
                component: './ui/hooks',
            },
            {
                path: '/gallery',
                name: 'gallery',
                component: './ui/gallery',
            },
            {
                path: '/carousel',
                name: 'carousel',
                component: './ui/carousel',
            },
            {
                path: '/table/basic',
                name: 'basic',
                component: './table/basicTable',
            },
        ],
    },
];
