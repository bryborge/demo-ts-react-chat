import { createSlice } from '@reduxjs/toolkit';
// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  id: number;
  fullName: string;
}

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [
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
  ],
  status: 'succeeded', // FIXME: change this to 'idle'
  error: null
};

// In order to go any further with this, I need user dummy data to fetch from somewhere.
// I will use axios to fetch the data from firebase.
// I will then use the data to populate the users slice.

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//   const response = await axios.get<User[]>('https://api.example.com/users');
//   return response.data;
// });

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default usersSlice.reducer;
