import React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

interface JoinPageProps {
  handleJoin: () => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ handleJoin }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Join Chat As ...
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
          />
          <Button
            type="button"
            onClick={ handleJoin }
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Join Chat
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default JoinPage;
