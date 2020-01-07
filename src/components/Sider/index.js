import React, { PureComponent } from 'react';
import { Menu, Affix } from 'antd';
import router from 'umi/router';
import logo from '../../../public/assets/logo.jpg';
import MenuConfig from '../../config/menuConfig';
import title from '../../../public/assets/logo.png';
import './index.less';

const { SubMenu } = Menu;

/** 侧边栏 */
class Sider extends PureComponent {
    /** 组件挂载之前 */
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({ menuTreeNode });
    }

    /** 菜单渲染 */
    renderMenu=data => data.map(((item) => {
        if (item.children) {
            return (
                <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            );
        }
        return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>;
    }))

    /** 侧边栏跳转 */
    handleMenuClick=(e) => {
        router.push(e.key);
    }

    /** 组件挂载 */
    render() {
        const { menuTreeNode } = this.state;
        return (
            <Affix>
                <div className="logo">
                    <img src={logo} alt="" />
                    <img src={title} alt="" style={{ width: '11rem' }} />
                </div>
                <Menu theme="dark" className="Menu" onClick={this.handleMenuClick}>
                    {menuTreeNode}
                </Menu>
            </Affix>
        );
    }
}
Sider.defaultPros = {};
Sider.propTypes = {};
export default Sider;
