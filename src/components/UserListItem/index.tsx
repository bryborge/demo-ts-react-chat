import React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

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
