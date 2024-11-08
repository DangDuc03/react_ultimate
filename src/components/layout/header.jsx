import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ProductOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home', // nếu biến current trùng với key thì sẽ có active xảy ra
            icon: <HomeOutlined />,

        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
            disabled: false,
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <ProductOutlined />,
        },
        {
            label: "Setting",
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"login"}>Đăng Nhập</Link>,
                    key: 'login',
                },
                {
                    label: <Link to={"register"}>Đăng Xuất</Link>,
                    key: 'logout',
                },
            ],
        }
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    )
}

export default Header;