import React from 'react';
import '../Resource/DefaultLayout.css'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    FormOutlined,
    EditOutlined,
    AppstoreOutlined,
    BarcodeOutlined,
    LogoutOutlined,
    ShoppingCartOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;
class DefaultLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >
                        {this.state.collapsed ?
                            <img src="https://www.pngkey.com/png/full/343-3438902_philippe-luscan-sanofi-black.png" alt="" />
                            :
                            <img src="https://childrenwithdiabetes.com/wp-content/uploads/Sanofi-White-Transparent-V2.png" alt="" />
                        }

                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<AppstoreOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FileTextOutlined />}>
                            Bills
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<FormOutlined />} title="Product">
                            <Menu.Item key="26">All Product</Menu.Item>
                            <Menu.Item key="22">Add Product</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4" icon={<EditOutlined />}>
                            Category
                        </Menu.Item>
                        <Menu.Item key="5" icon={<BarcodeOutlined />}>
                            Brand
                        </Menu.Item>
                        <Menu.Item key="6" icon={<UserOutlined />}>
                            Customer
                        </Menu.Item>
                        <Menu.Item key="7" icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background d-flex align-items-center justify-content-between pe-4" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <span ><ShoppingCartOutlined style={{ fontSize: "22px" }} /></span>

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout