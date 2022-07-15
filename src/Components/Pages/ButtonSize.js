import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react';

const ButtonSize = () => {
  const [size, setSize] = useState('large');
  return (
    <div>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type="primary" icon={<DownloadOutlined />} size={size} />
      <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
      <Button type="primary" icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
    </div>
  );
};

export default ButtonSize;