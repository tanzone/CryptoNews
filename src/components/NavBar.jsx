import React from 'react';
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import uniprLogo from "../images/uniprLogo.png";


const NavBar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={uniprLogo} size="large"/>
            <Typography.Title level={2} className='logo'>
                <Link to='/'>UniPr CryptoNews</Link>
            </Typography.Title>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptoValue'>Crypto Value</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/cryptoExchange'>Exchange</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/cryptoNews'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    </div>
  )
}

export default NavBar