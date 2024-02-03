import axios from 'axios';
import React, { useState } from 'react';
import '../../../../../../components/AppText.css';
import Form from '../../../../../../components/Form';
import { api_address } from '../../../../../../config';

function CreateAccount({ account, fetchData }) {
    const [showMessage, setShowMessage] = useState(false);
    const [timeToggle, setTimeToggle] = useState(false);
    const key = { id: account.id, password: account.password };
    const timeToggleFormData = {
        date: ["تاریخ صورت حساب", ['دستی', 'خودکار']]
    };
    const billFormDataWithoutTime = {
        value: 'مبلغ صورتحساب',
        description: 'توضیحات'
    };
    const billFormDataWithTime = {
        value: 'مبلغ صورتحساب',
        description: 'توضیحات',
        year: 'سال',
        month: 'ماه',
        day: 'روز',
        hour: 'ساعت',
        minute: 'دقیقه',
        second: 'ثانیه'
    };

    const alertSuccess = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    function handleTimeToggle(formResult) {
        if (formResult.date === 'خودکار')
            setTimeToggle(false)
        else if (formResult.date === 'دستی')
            setTimeToggle(true)
    }

    function handleCreateBill(formResult) {
        const newBill = { value: formResult.value, description: formResult.description };
        const newDate = {
            year: formResult.year, month: formResult.month, day: formResult.day,
            hour: formResult.hour, minute: formResult.minute, second: formResult.second
        };

        axios
            .post(`${api_address}/create-bill`, { key, newDate, newBill })
            .then((res) => {
                console.log(res.data);
                if (res.data.error) {
                    alert(`درخواست ناموفق بود:‌${res.data.error}`);
                }
                else {
                    alertSuccess()
                }

                // Fetch the updated data after creating a new account
                fetchData();
            })
            .catch((error) => {
                console.error('Error creating new bill:', error);
            });
    }

    return (
        <div style={{ margin: '1vw' }}>
            <Form formData={timeToggleFormData} handleSubmit={handleTimeToggle} noButton={true} />
            {timeToggle ?
                <Form formData={billFormDataWithTime} handleSubmit={handleCreateBill} />
                :
                <Form formData={billFormDataWithoutTime} handleSubmit={handleCreateBill} />
            }
            <div style={{ color: '#2ecc71', opacity: showMessage ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                {`صورت حساب جدید ساخته شد.`}
            </div>
        </div>
    );
}

export default CreateAccount;