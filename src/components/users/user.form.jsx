import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";


const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleCreateUser = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phoneNumber

            // or you can code : { fullName, email, password, phoneNumber }
        }
        axios.post(URL_BACKEND, data)
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