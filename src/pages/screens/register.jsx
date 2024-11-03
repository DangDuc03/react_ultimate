
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';


const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
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
                                message: 'Please input your Phone!',
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