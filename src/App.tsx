// dependencies
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// layouts
import TwoColumnLayout from './layouts/TwoColumnLayout';
// features
import ChatRoom from './features/ChatRoom';
import UserList from './features/UserList';
// global styles
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TwoColumnLayout
        leftColumn={ <UserList />}
        rightColumn={ <ChatRoom /> }
      />
    </React.Fragment>
  );
}

export default App;
