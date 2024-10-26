import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [phone, setPhone] = useState("")

    const handleCreateUser = async () => {
        const response = await createUserAPI(fullName, email, password, phone)
        // response đã can thiệp từ interceptor
        if (response.data) {
            notification.success({
                message: "Create User",
                description: "Tạo mới người dùng thành công !"
            })
        } else {
            notification.error({
                message: "Error Create User!",
                description: JSON.stringify(response.message)
            })
        }
        console.log(">>> check response : ", response.data)
    }

    return (
        <div style={{ margin: "20px" }}>
            <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
                <div>
                    <span>UserName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => setPassWord(event.target.value)}
                    />
                </div>
                <div>
                    <span>Phone </span>
                    <Input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <div>
                    <Button
                        type="primary"
                        onClick={handleCreateUser}
                    // nếu muốn truyền tham số đi kèm, hãy dùng : onClick={() => handleCreateUser()}
                    >Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;