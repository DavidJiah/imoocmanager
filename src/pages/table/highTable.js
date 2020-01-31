import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';

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
/** 连接dva */
@connect(({
    table: { dataSource3 } = {},
    loading,
}) => ({
    dataSource3,
    loading: loading.models.table,
}))
/**
 * 高级表格
 */
class highTable extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = { sortOrder: '' };
    }

    /** 组件挂载之前 */
    componentWillMount() {
        this.getTableList();
    }

    /** 动态获取排序表格数据 */
    getTableList=() => {
        const { dispatch } = this.props;
        dispatch({ type: 'table/high' });
    }

    /** 排序 */
    handleChange=(pagination, filters, sorter) => {
        this.setState({ sortOrder: sorter.order });
    }

    /** 组件挂载 */
    render() {
        const { sortOrder } = this.state;
        /** 头部固定columns */
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                /** 判断性别 */
                render(sex) {
                    return sex == 1 ? '男' : '女';
                },
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
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
                width: 120,
                dataIndex: 'birthday',
            },
            {
                title: '地址',
                width: 80,
                dataIndex: 'address',
            },
            {
                title: '上班时间',
                width: 80,
                dataIndex: 'time',
            },
        ];
        /** 表格排序columns */
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName',
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex',
                /** 判断性别 */
                render(sex) {
                    return sex == 1 ? '男' : '女';
                },
            },
            {
                title: '年龄',
                key: 'age',
                width: 80,
                dataIndex: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder,
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
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
        ];
        const { dataSource3 } = this.props;
        return (
            <>
                <Card title="头部固定" className="card-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card className="card-wrap" title="表格排序" style={{ margin: '10px,0' }}>
                    <Table
                        columns={columns2}
                        dataSource={dataSource3}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
            </>
        );
    }
}
highTable.defaultProps = {
    dispatch: '',
    dataSource3: [],
};

highTable.propTypes = {
    dispatch: PropTypes.any,
    dataSource3: PropTypes.any,
};
export default highTable;
