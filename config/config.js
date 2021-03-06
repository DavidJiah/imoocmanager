import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';

export default {
    /** 路由配置 */
    routes: pageRoutes,
    disableCSSModules: true,
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true,
            },
        ],
    ],
    chainWebpack: webpackPlugin,
};
