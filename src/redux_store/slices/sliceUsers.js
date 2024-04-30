
// PARTITION OF APP STATE RESERVED FOR HANDLING USER DATA AND INSTANCES

// IMPORT FROM REDUX
import { createSlice } from '@reduxjs/toolkit';

// [1] declare the slice reserved for user management
const sliceUsers = createSlice({
    // [2] name the slice 'users'
    name: 'users',
    // [3] set the initial state empty
    initialState: [],
    // [4] define the reducers (functions)
    reducers: {
        // [4.1] for assigning the set of users
        setUsers: (state, action) => {
            return action.payload;
        },
        // [4.2] for adding a user
        addUser: (state, action) => {
            state.push(action.payload);
        },
        // [4.3] for updating a user
        updateUserById: (state, action) => {
            // [4.3.1] spread (collect) user id and updated version
            const { userId, updatedUser } = action.payload;
            // [4.3.2] declare search index for match per id
            const index = state.findIndex(
                // [4.3.3] compare each id until a match found
                (user) => userId === user.id
            );
            // [4.3.4] register updated user to state if found
            if (index !== -1) {
                state[index] = updatedUser;
            }
        },
        // [4.4] for removing a user
        removeUserById: (state, action) => {
            // [4.4.1] extract id of user to be removed from the state
            const idToRemove = action.payload;
            // [4.4.2] remove said user from array by filtering it
            return state.filter((user) => user.id !== idToRemove);
        },
    },
});

// [5.1] export the reducers (functions) as the 'actions' of the 'slice'
export const { setUsers, addUser, updateUserById, removeUserById } = sliceUsers.actions;

// [5.2] export the reducer as default
export default sliceUsers.reducer;
