import axios from 'axios';
import React from 'react';
import Form from '../../../../../../components/Form';
import { api_address } from '../../../../../../config';

function CreateAccount({ account, fetchData }) {
  const key = { id: account.id, password: account.password };
  const formData = {
    id: 'شناسه کاربری',
    password: 'گذرواژه',
    name: 'نام فرد',
    type: ["نوع اکانت", ['ADMIN','CLIENT']]
  };

  function handleCreateAccount(newAccount) {
    axios
      .post(`${api_address}/create-user`, { key, newAccount })
      .then((res) => {
        console.log(res.data);
        // Fetch the updated data after creating a new account
        fetchData();
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  }

  return (
    <div style={{ margin: '1vw' }}>
      <Form formData={formData} handleSubmit={handleCreateAccount} />
    </div>
  );
}

export default CreateAccount;
