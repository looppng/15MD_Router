import axios from 'axios';

export type MyInventory = {
	id: number;
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

export const getItemsById = async (id) => {
	try {
		const response = await axios.get(`http://localhost:3002/inventory/${id}`);
		return response.data.items;
	} catch (error) {
		console.error('Error fetching items:', error);
		throw error;
	}
};

export const addItem = async (item: MyInventory) => {
	try {
		await axios.post('http://localhost:3002/inventory', { item } )
	} catch (error) {
		console.error(error);
		throw new Error('Failed to add item');
	}
};

export const removeItem = async (id: number) => {

	await axios.delete(`http://localhost:3002/inventory/${id}`);
};

export const updateItem = async (updatedItem: MyInventory) => {
	await axios.post(`http://localhost:3002/inventory/${updatedItem.id}/edit`, {
		item: updatedItem
	}).catch(error => {
			console.log(error);
		});
}