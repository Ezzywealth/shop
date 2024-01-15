import { create } from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductStateSlice } from '@/interfaces/typings';
import axios from 'axios';

const initialState: ProductStateSlice = {
	products: [],
	productDetails: null,
	filteredProducts: [],
	productsLoading: false,
	productsErrors: '',
	productLoading: false,
	productError: '',
	itemsPerPage: 16,
	currentPage: 1,
	startCount: 0,
	endCount: 16,
	totalPages: 0,
	pageSize: 16,
	noOfItems: 0,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
	const { data } = await axios.get('https://dummyjson.com/products?limit=48');
	console.log(data.products);
	return data.products;
});

export const fetchProductDetails = createAsyncThunk('fetchProductDetails', async (id) => {
	const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
	console.log(data);
	return data;
});

const productSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		buttonPagination: (state, action) => {
			// get the current page from the payload
			const currentPage = action.payload;

			// set the current page to the payload
			state.currentPage = currentPage;
			state.startCount = (currentPage - 1) * state.pageSize;
			state.endCount = state.pageSize + state.startCount <= state.products.length ? currentPage * state.pageSize : state.endCount + (state.products.length - state.endCount);
			// slice the users array to get the users for the current page
			state.filteredProducts = state.products.slice(state.startCount, state.endCount);
		},
	},
	extraReducers: (builders) => {
		builders.addCase(fetchProducts.pending, (state, action) => {
			state.productsLoading = true;
		});
		builders.addCase(fetchProducts.fulfilled, (state, action) => {
			state.productsLoading = false;
			state.products = action.payload;
			state.filteredProducts = action.payload.slice(state.startCount, state.endCount);
			state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
			state.productsErrors = '';
		});
		builders.addCase(fetchProducts.rejected, (state, action) => {
			state.productsLoading = false;
			state.products = [];
			state.productsErrors = '';
		});
		builders.addCase(fetchProductDetails.pending, (state, action) => {
			state.productLoading = true;
		});
		builders.addCase(fetchProductDetails.fulfilled, (state, action) => {
			state.productLoading = false;
			state.productDetails = action.payload;
			state.productError = '';
		});
		builders.addCase(fetchProductDetails.rejected, (state, action) => {
			state.productLoading = false;
			state.productDetails = null;
			state.productError = '';
		});
	},
});

export default productSlice.reducer;
export const { buttonPagination } = productSlice.actions;
