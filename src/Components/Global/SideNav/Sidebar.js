import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import ApplicationRoutes from '../../Router/ApplicationRoutes';
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/">Dashboard</Link>, 'dashboard', <PieChartOutlined />),
  getItem(<Link to="/message">Message</Link>, 'message', <PieChartOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem(<Link to="/users">User Info</Link>, 'users'),
    getItem(<Link to="/login">Sign In</Link>, 'update'),
    getItem(<Link to="/signup">Create User</Link>, 'Sign Up'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem(<Link to="/loading">Loading List</Link>, 'loading'),
    getItem(<Link to="/bookmark">Bookmark</Link>, 'bookmark'),
  ]),
  getItem(<Link to="/file">Files</Link>, 'file', <FileOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2'];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState('1');
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const onClick = (e) => {
    setCurrent(e.key);
    setCollapsed(true);
    
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
        overflow: 'auto',
        zIndex: 100,
        height: '100vh',
        position: 'fixed',
      }}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[current]} triggerSubMenuAction={'hover'} openKeys={openKeys} onOpenChange={onOpenChange} mode="inline" items={items} onClick={onClick} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '10px 10px 10px 90px',
            overflow: 'initial',
          }}
        >
				<ApplicationRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;