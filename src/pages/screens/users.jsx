import UserForm from "../../components/users/user.form";
import UserTable from "../../components/users/user.table";
import { getAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const response = await getAllUserAPI()
        setDataUser(response.data)
    }

    // lift up state
    return (
        <div style={{ padding: "20x" }}>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                dataUser={dataUser}
            />
        </div>
    )
}

export default UserPage;