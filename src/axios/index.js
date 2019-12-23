import Jsonp from 'jsonp';
/**  */
class Axios {
    /** */
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, { param: 'callback' }, (err, response) => {
                if (response.status == '1') {
                    resolve(response.lives[0]);
                } else {
                    reject(response.message);
                }
            });
        });
    }
}
export default Axios;
