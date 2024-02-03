import React, { useState } from 'react';
import Button from '../../../../components/Button';
import LabelText from '../../../../components/LabelText';
import BillAssignment from './AdminControls/BillAssignment/BillAssignment';
import ManageAccounts from './AdminControls/ManageAccounts/ManageAccounts';
import ManageBills from './AdminControls/ManageBill/ManageBills';
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

  else if (controller === 'MANAGE_BILLS')
    return (
      <div className="navbar">
        {ReturnButton()}
        <ManageBills account={account}/>
      </div >
    )

  else if (controller === 'BILL_ASSIGNMENT')
    return (
      <div className="navbar">
        {ReturnButton()}
        <BillAssignment account={account}/>
      </div >
    )

  else if (controller === 'PAYMENT')
    return (
      <div className="navbar">
        {ReturnButton()}
        <Payment account={account}/>
      </div >
    )

  else
    return (
      <div className="navbar">
        < LabelText fontSize={'2rem'} fontWeight={'bold'} theText={'پنل کنترل'} />
        <Button onClick={() => setController('MANAGE_ACCOUNTS')}><LabelText theText={'مدیریت حساب ها'} /></Button>
        <Button onClick={() => setController('MANAGE_BILLS')}><LabelText theText={'مدیریت صورت حساب ها'} /></Button>
        <Button onClick={() => setController('BILL_ASSIGNMENT')}><LabelText theText={'تخصیص صورت حساب موجود به کاربران'} /></Button>
        <Button onClick={() => setController('PAYMENT')}><LabelText theText={'ثبت بدهی پرداخت شده'} /></Button>
      </div >
    )
}

export default AdminPanel