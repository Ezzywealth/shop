import Image from 'next/image';
import { useState } from 'react';
type Props = {
	imageSrc: string;
	alt: string;
};
export default function CustomImage({ imageSrc, alt }: Props) {
	const [loading, setLoading] = useState(true);
	return <Image alt={alt} src={imageSrc} width={250} height={200} layout='responsive' sizes='100vw' className={` ${loading ? 'shimmer' : ''}`} onLoadingComplete={() => setLoading(false)} />;
}
