import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Table from '../../../../../../components/Table';
import { api_address } from '../../../../../../config';
import CreateAccount from './CreateAccount';

function ManageAccounts({ account }) {
  const [table, setTable] = useState({ columnNames: [], rows: [] });

  const key = useMemo(() => {
    return { id: account.id, password: account.password };
  }, [account.id, account.password]);

  const fetchData = useCallback(() => {
    axios.post(`${api_address}/get-users`, { key })
      .then((res) => {
        const tableData = res.data;
        setTable({ columnNames: tableData.columnNames, rows: tableData.rows });
      })
      .catch(error => {
        console.error("Error fetching table data:", error);
      });
  }, [key]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = (id) => {
    axios.post(`${api_address}/delete-user`, { key, id })
      .then((res) => {
        console.log(res.data);
        // Fetch the updated data after deletion
        fetchData();
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <CreateAccount account={account} fetchData={fetchData}/>
      <Table columnNames={table.columnNames} rows={table.rows} handleDelete={handleDelete}/>
    </div>
  );
}

export default ManageAccounts;
