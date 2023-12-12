import { useEffect, useState } from 'react';
import Button from './Button/Button.tsx';

const ItemInventory = () => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3002/inventory')
			.then((response) => response.json())
			.then((data) => setItems(data.results))

			.catch((error) => console.error('Error fetching data:', error));
	}, []);

	return (
		<div className="container">
				<div className="row">
					<div className="col-5 card__wrapper">
						{items.map(({itemName, itemDescription, itemPrice, itemStock}) => (
								<div className="card">
									<h3 className='card__heading'>{itemName}</h3>
									<div className="card__info">
										<span className='card__description'>Description: {itemDescription}</span>
										<span className='card__price'>Price: {itemPrice}</span>
										<span className='card__stock'>In Stock: {itemStock} unit/s</span>
									</div>
									<div className="card__action">
										<Button
												text='Delete'
										/>
									</div>
								</div>
						))}
					</div>
				</div>
			</div>
	);
};

export default ItemInventory;