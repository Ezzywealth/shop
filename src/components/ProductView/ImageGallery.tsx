// components/ImageGallery.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/productView.module.scss';
import '@/app/styles/globals.scss';
import Image from 'next/image';

interface ImageGalleryProps {
	images: string[];
	mainImage: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, mainImage }) => {
	const [selectedImage, setSelectedImage] = useState(mainImage);
	const [imageGallery, setImageGallery] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const [mainImageLoading, setMainImageLoading] = useState(true);

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
	};

	useEffect(() => {
		setSelectedImage(mainImage);
		setImageGallery([...images] || []);
	}, [mainImage, images]);

	return (
		<div className={styles.imageGallery}>
			<div className={styles.thumbnailContainer}>
				{imageGallery?.map((image, index) => (
					<div key={index} className={styles.thumbnail_container}>
						<Image height={60} width={60} src={image} alt={`Thumbnail ${index + 1}`} onClick={() => handleImageClick(image)} className={` ${loading && 'shimmer'} ${selectedImage === image ? styles.selectedThumbnail : styles.thumbnail}`} onLoadingComplete={() => setLoading(false)} />
					</div>
				))}
			</div>
			<div className={styles.main_image_container}>
				<div className={styles.main_image_container_sm}>
					<Image src={selectedImage || ''} alt='Main Product' layout='fill' className={` ${mainImageLoading && 'shimmer'}`} onLoadingComplete={() => setMainImageLoading(false)} />
				</div>
				<ul>
					{imageGallery.map((image, index) => (
						<li key={index} className={`${styles.main_image_dots} ${selectedImage === image && styles.selected_dot}`} onClick={() => setSelectedImage(image)}></li>
					))}
				</ul>
			</div>
			<div className={styles.main_image_container_lg}>
				<Image src={selectedImage || ''} alt='Main Product' height={400} width={400} className={` ${mainImageLoading && 'shimmer'}`} onLoadingComplete={() => setMainImageLoading(false)} />
			</div>
		</div>
	);
};

export default ImageGallery;
