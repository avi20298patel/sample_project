import { Card, Space } from 'antd';
import React from 'react';
import Signup from './Signup';

import './Signup.css'

function SignupCard() {
    return (
        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
            <Card
                title="Card title"
                bordered={false}
                hoverable
                style={{
                    width: 400,
                }}
            >
                <Signup />
            </Card>
        </Space>
    )
}

export default SignupCard