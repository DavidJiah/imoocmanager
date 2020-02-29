import { message } from 'antd';
import { list, high } from '@/services/table';

export default {
    namespace: 'table',

    state: {
        dataSource2: [] /** 动态渲染的表格数据 */,
        dataSource3: [], /** 动态渲染的高级表格数据 */
    },

    effects: {
        /** table数据 */
        * list({ callBack = null }, { call, put }) {
            const res = yield call(list);
            if (res.code == 200) {
                yield put({
                    type: 'getTable',
                    payload: { dataSource2: res.result },
                });
            } else {
                message.success('查询失败');
            }
            if (callBack) callBack();
        },
        /** 高级table数据 */
        * high({ callBack = null }, { call, put }) {
            const res = yield call(high);
            if (res.code == 200) {
                yield put({
                    type: 'getTable',
                    payload: { dataSource3: res.result },
                });
            } else {
                message.error('查询失败');
            }
            if (callBack) callBack();
        },
    },

    reducers: {
        /** 同步更新动态表格数据 */
        getTable(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
};
