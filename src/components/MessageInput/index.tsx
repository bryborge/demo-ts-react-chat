import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Button, InputAdornment, TextField } from '@mui/material';

const MessageInput: React.FC = () => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Type a message..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default MessageInput;
