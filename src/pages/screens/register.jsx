
import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { registerUserAPI } from '../../services/api.service';
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(values);

        const response = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        )
        if (response.data) {
            notification.success({
                message: "Register User",
                description: "Đăng ký người dùng thành công!"
            })
            navigate("/login")
        } else {
            notification.error({
                message: "Register User Error!",
                description: JSON.stringify(response.message)
            })
        }
    };

    return (
        <>
            <Form
                form={form}
                layout='vertical' // chieu doc
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >

                <div style={{ marginTop: "20px", padding: "0 20px" }}>
                    <h1 style={{ color: "blue" }}>Register</h1>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Full Name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: 'Please enter a valid phone number!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div>
                        <Button onClick={() => form.submit()} type='primary'>Register</Button>
                    </div>
                </div>
            </Form>

        </>

    )
}

export default RegisterPage;