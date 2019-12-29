import React, { PureComponent } from 'react';
import { Card, Button, notification } from 'antd';
import './index.less';

/** 通知提醒 */
class notice extends PureComponent {
    /** 初始化 */
    constructor(porps) {
        super(porps);
        this.state = {};
    }

    /** 打开提醒框 */
    openNotification = (type, direction) => {
        /** 根据direction判断提醒框显示的位置 */
        if (direction) {
            notification.config({ placement: direction });
        } else {
        /** 当没有传入direction时 默认在右上角 */
            notification.config({ placement: 'topRight' });
        }
        /** 根据type现实提醒框当前的状态 */
        notification[type]({
            message: '小戴同学发工资了',
            description: '上个月考勤22天,迟到0天,实发工资500,请笑纳',
        });
    }

    /** 挂载 */
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.openNotification('success'); }}>Success</Button>
                    <Button type="primary" onClick={() => { this.openNotification('info'); }}>Info</Button>
                    <Button type="primary" onClick={() => { this.openNotification('warning'); }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification('error'); }}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.openNotification('success', 'topLeft'); }}>Success</Button>
                    <Button type="primary" onClick={() => { this.openNotification('info', 'topRight'); }}>Info</Button>
                    <Button type="primary" onClick={() => { this.openNotification('warning', 'bottomLeft'); }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification('error', 'bottomRight'); }}>Error</Button>
                </Card>
            </div>
        );
    }
}
export default notice;
