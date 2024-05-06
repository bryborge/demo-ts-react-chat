import React from 'react';
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchUsers } from '../../redux/usersSlice';
import { List, ListSubheader } from '@mui/material';
import UserListItem from '../UserListItem';
import { RootState } from '../../redux/store';

const UserList: React.FC = () => {
  // const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  // const status = useSelector((state: RootState) => state.users.status);
console.log(users)
  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchUsers());
  //   }
  // }, [status, dispatch]);

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
        { users.map((user) => (
          <UserListItem name={ user.fullName } key={user.id} />
        )) }
      </List>
    </>
  );
}

export default UserList;
