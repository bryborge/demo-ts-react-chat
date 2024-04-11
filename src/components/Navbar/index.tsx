import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <b>Demo - TS React Chat</b>
      </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
