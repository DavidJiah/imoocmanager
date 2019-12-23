/**
 * formateDate 获取时间
 * @author XiaoDai
 * @param string time [时间戳]
 * @return 系统时间
 */
export function formateDate(time) {
    if (!time) return '';
    const date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
/**
 * isEmpty [判断一个值是否为空]
 * @author XiaoDai
 * @param string key [description]
 * @return 是否为空
 */
export function isEmpty(key) {
    const type = typeof key;
    if (type == 'undefined' || type == 'null') return true;
    if (type == 'string') {
        const res = key.replace(/(^\s*)|(\s*$)/g, '');
        if (res == '' || res == null || res == 'null' || res == undefined || res == 'undefined') { return true; }
        return false;
    }
    if (type == 'object') {
    /** 数组或者对象 */
        if (key == null) return true;
        if (Object.keys(key).length > 0) return false;
        return true;
    }
    if (type == 'boolean') return !key;
    if (type == 'number') return !key;
    return true;
}

/**
 * jsonDecode [解析json]
 * @author XiaoDai
 * @param string json [要进行解析的json字符串]
 * @param object defaultValue [解析失败时的默认结果]
 * @return 解析值
 */
export function jsonDecode(json = '', defaultValue = []) {
    try {
        return JSON.parse(json);
    } catch (e) {
        return defaultValue;
    }
}

/**
 * emptyOrBlank [进行对象的判空处理，返回一个默认值]
 * @author XiaoDai
 * @param object object [要进行判空的对象]
 * @param string key [要进行判空的对象的键名]
 * @param any defaultValue [若是为空要进行设置默认值]
 * @param boolean isJson [是不是要进行解json操作]
 * @return 解析值
 */
export function emptyOrBlank(object, key, defaultValue = '', isJson = false) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !isEmpty(object[key])) {
    /** 若是键存在且键值不为空 */
        if (isJson) {
            /** 若是要解json */
            return jsonDecode(object[key], defaultValue);
        } /** 直接读值 */
        return object[key];
    }
    return defaultValue;
}

/**
 * 存储 Session
 */
export function setSession(name, content) {
    if (isEmpty(name)) return false;
    if (typeof content !== 'string') {
        return window.sessionStorage.setItem(name, JSON.stringify(content));
    }
    return window.sessionStorage.setItem(name, content);
}
/**
 * 获取 Session
 */
export function getSession(name) {
    if (!name) return '';
    return window.sessionStorage.getItem(name) ? window.sessionStorage.getItem(name) : '';
}
/**
 * 清除 Session
 */
export function clearSession(name) {
    if (isEmpty(name)) window.sessionStorage.clear();
    window.sessionStorage.removeItem(name);
}

/**
 * 存储 Storage
 */
export function setStorage(name, content) {
    if (isEmpty(name)) return false;
    if (typeof content !== 'string') {
        return window.localStorage.setItem(name, JSON.stringify(content));
    }
    return window.localStorage.setItem(name, content);
}
/**
 * 获取 Storage
 */
export function getStorage(name) {
    if (!name) return '';
    return window.localStorage.getItem(name) ? window.localStorage.getItem(name) : '';
}
/**
 * 清除 Storage
 */
export function clearStorage(name) {
    if (isEmpty(name)) window.localStorage.clear();
    window.localStorage.removeItem(name);
}

/**
 * 随机生成颜色
 * @author majing
 * @return 解析值
 */
export function getRandomColor() {
    const c1 = Math.floor(Math.random() * 255);
    const c2 = Math.floor(Math.random() * 255);
    const c3 = Math.floor(Math.random() * 255);
    return `rgb(${c1},${c2},${c3})`;
}
/**
 * ajaxDecrypt ajax 数据解密方法
 * @author XiaoDai
 * @param {string} response [要进行解密的值]
 */
export function ajaxDecrypt(response) {
    const result = response.split('¥');
    const data = result[0];
    const key = result[1];
    let x = 0;
    let char = '';
    let str = '';
    const enData = window.atob(data);
    const len = enData.length;
    const l = key.length;
    for (let i = 0; i < len; i += 1, x += 1) {
        if (x == l) x = 0;
        char = `${char}${key[x]}`;
    }
    for (let i = 0; i < len; i += 1) {
        if (enData[i].charCodeAt() < char[i].charCodeAt()) {
            str = `${str}${window.String.fromCharCode((enData[i].charCodeAt() + 256) - char[i].charCodeAt())}`;
        } else {
            str = `${str}${window.String.fromCharCode(enData[i].charCodeAt() - char[i].charCodeAt())}`;
        }
    }
    return str;
}

/**
 * ajaxEncrypt ajax 数据加密方法
 * @author XiaoDai
 * @param {string} data [要进行加密的值]
 */
export function ajaxEncrypt(data) {
    const key = Date.parse(new Date());
    let x = 0;
    let char = '';
    let str = '';
    const len = data.length;
    const l = key.length;
    for (let i = 0; i < len; i += 1, x += 1) {
        if (x == l) x = 0;
        char = `${char}${key[x]}`;
    }
    for (let i = 0; i < len; i += 1) {
        str = `${str}${window.String.fromCharCode(data[i].charCodeAt() + (char[i].charCodeAt() % 256))}`;
    }
    return `${window.btoa(data)}¥${key}`;
}
