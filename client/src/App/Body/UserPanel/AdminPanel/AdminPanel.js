import React, { useState } from 'react';
import Button from '../../../../components/Button';
import LabelText from '../../../../components/LabelText';
import BillAssignment from './AdminControls/BillAssignment/BillAssignment';
import CreateBill from './AdminControls/CreateBill/CreateBill';
import CreateUser from './AdminControls/CreateUser/CreateUser';
import Payment from './AdminControls/Payment/Payment';
import './AdminPanel.css';

function AdminPanel() {
  const [controller, setController] = useState('');

  function ReturnButton() {
    return (
      <Button backColor={'indianred'} onClick={() => setController('')}>
        <LabelText theText={'بازگشت'} />
      </Button>
    )
  }

  if (controller === 'CREATE_USER')
    return (
      <div className="navbar">
        {ReturnButton()}
        <CreateUser />
      </div >
    )

  else if (controller === 'CREATE_BILL')
    return (
      <div className="navbar">
        {ReturnButton()}
        <CreateBill />
      </div >
    )

  else if (controller === 'BILL_ASSIGNMENT')
    return (
      <div className="navbar">
        {ReturnButton()}
        <BillAssignment />
      </div >
    )

  else if (controller === 'PAYMENT')
    return (
      <div className="navbar">
        {ReturnButton()}
        <Payment />
      </div >
    )

  else
    return (
      <div className="navbar">
        < LabelText fontSize={'2rem'} fontWeight={'bold'} theText={'پنل کنترل'} />
        <Button onClick={() => setController('CREATE_USER')}><LabelText theText={'ایجاد کاربر جدید'} /></Button>
        <Button onClick={() => setController('CREATE_BILL')}><LabelText theText={'ایجاد صورت حساب جدید'} /></Button>
        <Button onClick={() => setController('BILL_ASSIGNMENT')}><LabelText theText={'تخصیص صورت حساب موجود به کاربران'} /></Button>
        <Button onClick={() => setController('PAYMENT')}><LabelText theText={'ثبت بدهی پرداخت شده'} /></Button>
      </div >
    )
}

export default AdminPanel