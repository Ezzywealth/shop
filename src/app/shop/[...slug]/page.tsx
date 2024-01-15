'use client';
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchProductDetails } from '@/Redux/Slices/productslice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import Breadcrumb from '@/components/BreadCrumbs';
const ProductDetails = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { productDetails } = useSelector((state: RootState) => state.product);
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const { slug } = params;

	console.log(slug);

	useEffect(() => {
		dispatch(fetchProductDetails(id));
	}, [id]);

	return (
		<div>
			<Breadcrumb />
			<h2>{id}</h2>
		</div>
	);
};

export default ProductDetails;
