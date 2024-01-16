'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchProductDetails } from '@/Redux/Slices/productslice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store/store';
import Breadcrumb from '@/components/BreadCrumbs';
import ImageGallery from '@/components/ProductView/ImageGallery';
import styles from '@/app/styles/productView.module.scss';
import RelatedSection from '@/components/ProductView/RelatedSection';
import DescriptionSection from '@/components/ProductView/DescriptionSection';
import FooterSection from '@/components/Footer/FooterSection';
import RightTopView from '@/components/ProductView/RightTopView';
import RightBottomView from '@/components/ProductView/RightBottomView';

const ProductDetails = () => {
	const dispatch = useDispatch();
	const { productDetails, products } = useSelector((state: RootState) => state.product);
	const searchParams = useSearchParams();
	const id = searchParams.get('id');

	useEffect(() => {
		dispatch(fetchProductDetails(id));
	}, [id]);

	return (
		<div className={styles.productDetails_container}>
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
