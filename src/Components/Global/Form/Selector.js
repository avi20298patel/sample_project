import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';


const { Option } = Select;

function Selector(props) {
  const { selectorName, values } = props;
  return (
    <Form.Item name={selectorName} noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        {values.map((item, index) =>
          <Option value={item} key={index + 'item'}>{item}</Option>
        )}
      </Select>
    </Form.Item>
  )
}

Selector.propTypes = {
  selectorName: PropTypes.string,
  values: PropTypes.array,
}

export default Selector