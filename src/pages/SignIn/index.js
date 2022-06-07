import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import 'antd/dist/antd.css';
import { Input, Button, Form, Checkbox, message } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import "./SignIn.css"
import { AuthActions} from "../../redux/rootAction";

export default function SignIn () {
    const userData = useSelector(state => state.AuthReducer.userData)

    const dispatch = useDispatch();
    const handleLogin = (values) => {
        const corectUsername = userData.find(user => user.usename === values.usename)
        if(!corectUsername) {
            message.error("wrong username")
        } else if(corectUsername.password !== values.password) {
            message.error("wrong password")
        } else {
            dispatch(AuthActions.setToken('2342f2f1d131rf12'))
            message.success("login successfully")
            navigate('/home')
            }
        }  
    const navigate = useNavigate()
    const handleSignUpShow = () => {
        navigate("/signup")
    }
    const { Title } = Typography;
    const formik = useFormik({
        initialValues: {
            usename: "",
            password: ""
        },
        validationSchema: Yup.object({
            usename: Yup.string()
            .max(15, "Must be 15 charaters or less")
            .required("required"),
            password: Yup.string()
            .min(3, "Password must be 3 charater or more")
            .max(8, "Must be 8 charaters or less")
            .required("required")
        }),
        onSubmit: values => {handleLogin(values)}
    })
    return (
        <div className="sign-container">
            <div className="row ">
                <div className="col-md-5 mx-auto">
                    <div className="formik-singin my-5 py-5 ">
                        <Title className="text-center text-primary">LOG IN</Title>
                        <Form
                            layout="vertical"
                            name="basic"
                            labelCol={{ span: 8, offset: 2 }}
                            wrapperCol={{ span: 20, offset: 2 }}
                            initialValues={{ remember: true }}
                            onFinish={formik.handleSubmit}
                        >
                            <Form.Item wrapperCol={{ offset: 16, span: 4 }} >
                                <div className="d-flex align-items-baseline"><Button type="link" onClick={handleSignUpShow} > Sign Up </Button><span className="text-light">Registration</span></div>
                            </Form.Item>
                            <Form.Item >
                                <Input
                                    className="input"
                                    type="text"
                                    name="usename"
                                    placeholder="Username"
                                    bordered={false}
                                    prefix={<UserOutlined />}
                                    value={formik.values.usename}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.usename && formik.touched.usename && (
                                    <p style={{color: "red"}}>{formik.errors.usename}</p>
                                )}
                            </Form.Item>
                            <Form.Item >
                                <Input.Password
                                    className="input"
                                    placeholder="Password"
                                    bordered={false}
                                    type="password"
                                    name="password"
                                    prefix={<LockOutlined />}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <p style={{color: "red"}}>{formik.errors.password}</p>
                                )}
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 2, span: 20 }} >
                                <Button  className="login-button" type="primary" htmlType="submit">Login </Button>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="" wrapperCol={{ offset: 2, span: 16 }} >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form>
                    </div>                   
                </div>
            </div>         
        </div>
    )
}