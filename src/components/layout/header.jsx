import { Link, NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ProductOutlined, SettingOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { icons } from 'antd/es/image/PreviewGroup';
const Header = () => {
    const [current, setCurrent] = useState('');

    const { userLogin, setUserLogin } = useContext(AuthContext)

    console.log("check userLogin : ", userLogin)

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
        ...(!userLogin.id
            ? [{
                label: <Link to={"login"}>Đăng Nhập</Link>,
                key: 'login',
                icon: <LoginOutlined />
            },]
            : []
        ),

        ...(userLogin.id
            ? [
                {
                    label: `welcome back ${userLogin.fullName}`,
                    key: 'setting',
                    icon: <AliwangwangOutlined />,
                    children: [

                        {
                            label: <Link to={"register"}>Đăng Xuất</Link>,
                            key: 'logout',
                        },
                    ],
                }]
            : []
        )

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