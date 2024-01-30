import React from 'react';
import './Table.css';

const YourComponent = ({ columnNames, rows }) => {
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default YourComponent;
