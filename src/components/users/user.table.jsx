import { Space, Table, Tag } from 'antd';
import { getAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        console.log(">>> check useEffect")
        loadUser()
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            render: (text) => <a>{text}</a>,

        }
    ];

    const loadUser = async () => {
        console.log(">>>> loadUser START")
        const response = await getAllUserAPI()
        setDataUser(response.data)
        console.log(">>>> loadUser END")
    }

    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
}

export default UserTable;