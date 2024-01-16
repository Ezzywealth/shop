export type CartStateSlice = {
	cart: ProductProp[];
	showCartModal: boolean;
};

export type ProductStateSlice = {
	products: ProductProp[];
	productDetails: null | ProductProp;
	filteredProducts: ProductProp[];
	productsLoading: boolean;
	productsErrors: string;
	productLoading: boolean;
	productError: string;
	itemsPerPage: number;
	currentPage: number;
	startCount: number;
	endCount: number;
	totalPages: number;
	pageSize: number;
	noOfItems: number;
};

export type ProductProp = {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: string[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
	quantity: number;
};

export interface PaginationProps {
	currentPage: number;
	totalPages: number;

	totalItems: number;
	onPageChange: (page: number) => void;
}
