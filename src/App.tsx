import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TwoColumnLayout from './layouts/TwoColumnLayout';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TwoColumnLayout
        leftColumn={<h2>Rooms</h2>}
        rightColumn={<h2>Chat</h2>}
      />
    </React.Fragment>
  );
}

export default App;
