
// PARTITION OF APP STATE RESERVED FOR HANDLING PAYMENT METHOD DATA AND INSTANCES

// IMPORT FROM REDUX
import { createSlice } from '@reduxjs/toolkit';

// [1] declare the slice reserved for payment method management
const slicePaymentMethods = createSlice({
    // [2] name the slice 'paymentMethods'
    name: 'paymentMethods',
    // [3] set the initial state empty
    initialState: [],
    // [4] define the reducers (functions)
    reducers: {
        // [4.1] for assigning the set of payment methods
        setPaymentMethods: (state, action) => {
            return action.payload;
        },
        // [4.2] for adding a payment method
        addPaymentMethod: (state, action) => {
            state.push(action.payload);
        },
        // [4.3] for updating a payment method
        updatePaymentMethodById: (state, action) => {
            // [4.3.1] spread (collect) payment method id and updated version
            const { paymentMethodId, updatedPaymentMethod } = action.payload;
            // [4.3.2] declare search index for match per id
            const index = state.findIndex(
                // [4.3.3] compare each id until a match found
                (paymentMethod) => paymentMethodId === paymentMethod.id
            );
            // [4.3.4] register updated payment method to state if found
            if (index !== -1) {
                state[index] = updatedPaymentMethod;
            }
        },
        // [4.4] for removing a payment method
        removePaymentMethodById: (state, action) => {
            // [4.4.1] extract id of payment method to be removed from the state
            const idToRemove = action.payload;
            // [4.4.2] remove said payment method from array by filtering it
            return state.filter((paymentMethod) => paymentMethod.id !== idToRemove);
        },
    },
});

// [5.1] export the reducers (functions) as the 'actions' of the 'slice'
export const { setPaymentMethods, addPaymentMethod, updatePaymentMethodById, removePaymentMethodById } = slicePaymentMethods.actions;

// [5.2] export the reducer as default
export default slicePaymentMethods.reducer;
