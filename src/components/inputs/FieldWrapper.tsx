import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Typography, Space } from 'antd';
const { Text } = Typography;

interface FieldWrapperProps {
  label?: string;
  error?: string | undefined;
  children: ReactNode;
  className?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, error, children, className }) => {

  return (
    <div className={clsx(className)} style={{ marginBottom: '7px',marginTop:'7px' }}>
      {label && (
        <div>
          <Text type="secondary">{label}</Text>
        </div>
      )}
      <div>
        {children}
      </div>
      {error && (
        <div style={{ marginTop: '2px' }}>
          <Space>
            <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />
            <Text type="danger">{error}</Text>
          </Space>
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;