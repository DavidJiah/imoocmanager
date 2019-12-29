import React, { PureComponent } from 'react';
import { Card, Button, Modal, message } from 'antd';
import './index.less';

/** 按钮组件 */
class Modals extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
        };
    }

    /** 基础模态框 */
    handleOpen=(type) => {
        this.setState({ [type]: true });
    }

    /** 信息确认框 */
    handleConfirm=(type) => {
        Modal[type]({
            title: '确认',
            content: '你学会react了吗',
            /** 确认 */
            onOk() {
                message.success('OK');
            },
        });
    }

    /** 组件挂载 */
    render() {
        const { showModal1, showModal2, showModal3, showModal4 } = this.state;
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.handleOpen('showModal1'); }}>open</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal2'); }}>自定义页脚</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal3'); }}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal4'); }}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.handleConfirm('confirm'); }}>Confirm</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('info'); }}>Info</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('success'); }}>Success</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('warning'); }}>Warning</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('error'); }}>Error</Button>
                </Card>
                <Modal
                    title="React"
                    visible={showModal1}
                    onCancel={() => { this.setState({ showModal1: false }); }}
                >
                    <p>{'Welcome to Xiao Dai\'s project'}</p>
                </Modal>
                <Modal
                    title="React"
                    visible={showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => { this.setState({ showModal2: false }); }}
                >
                    <p>{'Welcome to Xiao Dai\'s project'}</p>
                </Modal>
                <Modal
                    title="React"
                    visible={showModal3}
                    style={{ top: '20px' }}
                    onCancel={() => { this.setState({ showModal3: false }); }}
                >
                    <p>{'Welcome to Xiao Dai\'s project'}</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={showModal4}
                    onCancel={() => { this.setState({ showModal4: false }); }}
                >
                    <p>{'Welcome to Xiao Dai\'s project'}</p>
                </Modal>
            </div>
        );
    }
}
export default Modals;
