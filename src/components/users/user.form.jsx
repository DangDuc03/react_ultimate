import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleCreateUser = () => {
        console.log(">>> check info : ", { fullName, email, password, phoneNumber }) // user {} to show object
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
                    <span>Phone Number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
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