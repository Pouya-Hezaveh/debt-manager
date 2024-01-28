import React from 'react';
import Button from '../../../../components/Button';
import LabelText from '../../../../components/LabelText';

function AdminPanel() {

  function f1(event) {
    event.preventDefault();

  }

  function f2(event) {
    event.preventDefault();

  }

  function f3(event) {
    event.preventDefault();

  }

  function f4(event) {
    event.preventDefault();

  }

  return (
    <div className="navbar">
      <LabelText fontSize={'2rem'} fontWeight={'bold'} theText={'پنل کنترل'} />
      <Button onClick={f3}><LabelText theText={'ثبت بدهی پرداخت شده'} /></Button>
      <Button onClick={f2}><LabelText theText={'تخصیص صورت حساب موجود به کاربران'} /></Button>
      <Button onClick={f1}><LabelText theText={'ایجاد صورت حساب جدید'} /></Button>
      <Button onClick={f4}><LabelText theText={'ایجاد کاربر جدید'} /></Button>
    </div>
  )
}

export default AdminPanel