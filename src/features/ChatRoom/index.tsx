import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/system/Box';

const ChatRoom: React.FC = () => {
  return (
    <>
      <h2>Chat Room</h2>

      {/* Chat Room Window */}
      <Box
        sx={{
          height: '80vh', // this will have to change
          backgroundColor: 'background.paper',
        }}
      >
        {/* Messages inside Chat Room Window */}
        <Box sx={{ mb: 2, }}>
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            hey there!
          </Box>
          <Typography variant="caption">
            Lamar Espinoza • 4/9/2024 12:00 AM
          </Typography>
        </Box>

        <Box sx={{ mb: 2, }}>
          <Box sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              Oh hai fren :D
            </Box>
            <Typography variant="caption">
              Phoebe Nguyen • 4/9/2024 12:01 AM
            </Typography>
        </Box>
        {/* END Messages */}
      </Box>
      {/* END Chat Room Window */}

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
    </>
  );
}

export default ChatRoom;
