import request from '../utils/request';

/**
 * login [密码登录方法]
 * @author XiaoDai
 * @param {string} mobile [电话]
 * @param {string} password [密码]
 * @return [用户登录信息]
 */
export async function login(params) {
    const { mobile, password } = params;
    return request('/api/loginCheck', {
        method: 'GET',
        data: {
            mobile,
            password,
        },
    });
}

/**
 * codeRegister  [注册/验证码登录]
 * @author XiaoDai
 * @param phonenumber [手机号码]
 * @param code [验证码]
 * @param password [密码]
 * @param qq [QQ号]
 */
export async function codeRegister(params) {
    const { mobile, captcha, password = '', qq = '' } = params;
    return request('/login/codeRegister', {
        method: 'POST',
        data: {
            password,
            qq,
            mobile,
            code: captcha,
        },
    });
}
