import axios from 'axios';
import React, { useState } from 'react';
import '../../../../../../components/AppText.css';
import Form from '../../../../../../components/Form';
import { api_address } from '../../../../../../config';

function CreateAccount({ account, fetchData }) {
  const [showMessage, setShowMessage] = useState(false);
  const [newID, setNewID] = useState(false);
  const key = { id: account.id, password: account.password };
  const formData = {
    id: 'شناسه کاربری',
    password: 'گذرواژه',
    name: 'نام فرد',
    type: ["نوع اکانت", ['ADMIN', 'CLIENT']]
  };

  const alertSuccess = (id) => {
    setNewID(id)
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  function handleCreateAccount(newAccount) {
    axios
      .post(`${api_address}/create-user`, { key, newAccount })
      .then((res) => {
        console.log(res.data);
        if (res.data.error === 'Primary key conflict') {
          alert('کاربر دیگری قبلا با این شناسه ثبت شده است.');
        }
        else {
          alertSuccess(newAccount.id)
        }

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
      <div style={{ color: '#2ecc71', opacity: showMessage ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        {`اکانت جدید با شناسه ${newID} ساخته شد.`}
      </div>
    </div>
  );
}

export default CreateAccount;