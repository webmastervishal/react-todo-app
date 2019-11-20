import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';

const Login = (props) => {
    return (
        <Row className="login">
            <Col span={9}></Col>
            <Col span={6}>
                <Card>
                    <h1>Login</h1>
                    <Form onSubmit={props.handleLogin}>
                        <Form.Item>
                            <Input
                                type="text"
                                placeholder="Email"
                                value={props.email}
                                onChange={props.handleEmail}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Input
                                type="text"
                                placeholder="Password"
                                value={props.password}
                                onChange={props.handlePassword}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col span={9}></Col>
        </Row>
    )
}

export default Login;