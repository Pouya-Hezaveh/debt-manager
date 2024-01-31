import React from 'react';
import DeleteButton from './DeleteButton';
import './Table.css';

const Table = ({ columnNames, rows, handleDelete }) => {
  function onDeleteButton(id) {
    handleDelete(id);
  }

  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columnNames.map((columnName, columnIndex) => (
              <td key={columnIndex}>{row[columnName]}</td>
            ))}
            <td>
              <DeleteButton onClick={() => onDeleteButton(row[columnNames[0]])}>Delete</DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
