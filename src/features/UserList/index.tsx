import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const UserList: React.FC = () => {
  return (
    <>
      <h2>User List (4)</h2>

      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <b>Chatting as:</b> Joaquin Adams
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Sherri Joyce"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Lamar Espinoza"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Phoebe Nguyen"
          />
        </ListItem>
      </List>
    </>
  );
}

export default UserList;
