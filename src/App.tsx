import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import NavBar from './components/Navbar';
import './App.css';
import ChatPage from './pages/ChatPage';
import JoinPage from './pages/JoinPage';


const App: React.FC = () => {
  const [isJoined, setIsJoined] = useState<boolean | null>(null);

  const handleJoin = () => {
    // TODO: Implement real join logic
    setIsJoined(true);
  }

  function renderChatPage() {
    return (<ChatPage />);
  }
  
  function renderJoinPage() {
    return (<JoinPage handleJoin={ handleJoin } />);
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      { isJoined ? renderChatPage() : renderJoinPage() }
    </React.Fragment>
  );
}

export default App;
