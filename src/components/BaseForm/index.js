import React from 'react';
import { Input, Select, Form, Button, Checkbox, DatePicker } from 'antd';
import Utils from '../../utils/utils';

const FormItem = Form.Item;
/** */
class FilterForm extends React.Component {
    handleFilterSubmit = () => {
        const fieldsValue = this.props.form.getFieldsValue();// eslint-disable-line
        this.props.filterSubmit(fieldsValue);// eslint-disable-line
    }

    reset = () => {
        this.props.form.resetFields();// eslint-disable-line
    }

    initFormList = () => {
        const { getFieldDecorator } = this.props.form;// eslint-disable-line
        const { formList } = this.props;// eslint-disable-line
        const formItemList = [];
        if (formList && formList.length > 0) {// eslint-disable-line
            formList.forEach((item, i) => {// eslint-disable-line
                const { label } = item;
                const { field } = item;
                const initialValue = item.initialValue || '';
                const { placeholder } = item;
                const { width } = item;
                if (item.type == '时间查询') {
                    const begin_time = (// eslint-disable-line
                        <FormItem label="订单时间" key={field}>
                            {
                                getFieldDecorator('begin_time')(
                                    <DatePicker showTime placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />,
                                )
                            }
                        </FormItem>
                    );
                    formItemList.push(begin_time);
                    const end_time = (// eslint-disable-line
                        <FormItem label="~" colon={false} key={field}>
                            {
                                getFieldDecorator('end_time')(
                                    <DatePicker showTime placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />,
                                )
                            }
                        </FormItem>
                    );
                    formItemList.push(end_time);
                } else if (item.type == 'INPUT') {
                    const INPUT = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator([field], { initialValue })(
                                    <Input type="text" placeholder={placeholder} />,
                                )
                            }
                        </FormItem>
                    );
                    formItemList.push(INPUT);
                } else if (item.type == 'SELECT') {
                    const SELECT = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator([field], { initialValue })(
                                    <Select
                                        style={{ width }}
                                        placeholder={placeholder}
                                    >
                                        {Utils.getOptionList(item.list)}
                                    </Select>,
                                )
                            }
                        </FormItem>
                    );
                    formItemList.push(SELECT);
                } else if (item.type == 'CHECKBOX') {
                    const CHECKBOX = (
                        <FormItem label={label} key={field}>
                            {
                                getFieldDecorator([field], {
                                    valuePropName: 'checked',
                                    initialValue, // true | false
                                })(
                                    <Checkbox>
                                        {label}
                                    </Checkbox>,
                                )
                            }
                        </FormItem>
                    );
                    formItemList.push(CHECKBOX);
                }
            });
        }
        return formItemList;
    }

    /** */
    render() {
        return (
            <Form layout="inline">
                { this.initFormList() }
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
export default Form.create({})(FilterForm);
