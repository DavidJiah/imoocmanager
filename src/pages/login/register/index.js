import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import router from 'umi/router';

/** 注册 */
class Register extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = { };
    }

    /** 组件挂载 */
    render() {
        const { form: { getFieldDecorator } } = this.props;

        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="用户名">
                    {getFieldDecorator('username', { rules: [{ required: true, message: '用户名不能为空!', whitespace: true }] })(<Input />)}
                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的密码!',
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="确认密码">
                    {getFieldDecorator('confirm', {
                        rules: [
                            {
                                required: true,
                                message: '请确认密码!',
                            },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="手机号码">
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                pattern: /^[1]([3-9])[0-9]{9}$/,
                                message: '请输入正确的手机号码!',
                            },
                            {
                                required: true,
                                message: '手机号不能为空!',
                            },

                        ],
                    })(<Input style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: '您的邮箱格式有误!',
                            },
                            {
                                required: true,
                                message: '请输入您的邮箱!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Button type="primary" style={{ width: '67%', marginLeft: '6.4rem' }} htmlType="submit">
                    {'注册'}
                </Button>
                <div style={{ marginLeft: '14.5rem' }}>
                    {'已有账号?'}
                    <Button type="link" onClick={() => { router.push('/login'); }}>立即登陆!</Button>
                </div>
            </Form>
        );
    }
}

Register.defaultProps = {
    form: '',
    getFieldDecorator: '',
};

Register.propTypes = {
    form: PropTypes.any,
    getFieldDecorator: PropTypes.any,
};

export default Form.create({})(Register);
