import React, { PureComponent } from 'react';
import './index.less';
import { Card, Button, message } from 'antd';

/** 全局提示框 */
class Message extends PureComponent {
    /** 显示全局提示框 */
    showMessage = (type) => {
        message[type]('欢迎使用小戴同学');
    }

    /** 挂载 */
    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.showMessage('success'); }}>Success</Button>
                    <Button type="primary" onClick={() => { this.showMessage('info'); }}>Info</Button>
                    <Button type="primary" onClick={() => { this.showMessage('warning'); }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.showMessage('error'); }}>Error</Button>
                    <Button type="primary" onClick={() => { this.showMessage('loading'); }}>Loading</Button>
                </Card>
            </div>
        );
    }
}
export default Message;
