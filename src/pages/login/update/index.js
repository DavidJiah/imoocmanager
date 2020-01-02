import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';
/** 修改密码 */
class Update extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 组件挂载 */
    render() {
        const { form: { getFieldDecorator } } = this.props;
        return (
            <Form onSubmit={this.handleSubmit} className="update_form">
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
                <Button type="primary" htmlType="submit" className="update_button">
                    {'修改密码'}
                </Button>
            </Form>
        );
    }
}

Update.defaultProps = { form: '' };

Update.propTypes = { form: PropTypes.any };

export default Form.create({})(Update);
