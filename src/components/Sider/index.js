import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import logo from '../../../public/assets/logo.jpg';
import MenuConfig from '../../config/menuConfig';

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

    /** 组件挂载 */
    render() {
        const { menuTreeNode } = this.state;
        return (
            <div>
                <div className="logo">
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: '16rem',
                            height: '10rem',
                        }}
                    />
                    <h1 style={{ color: 'white', fontSize: '3rem' }}>小戴同学</h1>
                </div>
                <Menu theme="dark">
                    {menuTreeNode}
                </Menu>
            </div>
        );
    }
}
Sider.defaultPros = {};
Sider.propTypes = {};
export default Sider;
