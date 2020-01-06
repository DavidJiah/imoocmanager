import request from '@/utils/request';

/**
 * list [查询表单信息]
 * @author XiaoDai
 * @return [table值]
 */
export async function list() {
    return request('/table/list', { method: 'GET' });
}
/**
 * login [密码登录方法]
 * @author XiaoDai
 * @param {string} mobile [电话]
 * @param {string} password [密码]
 * @return [用户登录信息]
 */
export async function log1in(params) {
    const { mobile, password } = params;
    return request('/login/login', {
        method: 'GET',
        data: {
            mobile,
            password,
        },
    });
}
