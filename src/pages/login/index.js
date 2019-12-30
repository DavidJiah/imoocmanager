import React, { PureComponent } from 'react';
import { Form } from 'antd';
// import PropTypes from 'prop-types';
import Login from '../../components/Login';
import './index.less';

/** 登陆 */
class IndexLogin extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 登陆 */
    onSubmit = (err, values) => {
        if (!err) {
            const { username, password, remember } = values;
            console.log('username', username, 'password', password, 'remember', remember);
        }
    };

    /** 组件挂载 */
    render() {
        return (
            <div className="Login">
                <Login onSubmit={this.onSubmit} />
            </div>
        );
    }
}

IndexLogin.defaultProps = {};

IndexLogin.propTypes = {};

export default Form.create({})(IndexLogin);
