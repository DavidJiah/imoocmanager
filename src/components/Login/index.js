import React, { PureComponent } from 'react';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import router from 'umi/router';
import './index.less';

/** 登陆 */
class Login extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 组件挂载之前 */
    componentWillMount() {
    }

    /** 登陆 */
    handleSubmit = (e) => {
        e.preventDefault();
        const { form: { validateFields }, onSubmit } = this.props;
        validateFields((err, values) => {
            if (!err) {
                onSubmit(err, values);
            }
        });
    };


    /** 组件挂载 */
    render() {
        const { form: { getFieldDecorator } } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', { rules: [{ required: true, message: 'Please input your username!' }] })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your Password!' }] })(
                        <Input.Password placeholder="Password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>{'记住密码'}</Checkbox>)}
                    <Button type="link" className="login-form-forgot" onClick={() => { router.push('/login/update'); }}>{'忘记密码!'}</Button>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {'登陆'}
                    </Button>
                    <Icon type="user-add" />
                    <Button type="link" onClick={() => { router.push('/login/register'); }}>{'立即注册!'}</Button>
                </Form.Item>
            </Form>
        );
    }
}

Login.defaultProps = {
    validateFields: '',
    form: '',
    onSubmit: () => {},
};

Login.propTypes = {
    validateFields: PropTypes.any,
    form: PropTypes.any,
    onSubmit: PropTypes.func,
};

export default Form.create({})(Login);
