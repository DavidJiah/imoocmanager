import React, { PureComponent } from 'react';
import { Card, Table, Modal } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import '../ui/index.less';

/** 连接dva */
@connect(({
    table: { dataSource2 } = {},
    loading,
}) => ({
    dataSource2,
    loading: loading.models.table,
}))
/** 基础表格 */
class BasicTable extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [], /** 数据源 */
            selectedRowKeys: '', /** 点击每一行的key */
            // selectedItem: '', /** 点击每一行的item */
        };
    }

    /** 组件挂载之后 */
    componentWillMount() {
        /** 基础表格的数据 */
        const dataSource = [
            {
                id: '0',
                userName: 'David',
                sex: 2,
                state: 1,
                interest: '1',
                birthday: '2000-08-06',
                address: '湖南省长沙市天心区创谷产业园',
                time: '9:00',
            },
            {
                id: '2',
                userName: 'Jack',
                sex: 1,
                state: 2,
                interest: '1',
                birthday: '2000-08-07',
                address: '湖南省长沙市天心区九峰产业园',
                time: '10:00',
            },
        ];
        this.setState({ dataSource });
        /** 动态表格的数据 */
        this.request();
    }

    /** 点击每一行所触发的方法 */
    onRowClick = (item, index) => {
        const selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名:${item.userName},用户爱好:${item.interest}`,
        });
        this.setState({
            selectedRowKeys: selectKey,
            // selectedItem: item,
        });
    }

    /** 动态获取数据 */
    request=() => {
        const { dispatch } = this.props;
        dispatch({ type: 'table/list' });
    }

    /** 组件挂载 */
    render() {
        const { dataSource, selectedRowKeys } = this.state;
        const { dataSource2, loading } = this.props;
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '用户名',
                dataIndex: 'userName',
            },
            {
                title: '性别',
                dataIndex: 'sex',
                /** 判断性别 */
                render(sex) {
                    return sex == 1 ? '男' : '女';
                },
            },
            {
                title: '状态',
                dataIndex: 'state',
                /** 判断状态 */
                render(state) {
                    const config = {
                        1: '咸鱼一条',
                        2: '前端攻城狮',
                        3: '码畜',
                        4: '程序员',
                        5: '小戴同学',
                    };
                    return config[state];
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                /** 判断状态 */
                render(interest) {
                    const config = {
                        1: 'CF',
                        2: 'LOL',
                        3: 'DNF',
                        4: 'NBA',
                        5: 'CBA',
                        6: 'TD',
                        7: 'BP',
                        8: 'KDC',
                    };
                    return config[interest];
                },
            },
            {
                title: '生日',
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                dataIndex: 'address',
            },
            {
                title: '上班时间',
                dataIndex: 'time',
            },
        ];
        const rowSelection = { type: 'radio', selectedRowKeys };
        return (
            <>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Card>
                <Card loading={loading} className="card-wrap" title="动态数据渲染表格-mock" style={{ margin: '10px,0' }}>
                    <Table
                        columns={columns}
                        dataSource={dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card className="card-wrap" title="Mock单选" style={{ margin: '10px,0' }}>
                    <Table
                        columns={columns}
                        dataSource={dataSource2}
                        pagination={false}
                        bordered
                        onRow={(record, index) => ({
                            onClick: () => {
                                this.onRowClick(record, index);
                            }, /** 点击行 */
                        })}
                        rowSelection={rowSelection}
                    />
                </Card>
            </>
        );
    }
}

BasicTable.defaultProps = {
    dispatch: '',
    loading: false,
    dataSource2: [],
};

BasicTable.propTypes = {
    dispatch: PropTypes.any,
    loading: PropTypes.any,
    dataSource2: PropTypes.any,
};

export default BasicTable;
