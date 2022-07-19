import { Input, Form, Row, Col, Button } from 'antd';
import { BarcodeOutlined } from '@ant-design/icons'
import React from 'react'
import FormItem from './FormItem/FormItem';

function Captcha(props) {
    // const { value, onChange } = props;


    return (
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
                <Col span={12}>
                    <FormItem
                        itemName="captcha"
                        itemLabel="Captcha"
                        itemStyle="noStyle"
                        itemExtra="We must make sure that your are a human."
                        itemRule={[
                            {
                                required: true,
                                message: 'Please input the captcha you got!',
                            },
                        ]}
                        inputTag={<Input prefix={<BarcodeOutlined className="site-form-item-icon" />} />}
                    />
                </Col>
                <Col span={12}>
                    <Button>Get captcha</Button>
                </Col>
            </Row>
        </Form.Item>
    )
}

export default Captcha