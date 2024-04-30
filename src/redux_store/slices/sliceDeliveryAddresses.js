
// PARTITION OF APP STATE RESERVED FOR HANDLING DELIVERY ADDRESS DATA AND INSTANCES

// IMPORT FROM REDUX
import { createSlice } from '@reduxjs/toolkit';

// [1] declare the slice reserved for delivery address management
const sliceDeliveryAddresses = createSlice({
    // [2] name the slice 'deliveryAddresses'
    name: 'deliveryAddresses',
    // [3] set the initial state empty
    initialState: [],
    // [4] define the reducers (functions)
    reducers: {
        // [4.1] for assigning the set of delivery addresses
        setDeliveryAddresses: (state, action) => {
            return action.payload;
        },
        // [4.2] for adding a delivery address
        addDeliveryAddress: (state, action) => {
            state.push(action.payload);
        },
        // [4.3] for updating a delivery address
        updateDeliveryAddressById: (state, action) => {
            // [4.3.1] spread (collect) delivery address id and updated version
            const { deliveryAddressId, updatedDeliveryAddress } = action.payload;
            // [4.3.2] declare search index for match per id
            const index = state.findIndex(
                // [4.3.3] compare each id until a match found
                (deliveryAddress) => deliveryAddressId === deliveryAddress.id
            );
            // [4.3.4] register updated delivery address to state if found
            if (index !== -1) {
                state[index] = updatedDeliveryAddress;
            }
        },
        // [4.4] for removing a delivery address
        removeDeliveryAddressById: (state, action) => {
            // [4.4.1] extract id of delivery address to be removed from the state
            const idToRemove = action.payload;
            // [4.4.2] remove said delivery address from array by filtering it
            return state.filter((deliveryAddress) => deliveryAddress.id !== idToRemove);
        },
    },
});

// [5.1] export the reducers (functions) as the 'actions' of the 'slice'
export const { setDeliveryAddresses, addDeliveryAddress, updateDeliveryAddressById, removeDeliveryAddressById } = sliceDeliveryAddresses.actions;

// [5.2] export the reducer as default
export default sliceDeliveryAddresses.reducer;
