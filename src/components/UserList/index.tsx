import React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import UserListItem from '../UserListItem';

interface Users {
  id: number;
  fullName: string;
}

const users: Users[] = [
  {
    id: 1,
    fullName: "Joaquin Adams (Me)"
  },
  {
    id: 2,
    fullName: "Lamar Espinoza"
  },
  {
    id: 3,
    fullName: "Phoebe Nguyen"
  },
  {
    id: 4,
    fullName: "Sherri Joyce"
  },
]

const UserList: React.FC = () => {
  return (
    <>
      <h2>Users</h2>

      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Occupants ({ users.length })
          </ListSubheader>
        }
      >
        {users.map((user) => (
          <UserListItem name={ user.fullName } />
        ))}
      </List>
    </>
  );
}

export default UserList;
