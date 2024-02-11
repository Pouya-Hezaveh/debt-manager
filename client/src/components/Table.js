import React from 'react';
import DeleteButton from './DeleteButton';
import './Table.css';
import ToggleButton from './ToggleButton';

const Table = ({ columnNames, rows, handleDelete, handleSelect }) => {
  
  function onDeleteButton(id) {
    handleDelete(id);
  }

  function onSelectButton(id) {
    handleSelect(id);
  }
  /*
  function handleSelectAll() {
    const allRowIds = rows.map((row) => row[columnNames[0]]);
    handleSelect(allRowIds);
  }
  */
  return (
    <table>
      <thead>
        <tr>
          {handleSelect ?
            <th key={0}>
              انتخاب
              {/*
              <LabelText>انتخاب همه</LabelText>
              <ToggleButton onClick={() => handleSelectAll()}>ToggleButton</ToggleButton>
              */}
            </th>
            :
            <></>
          }
          {columnNames.map((columnName, index) => (
            <th key={index + 1}>{columnName}</th>
          ))}
          {handleDelete ?
            <th key={columnNames.length}>{'حذف'}</th>
            :
            <></>
          }
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {handleSelect ?
              <td>
                <ToggleButton onClick={() => onSelectButton(row[columnNames[0]])}>ToggleButton</ToggleButton>
              </td>
              :
              <></>
            }
            {columnNames.map((columnName, columnIndex) => (
              <td key={columnIndex}>{row[columnName]}</td>
            ))}
            {handleDelete ?
              <td>
                <DeleteButton onClick={() => onDeleteButton(row[columnNames[0]])}>Delete</DeleteButton>
              </td>
              :
              <></>
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
