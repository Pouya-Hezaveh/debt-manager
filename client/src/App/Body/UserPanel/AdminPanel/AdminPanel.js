import React, { useState } from 'react';
import Button from '../../../../components/Button';
import LabelText from '../../../../components/LabelText';
import BillAssignment from './AdminControls/BillAssignment/BillAssignment';
import CreateBill from './AdminControls/CreateBill/CreateBill';
import ManageAccounts from './AdminControls/ManageAccounts/ManageAccounts';
import Payment from './AdminControls/Payment/Payment';
import './AdminPanel.css';

function AdminPanel({account}) {
  const [controller, setController] = useState('');

  function ReturnButton() {
    return (
      <Button style={{ backgroundColor: 'indianred' }} onClick={() => setController('')}>
        <LabelText theText={'بازگشت'} />
      </Button>
    )
  }
  

  if (controller === 'MANAGE_ACCOUNTS')
    return (
      <div className="navbar">
        {ReturnButton()}
        <ManageAccounts account={account}/>
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
        <Button onClick={() => setController('MANAGE_ACCOUNTS')}><LabelText theText={'مدیریت حساب ها'} /></Button>
        <Button onClick={() => setController('CREATE_BILL')}><LabelText theText={'ایجاد صورت حساب جدید'} /></Button>
        <Button onClick={() => setController('BILL_ASSIGNMENT')}><LabelText theText={'تخصیص صورت حساب موجود به کاربران'} /></Button>
        <Button onClick={() => setController('PAYMENT')}><LabelText theText={'ثبت بدهی پرداخت شده'} /></Button>
      </div >
    )
}

export default AdminPanel