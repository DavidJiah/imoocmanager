import request from '@/utils/request';

/**
 * list [动态查询表单信息]
 * @author XiaoDai
 * @return [table值]
 */
export async function list() {
    return request('/table/lists', { method: 'GET' });
}
/**
 * high [动态查询高级表单信息]
 * @author XiaoDai
 * @return [表单信息]
 */
export async function high() {
    return request('/table/high/list', { method: 'GET' });
}
