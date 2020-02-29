import React, { PureComponent } from 'react';
import { Card, Button, Table } from 'antd';
import FilterForm from '@/components/FilterForm/index';

/** 订单管理 */
class Order extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 组件挂载 */
    render() {
        const { list, pagination } = this.state;
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
            },
        ];
        return (
            <>
                <div>
                    <Card>
                        <FilterForm />
                    </Card>
                    <Card style={{ marginTop: 10 }}>
                        <Button>订单详情</Button>
                        <Button>结束订单</Button>
                    </Card>
                    <div className="content0wrap">
                        <Table
                            bordered
                            columns={columns}
                            dataSource={list}
                            pagination={pagination}
                        />
                    </div>
                </div>
            </>
        );
    }
}
export default Order;
