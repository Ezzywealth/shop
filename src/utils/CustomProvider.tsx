'use client';
import store from '@/Redux/Store/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

type Props = {
	children: ReactNode;
};

const CustomProvider = ({ children }: Props) => {
	return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
