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
        ],
    },
];
