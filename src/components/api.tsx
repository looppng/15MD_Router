import axios from 'axios';

export type MyInventory = {
	name: string;
	description: string;
	price: string;
	stock: string;
};

export const getItems = async () => {
	try {
		const response = await axios.get('http://localhost:3002/inventory');
		return response.data.results;
	} catch (error) {
		console.error('Error fetching items:', error);
		throw error;
	}
};

// export const getItemById = useQuery({
// 	queryKey: ["results", id],
// 	queryFn: async () => {
// 		const response = await axios.get(`http://localhost:3002/inventory/${id}`);
// 		return response.data;
// 	},
// });

export const addItem = async (item: MyInventory) => {

	await axios.post('http://localhost:3002/create', { item });
};

export const removeItem = async (id: number) => {

	await axios.delete(`http://localhost:3002/inventory/${id}`);
};