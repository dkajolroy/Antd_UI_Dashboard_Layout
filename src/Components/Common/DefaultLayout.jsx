import React, { useState } from 'react';
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
    CheckCircleOutlined,
    FileTextOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Sider, Content } = Layout;
function DefaultLayout(props) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >
                    {collapsed ?
                        <img src="https://www.pngkey.com/png/full/343-3438902_philippe-luscan-sanofi-black.png" alt="" />
                        :
                        <img src="https://childrenwithdiabetes.com/wp-content/uploads/Sanofi-White-Transparent-V2.png" alt="" />
                    }
                </div>
                <Menu theme="dark" mode="inline"  >
                    <Menu.Item key="/" icon={<AppstoreOutlined />}>
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="/sells" icon={<CheckCircleOutlined />} >
                        <Link to="/sells">Sells</Link>
                    </Menu.Item>
                    <Menu.Item key="/bills" icon={<FileTextOutlined />} >
                        <Link to="/bills">Bills</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<FormOutlined />} title="Product">
                        <Menu.Item key="26">All Product</Menu.Item>
                        <Menu.Item key="22">Add Product</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/category" icon={<EditOutlined />}>
                        <Link to="/category">Category </Link>
                    </Menu.Item>
                    <Menu.Item key="/brand" icon={<BarcodeOutlined />}>
                        <Link to="/brand">Brand </Link>

                    </Menu.Item>
                    <Menu.Item key="customer" icon={<UserOutlined />}>
                        <Link to="/customer">Customer </Link>

                    </Menu.Item>
                    <Menu.Item key="staff" icon={<UsergroupAddOutlined />}>
                        <Link to="/staff">Staff </Link>

                    </Menu.Item>
                    <Menu.Item key="7" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background d-flex align-items-center justify-content-between pe-4" style={{ padding: 0 }}>

                    <span className='trigger h3' onClick={() => setCollapsed(!collapsed)}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
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
                    {props.children}

                </Content>
            </Layout>
        </Layout >
    );
}

export default DefaultLayout