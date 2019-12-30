import React, { PureComponent } from 'react';
import './index.less';
import { Card, Tabs, message, Icon } from 'antd';

const { TabPane } = Tabs;
/** Tab页签 */
class Tab extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = { panes: [], activeKey: '1' };
    }

    /** 组件挂载之前 */
    componentWillMount() {
        this.newTabIndex = 0;
        /** 动态标签 */
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1',
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2',
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3',
            },
        ];
        this.setState({ panes });
    }

    /** 第二个tab的onchange事件触发 */
    callback = (key) => {
        message.info(`您选择了页签:${key}`);
    }

    /** 动态修改key */
    onChange = (activeKey) => {
        this.setState(activeKey);
    }

    /** 调用新增和删除动态标签 */
    onEdit=(targetKey, action) => {
        this[action](targetKey);
    }

    /** 新增标签 */
    add=() => {
        const { panes } = this.state;
        const activeKeys = `newTab${this.newTabIndex += 1}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKeys });
        this.setState({ panes, activeKey: activeKeys });
    }

    /** 删除标签 */
    remove = (targetKey) => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        // eslint-disable-next-line
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    /** 组件挂载 */
    render() {
        const { panes, activeKey } = this.state;
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">欢迎学习React</TabPane>
                        <TabPane tab="Tab 2" key="2">欢迎使用小戴同学</TabPane>
                        <TabPane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane
                            tab={(
                                <span>
                                    <Icon type="plus" />
                                    {'Tab 1'}
                                </span>
                            )}
                            key="1"
                        >
                            {'欢迎使用小戴同学'}
                        </TabPane>
                        <TabPane
                            tab={(
                                <span>
                                    <Icon type="edit" />
                                    {'Tab 2'}
                                </span>
                            )}
                            key="2"
                        >
                            {'欢迎学习React'}
                        </TabPane>
                        <TabPane
                            tab={(
                                <span>
                                    <Icon type="delete" />
                                    {'Tab 3'}
                                </span>
                            )}
                            key="3"
                        >
                            {'React是一个非常受欢迎的MV*框架'}
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab动态可编辑页签" className="card-wrap">
                    <Tabs
                        onEdit={this.onEdit}
                        defaultActiveKey="1"
                        onChange={this.onChange}
                        activeKey={activeKey}
                        type="editable-card"
                    >
                        {
                            panes.map(item => <TabPane tab={item.title} key={item.key} />)
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
export default Tab;
