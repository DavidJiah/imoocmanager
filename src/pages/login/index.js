import React, { PureComponent } from 'react';
import { Form } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import Login from '../../components/Login';
import './index.less';

/** 连接dva */
@connect(({ loading }) => ({ loading }))

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
            const { dispatch } = this.props;
            dispatch({
                type: 'login/login',
                payload: {
                    username,
                    password,
                },
                callBack: () => {
                    if (remember) {
                        localStorage.setItem('username', username);
                        localStorage.setItem('password', password);
                    }
                },
            });
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

IndexLogin.defaultProps = { dispatch: '' };

IndexLogin.propTypes = { dispatch: PropTypes.any };

export default Form.create({})(IndexLogin);
