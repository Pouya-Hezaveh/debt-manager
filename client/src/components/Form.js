import React, { useState } from 'react';
import './AppText.css';
import LabelText from './LabelText';

function Form({ formData, handleSubmit }) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (key, value) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <form className="form" onSubmit={onSubmit} style={{ borderWidth: 'min-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>
            {Array.isArray(formData[key]) ?
              <LabelText theText={formData[key][0]} />
              :
              <LabelText theText={formData[key]} />
            }
            {Array.isArray(formData[key][1]) ? (
              <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
                {formData[key][1].map((option) => (
                  <label key={option} style={{margin:'20px', borderRadius:'10px', padding:'10px', boxShadow:'0px 2px 20px hotpink'}}>
                    <input
                      type="radio"
                      value={option}
                      checked={formValues[key] === option}
                      style={{boxShadow:'0px 0px 10px violet' }}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={formValues[key] || ''}
                className="input-text-area"
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            )}


          </label>
          <br />
        </div>
      ))}
      <input style={{ width: '8vw', height: '8vh' }} className="button" type="submit" value="ثبت" />
    </form>
  );
}

export default Form;
