// PARTITION OF APP STATE RESERVED FOR HANDLING PRODUCT CATEGORY DATA AND INSTANCES

// IMPORT FROM REDUX
import { createSlice } from '@reduxjs/toolkit';

// [1] declare the slice reserved for product category management
const sliceProductCategories = createSlice({
    // [2] name the slice 'productCategories'
    name: 'productCategories',
    // [3] set the initial state empty array
    initialState: [],
    // [4] define the reducers (functions)
    reducers: {
        // [4.1] for assigning the set of product categories
        setProductCategories: (state, action) => {
            return action.payload;
        },
        // [4.2] for adding a product category
        addProductCategory: (state, action) => {
            state.push(action.payload);
        },
        // [4.3] for updating a product category by id
        updateProductCategoryById: (state, action) => {
            // [4.3.1] extract category id and updated category from payload
            const { categoryId, updatedCategory } = action.payload;
            // [4.3.2] find index of category with matching id
            const index = state.findIndex(
                (category) => categoryId === category.id
            );
            // [4.3.3] update category if found
            if (index !== -1) {
                state[index] = updatedCategory;
            }
        },
        // [4.4] for removing a product category by id
        removeProductCategoryById: (state, action) => {
            // [4.4.1] extract id of category to be removed from payload
            const idToRemove = action.payload;
            // [4.4.2] remove category from state by filtering it
            return state.filter((category) => category.id !== idToRemove);
        },
    },
});

// [5.1] export the reducers (functions) as the 'actions' of the 'slice'
export const {
    setProductCategories,
    addProductCategory,
    updateProductCategoryById,
    removeProductCategoryById
} = sliceProductCategories.actions;

// [5.2] export the reducer as default
export default sliceProductCategories.reducer;

