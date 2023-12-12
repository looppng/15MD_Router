import Button from "./Button/Button.tsx";
import {useState} from "react";
import '../App.css'

const initFormValues = {
	itemName: '',
	itemDescription: '',
	itemPrice: '',
	itemStock: '',
}

type Item = typeof initFormValues

const CreateItem = () => {

	const [formValues, setFormValues] = useState(initFormValues)
	const [items, setItems] = useState<Item[]>([])

	return (
			<section className="add-item">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<form className="add-item__form" onSubmit={(e) => {
								e.preventDefault();

								setItems([...items, formValues])
								setFormValues(initFormValues)
							}}>
								<h3 className='add-item__heading'>Add an item to inventory</h3>
								<div className='add-item__wrapper'>
									<label htmlFor="itemName" className="add-item__label">Item name</label>
									<input
											type="text"
											id="itemName"
											className="add-item__input"
											placeholder="enter new item name..."
											value={formValues.itemName}
											onChange={(e) => {
												setFormValues({
													...formValues,
													itemName: e.target.value
												})
											}}
									/>
								</div>
								<div className='add-item__wrapper'>
									<label htmlFor="itemDescription" className="add-item__label">Description</label>
									<input
											type="text"
											id="itemDescription"
											className="add-item__input"
											placeholder="little description about item..."
											value={formValues.itemDescription}
											onChange={(e) => {
												setFormValues({
													...formValues,
													itemDescription: e.target.value
												})
											}}
									/>
								</div>
								<div className='add-item__wrapper'>
									<label htmlFor="itemPrice" className="add-item__label">Price</label>
									<input
											type="text"
											id="itemPrice"
											className="add-item__input"
											placeholder="how much this item cost..."
											value={formValues.itemPrice}
											onChange={(e) => {
												setFormValues({
													...formValues,
													itemPrice: e.target.value
												})
											}}
									/>
								</div>
								<div className='add-item__wrapper'>
									<label htmlFor="itemStock" className="add-item__label">In Stock</label>
									<input
											type="text"
											id="itemStock"
											className="add-item__input"
											placeholder="how many items are in stock..."
											value={formValues.itemStock}
											onChange={(e) => {
												setFormValues({
													...formValues,
													itemStock: e.target.value
												})
											}}
									/>
								</div>
								<div className='add-item__button-wrapper'>
									<Button
											text='Add Item'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
	);
};

export default CreateItem;