import React, { PureComponent } from 'react';
import { Row, Col, Button, Popover } from 'antd';
import './index.less';
import { AMap } from 'react-amap';
import { formateDate, isEmpty } from '../../utils/common';
import axios from '../../axios';

/** 头部 */
class Header extends PureComponent {
    /** 初始化 */
    constructor(props) {
        super(props);
        this.state = {
            userName: '小戴同学',
            sysTime: '', /** 当前时间戳 */
            province: '', /** 省 */
            city: '', // 市
            weather: '', // 天气
            temperature: '', // 温度
            winddirection: '', // 风向
            windpower: '', // 风速
            humidity: '', // 湿度
        };
    }

    /** 组件挂载之前 */
    componentDidMount() {
        this.getDate();
    }


    /** 组件销毁之前 */
    componentWillUnmount() {
        clearInterval(this.getDate);
    }

    /** 获取当前时间 */
    getDate=() => {
        setInterval(() => {
            const sysTime = formateDate(new Date().getTime());
            this.setState({ sysTime });
        }, 1000);
        this.getWeatherAPIData();
    }

    /** */
    getPosition=() => {
        AMap.plugin('AMap.CitySearch', () => {
            const citySearch = new AMap.CitySearch();
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                }
            });
        });
    }

    /** 获取天气情况
     * @author XiaoDai
     * @return province 省
     * @return city 市
     * @return weather 天气
     * @return temperature 温度
     * @return winddirection 风向
     * @return windpower 风速
     * @return humidity 湿度
     * @return reporttime 查询时间
     */
    getWeatherAPIData=() => {
        axios.jsonp({ url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=430100&key=f09aa99a0f160728175a740815e044ac' }).then((res) => {
            if (!isEmpty(res)) {
                this.setState({ ...res });
            }
        });
    }

    /** 挂载 */
    render() {
        const { userName, humidity, windpower, winddirection, temperature, sysTime, province, city, weather } = this.state;
        const content = (
            /* eslint-disable */
            <div>
                <p>天气: {weather}</p>
                <p>温度: {temperature}℃</p>
                <p>风向: {winddirection}</p>
                <p>风速: {windpower}</p>
                <p>空气湿度: {humidity}℃</p>
            </div>
            /* eslint-enable */
        );
        return (
            <div className="header">
                <Row
                    className="headerTop"
                    style={{
                        height: '3.75rem',
                        lineHeight: '3.75rem',
                        padding: ' 0 20px',
                    }}
                >
                    <Col span="24" style={{ textAlign: 'right' }}>
                        <span>
                            欢迎,
                            {userName}
                        </span>
                        <Button type="link">退出</Button>
                    </Col>
                </Row>
                <Row
                    className="breadcrumb"
                    style={{
                        height: '2.5rem',
                        lineHeight: '2.5rem',
                        padding: '0 20px',
                        borderTop: '1px solid #f9c700',
                    }}
                >
                    <Col span="4" className="breadcrumb-title" style={{ textAlign: 'center' }}>
                        <span className="date">首页</span>
                    </Col>
                    <Col span="20" className="weather" style={{ textAlign: 'right' }}>
                        <span className="date" style={{ marginRight: '14px' }}>{sysTime}</span>
                        <span className="weather-detail">
                            <Popover content={content} title={`${province}省${city}`}>
                                <Button type="link">今日天气</Button>
                            </Popover>
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}
Header.defaultPros = {};
Header.propTypes = {};
export default Header;
