import React from 'react';
import { Box, Typography } from '@mui/material';

interface ChatBubbleProps {
  senderName: string;
  dateTime: string;
  body: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ senderName, dateTime, body }) => {

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        { body }
      </Box>
      <Typography variant="caption">
        { senderName } • { dateTime }
      </Typography>
    </Box>
  );
}

export default ChatBubble;
