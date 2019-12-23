import { PureComponent } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Headers from '../components/Header';
import Footers from '../components/Footer';
// import N from './components/Header';


const { Header, Footer, Sider, Content } = Layout;

/** */
class BasicLayout extends PureComponent {
    /** */
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    {'Sider'}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                        <Headers />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <Footers />
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

BasicLayout.defaultProps = { children: '' };
BasicLayout.propTypes = { children: PropTypes.any };

export default BasicLayout;
