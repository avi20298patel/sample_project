import React from 'react';
import { GooglePlusOutlined } from '@ant-design/icons'

import {
  Button,
  Form,
  Input,
  Space,
} from 'antd';
import FormItem from '../Form/FormItem/FormItem';

const formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24,
  },
};

const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <FormItem
        itemName="Email"
        itemLabel="Email"
        itemRules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
        inputTag={<Input style={{ height: 35 }} placeholder="Enter your email address" />}
      />
      <FormItem
        itemName="Password"
        itemLabel="Password"
        itemRules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        inputTag={<Input.Password placeholder='enter your secret password' />}
      />
      <FormItem
        inputTag={<Button type="primary" htmlType="submit" block>
          Register
        </Button>}
      />
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
        <span>OR</span>
      </Space>
      <FormItem
        inputTag={<Button htmlType="submit" block>
          <span> <GooglePlusOutlined style={{ fontSize: '22px' }} /> Sign Up with Google</span>
        </Button>}
      />
    </Form>
  );
};

export default Signup;