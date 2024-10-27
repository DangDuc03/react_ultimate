import { Table } from 'antd';


const UserTable = (props) => {

    const { dataUser } = props

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

    return (
        <Table
            columns={columns}
            dataSource={dataUser}
            rowKey={"_id"}
        />
    )
}

export default UserTable;