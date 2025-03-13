import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import TextField from '../../../components/inputs/TextField';
import Validation from '../../../utils/Validations';

const { Text } = Typography;

interface LoginForm {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({});

    const onSubmit = (data: LoginForm) => {
        console.log('Login Data:', data);
    };

    return (
        <div>
            <div style={{ maxWidth: 400,height:300, padding: 20, boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: 8 ,position:'absolute',top:0,left:0,right:0,bottom:0,margin:'auto'}}>
                <Typography.Title level={2} style={{ textAlign: 'center' }}>Login</Typography.Title>
                <Form layout="vertical">
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <TextField
                            placeholder={'Email'}
                            control={control}
                            {...Validation.apply(register, 'email', {
                                required: true,
                                email: true,
                            })}
                            error={errors.email}
                        />

                        <TextField
                            placeholder={'Password'}
                            control={control}
                            {...Validation.apply(register, 'password', {
                                required: true,
                            })}
                            error={errors.password}
                        />


                        <Button type="primary" htmlType="submit" block style={{ marginTop: '20px' }}>
                            Login
                        </Button>
                    </div>

                </Form>

                <div style={{ textAlign: 'center', marginTop: 10 }}>
                    <Text type="secondary">
                        Don't have an account? <a href="/register">Create Account</a>
                    </Text>
                    <br />
                    <Text type="secondary">
                        <a href="/forgot-password">Forgot Password?</a>
                    </Text>
                </div>
            </div>
        </div>

    );
};

export default Login;