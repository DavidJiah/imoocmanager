import React, { PureComponent } from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './index.less';

/** 按钮组件 */
class Buttons extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            size: 'default',
        };
    }

    /** 组件挂载 */
    render() {
        const { loading, size } = this.state;
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">小戴同学</Button>
                    <Button>小戴同学</Button>
                    <Button type="dashed">小戴同学</Button>
                    <Button type="danger">小戴同学</Button>
                    <Button disabled>小戴同学</Button>
                    <Button type="link">小戴同学</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search" />
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" loading={loading} shape="circle" />
                    <Button loading={loading}>点击加载</Button>
                    <Button shape="circle" loading={loading} />
                    <Button type="primary" onClick={() => { this.setState({ loading: false }); }}>关闭</Button>
                    <Button type="primary" onClick={() => { this.setState({ loading: true }); }}>加载</Button>
                </Card>
                <Card title="按钮组" className="card-wraps">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary">
                            {'前进'}
                            <Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={size} onChange={(e) => { this.setState({ size: e.target.value }); }}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>小戴同学</Button>
                    <Button size={size}>小戴同学</Button>
                    <Button type="dashed" size={size}>小戴同学</Button>
                    <Button type="danger" size={size}>小戴同学</Button>
                    <Button disabled size={size}>小戴同学</Button>
                    <Button type="link" size={size}>小戴同学</Button>
                </Card>
            </div>
        );
    }
}
export default Buttons;
