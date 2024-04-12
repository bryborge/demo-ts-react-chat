import React from 'react';
import TwoColumnLayout from '../../layouts/TwoColumnLayout';
import UserList from '../../components/UserList';
import Messages from '../../components/Messages';

const ChatPage: React.FC = () => {
  return (
    <TwoColumnLayout
        leftColumn={ <UserList />}
        rightColumn={ <Messages /> }
      />
  );
}

export default ChatPage;
