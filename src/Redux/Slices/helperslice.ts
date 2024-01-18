import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isMenuOpen: false,
};

const helperSlice = createSlice({
	name: 'helper',
	initialState,
	reducers: {
		toggleMenu: (state, action) => {
			state.isMenuOpen = action.payload;
		},
	},
});

export default helperSlice.reducer;
export const { toggleMenu } = helperSlice.actions;
