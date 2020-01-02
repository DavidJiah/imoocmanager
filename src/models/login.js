import { message } from 'antd';
import router from 'umi/router';
import { login } from '../services/login';

export default {
    namespace: 'login',

    state: {},

    effects: {
        /** User登陆 */
        * login({ payload, callBack = null }, { call }) {
            const res = yield call(login, payload);
            if (res.code == 200) {
                message.success('登陆成功');
                router.push('/');
                if (callBack) callBack();
            } else {
                message.success('账号密码错误');
            }
        },
    },

    reducers: {},
};
