import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TwoColumnLayout from './layouts/TwoColumnLayout';
import ChatRoom from './components/ChatRoom';
import NavBar from './components/Navbar';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <TwoColumnLayout
        leftColumn={ <UserList />}
        rightColumn={ <ChatRoom /> }
      />
    </React.Fragment>
  );
}

export default App;
