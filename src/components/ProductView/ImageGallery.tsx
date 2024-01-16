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
					<Image height={80} width={80} key={index} src={image} alt={`Thumbnail ${index + 1}`} onClick={() => handleImageClick(image)} className={` ${loading && 'shimmer'} ${selectedImage === image ? styles.selectedThumbnail : styles.thumbnail}`} onLoadingComplete={() => setLoading(false)} />
				))}
			</div>
			<Image src={selectedImage || ''} alt='Main Product' height={400} width={400} layout='responsive' className={` ${mainImageLoading && 'shimmer'}`} onLoadingComplete={() => setMainImageLoading(false)} />
		</div>
	);
};

export default ImageGallery;
