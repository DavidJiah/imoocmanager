import { message } from 'antd';
import { list } from '@/services/table';

export default {
    namespace: 'table',

    state: { dataSource2: [] /** 动态渲染的表格数据 */ },

    effects: {
        /** User登陆 */
        * list({ callBack = null }, { call, put }) {
            const res = yield call(list);
            if (res.code == 200) {
                yield put({
                    type: 'getTable2',
                    payload: { dataSource2: res.result },
                });
            } else {
                message.success('查询失败');
            }
            if (callBack) callBack();
        },
    },

    reducers: {
        /** 同步更新动态表格数据 */
        getTable2(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
};
