import React from 'react';
import { Card, Carousel } from 'antd';
import './index.less';

/** 轮播图 */
class Carousels extends React.PureComponent {
    /** 组件挂载 */
    render() {
        return (
            <>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className="slider-wrap">
                    <Carousel autoplay effect="fade">
                        <div><img src="/carousel-img/carousel-1.jpg" alt="" style={{ width: '85rem', height: '20rem' }} /></div>
                        <div><img src="/carousel-img/carousel-2.jpg" alt="" style={{ width: '85rem' }} /></div>
                        <div><img src="/carousel-img/carousel-3.jpg" alt="" style={{ width: '85rem' }} /></div>
                    </Carousel>
                </Card>
            </>
        );
    }
}
export default Carousels;
