import React from 'react';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

interface UserItemProps {
  name: string;
}

const UserListItem: React.FC<UserItemProps> = ({ name }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={ name }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default UserListItem;
