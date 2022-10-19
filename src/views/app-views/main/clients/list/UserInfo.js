import { Drawer, Form, Input, Button } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import Loading from 'components/shared-components/Loading';


const UserInfo = ({ user, onClose, isOpen }) => {
  const [loading, setLoading] = useState(false);

  const handleSave = async (values) => {
    setLoading(true);
    await axios.patch(`https://jsonplaceholder.typicode.com/users/${user.id}`, values);
    setLoading(false);
    onClose();
  }

  const fields = [
    {
      name: "name",
      value: user?.name,
    },
    {
      name: 'email',
      value: user?.email,
    },
    {
      name: 'city',
      value: user?.address.city,
    },
    {
      name: 'phone',
      value: user?.phone,
    },
    {
      name: 'website',
      value: user?.website,
    },
    {
      name: 'companyName',
      value: user?.company.name,
    }
  ]

  return (
    <Drawer title="Редактировать пользователя" open={isOpen} onClose={onClose}>
      <Form fields={fields} layout="vertical" onFinish={handleSave} disabled={loading}>
        <Form.Item name="name" label="Имя" required>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" required 
          rules={[{
          type: 'email',
          message: 'Неправильный формат Email'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item name="city" label="Город" required>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Номер телефона" required>
          <Input />
        </Form.Item>
        <Form.Item name="website" label="Сайт">
          <Input />
        </Form.Item>
        <Form.Item name="companyName" label="Компания">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit'>
            {loading ? <Loading cover="content" /> : 'Сохранить изменения'}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default UserInfo;