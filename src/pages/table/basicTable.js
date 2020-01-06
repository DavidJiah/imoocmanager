import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';

/** 连接dva */
@connect(() => ({ }))
/** 基础表格 */
class BasicTable extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = { dataSource: [], dataSource2: [] };
    }

    /** 组件挂载之后 */
    componentWillMount() {
        /** 基础表格的数据 */
        const dataSource = [
            {
                id: '0',
                userName: 'David',
                sex: '男',
                state: '1',
                interest: '1',
                birthday: '2000-08-06',
                address: '湖南省长沙市天心区创谷产业园',
                time: '9:00',
            },
            {
                id: '2',
                userName: 'Jack',
                sex: '男',
                state: '1',
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

    /** 动态获取数据 */
    request=() => {
        const { dispatch } = this.props;
        dispatch({ type: 'table/list' });
    }

    /** 组件挂载 */
    render() {
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
            },
            {
                title: '状态',
                dataIndex: 'state',
            },
            {
                title: '爱好',
                dataIndex: 'interest',
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
                title: '早起事件',
                dataIndex: 'time',
            },
        ];
        const { dataSource, dataSource2 } = this.state;
        return (
            <>
                <Card title="基础表格">
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{ margin: '10px,0' }}>
                    <Table
                        columns={columns}
                        dataSource={dataSource2}
                        pagination={false}
                    />
                </Card>
            </>
        );
    }
}

BasicTable.defaultProps = { dispatch: '' };

BasicTable.propTypes = { dispatch: PropTypes.any };

export default BasicTable;
