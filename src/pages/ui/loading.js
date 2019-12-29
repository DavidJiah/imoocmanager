import React, { PureComponent } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './index.less';

/** loadin */
class Loading extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 组件挂载  */
    render() {
        const icon = <Icon type="loading" style={{ fontSize: '24px' }} />;
        const iconLoading = <Icon type="loading" style={{ fontSize: '24px' }} />;
        return (
            <>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 50px' }} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{ marginLeft: '50px' }} />
                </Card>
                <Card title="内容遮罩" className="card=wrap">
                    <Alert
                        message="React"
                        description="欢迎来到小戴同学的项目"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到小戴同学的项目"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到小戴同学的项目"
                            type="info"
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎来到小戴同学的项目"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </>
        );
    }
}
export default Loading;
