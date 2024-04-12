import React from 'react';
import MessageInput from '../MessageInput';
import ChatBubble from '../ChatBubble';

interface ChatMessage {
  id: number;
  senderName: string;
  dateTime: string;
  body: string;
}

const chatMessages: ChatMessage[] = [
  {
    id: 1,
    senderName: "Lamar Espinoza",
    dateTime: "4/9/2024 12:00 AM",
    body: "hey there!"
  },
  {
    id: 2,
    senderName: "Phoebe Nguyen",
    dateTime: "4/9/2024 12:01 AM",
    body: "Oh hai fren :D"
  },
  {
    id: 3,
    senderName: "Sherri Joyce",
    dateTime: "4/10/2024 8:00 PM",
    body: "Sorry I'm late!  Hello everyone. <3"
  },
]

const Messages: React.FC = () => {
  return (
    <>
      <h2>Chat Room</h2>

      {chatMessages.map((message) => (
        <ChatBubble
          key={message.id}
          senderName={ message.senderName }
          dateTime={ message.dateTime }
          body={message.body }
          />
      ))}

      <MessageInput />
    </>
  );
}

export default Messages;
