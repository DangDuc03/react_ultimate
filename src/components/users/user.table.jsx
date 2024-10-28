import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import UpdateUserModal from './update.user.module';
import { useState } from 'react';


const UserTable = (props) => {
    const { dataUser, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            // record giống như 1 bản ghi để ghi các user
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            }
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
            title: 'Role',
            dataIndex: 'role',
            render: (text) => <a>{text}</a>,

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true);
                        }}
                    />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
        </>
    )
}

export default UserTable;