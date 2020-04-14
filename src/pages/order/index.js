import React, { PureComponent } from 'react';
import { Card, Button, Table, Form, Modal } from 'antd';
import BaseForm from '../../components/BaseForm';

const FormItem = Form.Item;
/** 订单管理 */
class Order extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            orderInfo: {},
            orderConfirmVisble: false,
        };
    }

    onRowClick = (record, index) => {
        const selectKey = [index];
        this.setState({ selectedRowKeys: selectKey });
    }

    /** 组件挂载 */
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn',
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
            },
            {
                title: '里程',
                dataIndex: 'distance',
                /** */
                render(distance) {
                    return `${distance / 1000}Km`;
                },
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
            },
            {
                title: '状态',
                dataIndex: 'status',
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
            },
        ];
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 },
        };
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys,
        };
        const { list, pagination, orderConfirmVisble, orderInfo: { bikeSn, battery, startTime, location } } = this.state;
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{ marginLeft: 10 }} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={list}
                        pagination={pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => ({
                            onClick: () => {
                                this.onRowClick(record, index);
                            },
                        })}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={orderConfirmVisble}
                    onCancel={() => {
                        this.setState({ orderConfirmVisble: false });
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {bikeSn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {`${battery}%`}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {startTime}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}
export default Order;
