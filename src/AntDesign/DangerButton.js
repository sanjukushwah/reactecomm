import React from "react";
import { Button, Space } from "antd";
const DangerButton = () => (
  <Space wrap>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger href="https://www.google.com">
      Link
    </Button>
  </Space>
);
export default DangerButton;
