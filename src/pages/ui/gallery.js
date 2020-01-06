/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './index.less';

/** 图片画廊 */
export default class Gallery extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentImg: '',
        };
    }

    /** 打开图片 */
    openGallery=(imgSrc) => {
        this.setState({ currentImg: imgSrc, visible: true });
    }

    /** 组件挂载 */
    render() {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png'],
            ['6.png', '7.png', '8.png', '9.png'],
            ['11.png', '12.png', '13.png', '14.png'],
            ['16.png', '17.png', '18.png', '19.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png'],
            ['5.png', '10.png', '15.png', '20.png'],
        ];
        const imgList = imgs.map(list => list.map(item => (
            <Card
                style={{ marginBottom: '10px' }}
                cover={<img src={`/gallery/${item}`} alt="" />}
                onClick={() => { this.openGallery(`/gallery/${item}`); }}
            >
                <Card.Meta
                    title="React study"
                    description="小戴同学"
                />
            </Card>
        )));
        const { currentImg, visible } = this.state;
        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    {
                        imgList.map((item, index) => (
                            <Col md={4}>
                                {imgList[index]}
                            </Col>
                        ))
                    }
                </Row>
                <Modal
                    width={300}
                    height={500}
                    visible={visible}
                    onCancel={() => {
                        this.setState({ visible: false });
                    }}
                    onOk={() => {
                        this.setState({ visible: false });
                    }}
                    title="图片画廊"
                >
                    <img alt="" src={currentImg} style={{ width: '100%' }} />
                </Modal>
            </div>
        );
    }
}
