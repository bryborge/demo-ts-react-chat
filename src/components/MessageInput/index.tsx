import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

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
