import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ProductOutlined, SettingOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { icons } from 'antd/es/image/PreviewGroup';
import { LogOutAPI } from '../../services/api.service';
const Header = () => {
    const [current, setCurrent] = useState('');

    const { userLogin, setUserLogin } = useContext(AuthContext)
    const navigate = useNavigate();


    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogOut = async () => {
        const res = await LogOutAPI()
        if (res.data) {
            // clear data
            localStorage.removeItem("access_token")
            setUserLogin({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            navigate('/')
            message.success("Logout Success!")
        }
    }


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
                            label: <span onClick={() => handleLogOut()}>Đăng Xuất</span>,
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