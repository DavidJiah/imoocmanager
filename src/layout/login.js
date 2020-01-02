import { PureComponent } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import loginbg from '../../public/assets/loginbg.png';
import title from '../../public/assets/logo.png';


const { Header, Sider, Content } = Layout;

/** */
class LoginLayout extends PureComponent {
    /** */
    render() {
        const { children } = this.props;
        return (
            <Layout>
                <Sider width={1300} style={{ minHeight: '100vh' }}>
                    <img src={loginbg} alt="" style={{ width: '100%', height: '100%' }} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', minHeight: '30vh' }}>
                        <img src={title} alt="" style={{ marginTop: '4rem', height: '50%' }} />
                    </Header>
                    <Content style={{ background: '#fff' }}>{children}</Content>
                </Layout>
            </Layout>
        );
    }
}

LoginLayout.defaultProps = { children: '' };
LoginLayout.propTypes = { children: PropTypes.any };

export default LoginLayout;
