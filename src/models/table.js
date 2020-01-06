import { message } from 'antd';
// import router from 'umi/router';
import { list } from '@/services/table';

export default {
    namespace: 'table',

    state: {},

    effects: {
        /** User登陆 */
        * list({ callBack = null }, { call }) {
            const res = yield call(list);
            if (res.code == 200) {
                console.log(res);
                if (callBack) callBack();
            } else {
                message.success('查询失败');
            }
        },
    },

    reducers: {},
};
