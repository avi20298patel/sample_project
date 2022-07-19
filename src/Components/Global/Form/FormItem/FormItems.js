import { Input, InputNumber, Cascader, Checkbox } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import Selector from '../Selector';


const prefixValues = ['+86', '+87'];
const suffixValues = ['USD', 'CNY'];

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

export const FormItems = [
    {
        label: 'email',
        name: 'email',
        rule: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
        ],
        inputTag: <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Basic usage" />
    },
    {
        label: 'password',
        name: 'password',
        rule: [
            {
                required: true,
                message: 'Please input your password!',
            },
        ],
        inputTag: <Input.Password placeholder='enter your secret password' />
    },
    {
        label: 'confirm password',
        name: 'confirm password',
        rule: [
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
        ],
        inputTag: <Input.Password placeholder='confirm Your password' />
    },
    {
        label: 'Nickname',
        name: 'Nickname',
        rule: [
            {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
            },
        ],
        inputTag: <Input prefix={<UserOutlined className="site-form-item-icon" />} />,
        tooltip: "What do you want others to call you?"
    },
    {
        label: 'Habitual Residence',
        name: 'residence',
        rule: [
            {
                type: 'array',
                required: true,
                message: 'Please select your habitual residence!',
            },
        ],
        inputTag: <Cascader options={residences} />
    },
    {
        label: 'Phone Number',
        name: 'Phone Number',
        rule: [
            {
                required: true,
                message: 'Please input your phone number!',
            },
        ],
        inputTag: <InputNumber
            addonBefore={
                <Selector
                    values={prefixValues}
                    selectorName="prefix"
                />
            }
            style={{
                width: '100%',
            }}
        />
    },
    {
        label: 'Donation',
        name: 'Donation',
        rule: [
            {
                required: true,
                message: 'Please input donation amount!',
            },
        ],
        inputTag: <InputNumber
            addonAfter={
                <Selector
                    values={suffixValues}
                    selectorName="suffix"
                />
            }
            style={{
                width: '100%',
            }}
        />
    },
    {
        label: 'Website',
        name: 'Website',
        rule: [
            {
                required: true,
                message: 'Please input website!',
            },
        ],
        inputTag: <AutoComplete options={websiteOptions} onChange={onWebsiteChange}>
            <Input prefix={<GlobalOutlined className="site-form-item-icon" />} placeholder="website" />
        </AutoComplete>
    },
    {
        label: 'Intro',
        name: 'Intro',
        rule: [
            {
                required: true,
                message: 'Please input Intro',
            },
        ],
        inputTag: <Input.TextArea showCount maxLength={100} />
    },

    {
        label: 'agreement',
        layout: 'tailFormItemLayout',
        rule: [
            {
                validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
        ],
        inputTag: <Checkbox>I have read the agreement</Checkbox>,
        valuePropName: "checked",
    }
];

