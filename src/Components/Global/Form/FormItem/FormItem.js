import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
function FormItem(props) {
    const { itemName, itemLabel, itemRules, inputTag } = props;
    return (
        <Form.Item
            name={itemName}
            label={itemLabel}
            rules={itemRules}
        >
            {inputTag}
        </Form.Item>
    )
}

FormItem.prototype = {
    itemName: PropTypes.string,
    itemLabel: PropTypes.string,
    itemRules: PropTypes.array,
}

export default FormItem