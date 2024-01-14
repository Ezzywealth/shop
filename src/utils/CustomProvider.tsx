'use client';
import store from '@/Redux/Store/store';
import React from 'react';
import { Provider } from 'react-redux';

const CustomProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
