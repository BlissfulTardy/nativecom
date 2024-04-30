
// PARTITION OF APP STATE RESERVED FOR HANDLING PRODUCT DATA AND INSTANCES

// IMPORT FROM REDUX
import { createSlice } from '@reduxjs/toolkit';

// [1] declare the slice reserved for product management
const sliceProducts = createSlice(
	{
		// [2] name the slice 'products'
		name:'products',
		// [3] set the initial state empty
		initialState: [],
		// [4] define the reducers (functions)
		reducers:
		{
			// [4.1] for assigning the set of products
			setProducts: (state, action) => {
				return action.payload;
			},
			// [4.2] for adding a product
			addProduct: (state, action) => {
				state.push(action.payload);
			},
			// [4.3] for updating a product
			addProductById: (state, action) => {
				// [4.3.1] spread (collect) product id and updated version
				const {productId, updatedProduct} = action.payload;
				// [4.3.2] declare search index for match per id
				const index = state.findIndex(
					// [4.3.3] compare each id until a match found
					(product) => productId === product.id
				);
				// [4.3.4] register updated product to state if found
				if (index !== -1) {
					state[index] = updatedProduct;
				}
			},
			// [4.4] for removing a product
			removeProductById: (state, action) => {
			// [4.4.1] extract id of product to be removed from the state
				const idToRemove = action.payload;
				// [4.4.2] remove said product from array by filtering it
				return state.filter((product) => product.id !== idToRemove);
			},
		},
	}
);

// [5.1] export the reducers (functions) as the 'actions' of the 'slice'
export const { setProducts, addProduct, updateEntity, removeEntity } = sliceProducts.actions;

// [5.2] export the reducer as default
export default sliceProducts.reducer;