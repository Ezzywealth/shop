'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { fetchProductDetails } from '@/Redux/Slices/productslice';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/Redux/Store/store';
import Breadcrumb from '@/components/Nav/BreadCrumbs';
import ImageGallery from '@/components/ProductView/ImageGallery';
import styles from '@/app/styles/productView.module.scss';
import RelatedSection from '@/components/ProductView/RelatedSection';
import DescriptionSection from '@/components/ProductView/DescriptionSection';
import FooterSection from '@/components/Footer/FooterSection';
import RightTopView from '@/components/ProductView/RightTopView';
import RightBottomView from '@/components/ProductView/RightBottomView';
import { ToastContainer, toast } from 'react-toastify';
import { CirclesWithBar } from 'react-loader-spinner';
import useProductReducer from '@/hooks/useProductReducer';

const ProductDetails = () => {
	const { handleFetchProduct, productDetails, productLoading } = useProductReducer();
	const searchParams = useSearchParams();
	const id = searchParams.get('id');

	// a useEffect to fetch the product details when the id changes in the url or when the page loads
	useEffect(() => {
		if (id) {
			handleFetchProduct(id);
		}
	}, [id]);

	if (productLoading) {
		return (
			<section className={styles.products_loading_container}>
				<CirclesWithBar height='100' width='100' color='#b88e2f' outerCircleColor='#b88e2f' innerCircleColor='#b88e2f' barColor='#b88e2f' ariaLabel='circles-with-bar-loading' wrapperStyle={{}} wrapperClass='' visible={true} />
			</section>
		);
	}

	return (
		<div className={styles.productDetails_container}>
			<ToastContainer />
			<div className={styles.breadcrumb_container}>
				<Breadcrumb />
			</div>
			<div className={styles.productView}>
				<div className={styles.productViewLeft}>
					<ImageGallery images={productDetails?.images || []} mainImage={productDetails?.thumbnail || ''} />
				</div>
				<div className={styles.productViewRight}>
					<RightTopView productDetails={productDetails} />
					<RightBottomView productDetails={productDetails} />
				</div>
			</div>
			<hr />
			<DescriptionSection />
			<hr />
			<RelatedSection />
			<FooterSection />
		</div>
	);
};

export default ProductDetails;
