import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ChartsCard from './ChartsCard';
import LogItem from '../components/LogItem';
import AddLogItem from '../components/AddLogItem';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { ipcRenderer } from 'electron';

const App = () => {
  const [logs, setLogs] = useState([]);

  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success',
  });

  useEffect(() => {
    ipcRenderer.send('logs:load');
    ipcRenderer.on('logs:get', (e, logs) => {
      setLogs(JSON.parse(logs));
    });

    ipcRenderer.on('logs:clear', () => {
      setLogs([]);
      showAlert('Logs Cleared');
    });
  }, []);

  const addItem = (item) => {
    if (item.text === '' || item.user === '' || item.priority === '') {
      showAlert('Please enter all fields', 'danger');
      return false;
    }

    ipcRenderer.send('logs:add', item);
    showAlert('Log Added');
  };

  const deleteItem = (id) => {
    ipcRenderer.send('logs:delete', id);
    // setLogs(logs.filter((item) => item._id !== id));
    showAlert('Log Removed');
  };

  const showAlert = (message, variant = 'success', seconds = 3000) => {
    setAlert({
      show: true,
      message,
      variant,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        variant: 'success',
      });
    }, seconds);
  };

  return (
    <Container>
      <ChartsCard />
      <AddLogItem addItem={addItem} />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <Table striped bordered hover variant='secondary'>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
