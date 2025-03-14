import React, { useState } from 'react';
import {
  Typography,
  Input,
  Button,
  Table,
  Dropdown,
  Tag,
  Card,
  Row,
  Col,
  Select,
  Divider,
  theme
} from 'antd';
import type { MenuProps, TableProps } from 'antd';
import {
  SearchOutlined,
  PlusOutlined,
  FilterOutlined,
  UserOutlined,
  TeamOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router';

const { Title } = Typography;
const { Option } = Select;

// Define user interface
interface User {
  key: string;
  id: string;
  name: string;
  email: string;
  role: 'Student' | 'Lecturer';
  department: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

// Dummy data with proper typing
const dummyUsers: User[] = [
  {
    key: '1',
    id: 'USR001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    department: 'Computer Science',
    status: 'Active',
    joinDate: '2023-05-12'
  },
  {
    key: '2',
    id: 'USR002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Student',
    department: 'Physics',
    status: 'Active',
    joinDate: '2023-06-18'
  },
  {
    key: '3',
    id: 'USR003',
    name: 'Dr. Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'Lecturer',
    department: 'Mathematics',
    status: 'Active',
    joinDate: '2022-11-05'
  },
  {
    key: '4',
    id: 'USR004',
    name: 'Emily Parker',
    email: 'emily.parker@example.com',
    role: 'Student',
    department: 'Biology',
    status: 'Inactive',
    joinDate: '2023-08-22'
  },
  {
    key: '5',
    id: 'USR005',
    name: 'Prof. Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Lecturer',
    department: 'Computer Science',
    status: 'Active',
    joinDate: '2021-09-15'
  }
];

const UserDashboard: React.FC = () => {
  // Use Ant Design's built-in theme hook
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>('');
  const [filterRole, setFilterRole] = useState<string>('all');

  // Filter data based on search text and role filter
  const filteredData = dummyUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.department.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole.toLowerCase();
    
    return matchesSearch && matchesRole;
  });

  // Define table columns with proper typing
  const columns: TableProps<User>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a: User, b: User) => a.id.localeCompare(b.id)
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: User, b: User) => a.name.localeCompare(b.name),
      render: (text: string, record: User) => (
        <Typography.Link onClick={() => navigate(`/users/${record.id}`)}>
          {text}
        </Typography.Link>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={role === 'Student' ? 'blue' : 'green'}>
          {role}
        </Tag>
      ),
      filters: [
        { text: 'Student', value: 'Student' },
        { text: 'Lecturer', value: 'Lecturer' }
      ],
      onFilter: (value: string | number | boolean, record: User) => 
        record.role === value
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: 'Computer Science', value: 'Computer Science' },
        { text: 'Physics', value: 'Physics' },
        { text: 'Mathematics', value: 'Mathematics' },
        { text: 'Biology', value: 'Biology' }
      ],
      onFilter: (value: string | number | boolean, record: User) => 
        record.department === value
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Active' ? 'success' : 'error'}>
          {status}
        </Tag>
      )
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
      sorter: (a: User, b: User) => new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime(),
      render: (date: string) => new Date(date).toLocaleDateString()
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: User) => (
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'View Details',
                onClick: () => navigate(`/users/${record.id}`)
              },
              {
                key: '2',
                label: 'Edit',
                onClick: () => navigate(`/users/edit/${record.id}`)
              },
              {
                key: '3',
                label: record.status === 'Active' ? 'Deactivate' : 'Activate',
                danger: record.status === 'Active'
              },
              {
                key: '4',
                label: 'Delete',
                danger: true
              }
            ]
          }}
          trigger={['click']}
        >
          <Button type="text" icon={<EllipsisOutlined />} />
        </Dropdown>
      )
    }
  ];

  // Handle new user creation based on type
  const handleAddUser = (type: string) => {
    navigate(`/users/add/${type.toLowerCase()}`);
  };

  const addUserMenu: MenuProps = {
    items: [
      {
        key: '1',
        label: 'Student',
        icon: <UserOutlined />,
        onClick: () => handleAddUser('Student')
      },
      {
        key: '2',
        label: 'Lecturer',
        icon: <TeamOutlined />,
        onClick: () => handleAddUser('Lecturer')
      }
    ]
  };

  return (
    <Card className="user-dashboard" bordered={false}>
      <Row justify="space-between" align="middle" gutter={[0, 16]}>
        <Col>
          <Title level={4} type='secondary' style={{ marginBottom: 0 }}>
            Users Dashboard
          </Title>
        </Col>
      </Row>

      <Divider style={{ marginTop: 16, marginBottom: 16 }} />

      <Row justify="space-between" align="middle" gutter={[16, 16]}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Input
            placeholder="Search by name, email, or department"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24} sm={8} md={6} lg={4}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filter by Role"
            value={filterRole}
            onChange={(value: string) => setFilterRole(value)}
            suffixIcon={<FilterOutlined />}
          >
            <Option value="all">All Roles</Option>
            <Option value="student">Students</Option>
            <Option value="lecturer">Lecturers</Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={6} lg={4} style={{ textAlign: 'right' }}>
          <Dropdown menu={addUserMenu} placement="bottomRight">
            <Button type="primary" icon={<PlusOutlined />}>
              Add User
            </Button>
          </Dropdown>
        </Col>
      </Row>

      <div style={{ marginTop: 16 }}>
        <Table<User>
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
          }}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </Card>
  );
};

export default UserDashboard;