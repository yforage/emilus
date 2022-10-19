import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {Card, Table} from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import UserInfo from './UserInfo';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState();
  const [editUser, setEditUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (response.status === 200) {
        setList(response.data.map((user) => ({ ...user, key: user.id })));
      }
      setLoading(false);
    }
    getUsers();
  }, []);

  const columns = [
    {
      title: "Имя",
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (_, record) => (
        <AvatarStatus name={record.name} subTitle={record.email} text={record.name[0]} type="gray" />
      )
    },
    {
      title: 'Город',
      dataIndex: 'address',
      key: 'city',
      sorter: (a, b) => a.address.city.localeCompare(b.address.city),
      render: (_, record) => (
        <span>{record.address.city}</span>
      ),
      responsive: ['sm'],
    },
    {
      title: 'Компания',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company.name.localeCompare(b.company.name),
      render: (_, record) => (
        <span>{record.company.name}</span>
      ),
      responsive: ['sm'],
    },
  ]

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Card style={{ width: '100%' }}>
      <Table
        rowClassName="cursor-pointer"
        dataSource={list}
        columns={columns}
        loading={loading}
        onRow={(record) => {
          return {
            onClick: (e) => {
              setEditUser(record);
              setIsOpen(true);
            }
          }
        }}
      />
      <UserInfo
        user={editUser}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </Card>
  );
}

export default List;