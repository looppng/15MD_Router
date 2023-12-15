import style from "./FormInventory.module.css";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import {useState} from "react";

const initFormValues = {
	name: '',
	description: '',
	price: '',
	stock: '',
}

export type Item = typeof initFormValues

type FormInventoryProps = {
	onSubmit: (payload: Item) => void
}


const FormInventory = ({onSubmit}: FormInventoryProps) => {

	const [formValues, setFormValues] = useState(initFormValues)

	return (
			<form className={style.form} onSubmit={(e) => {
				e.preventDefault();
				console.log(formValues)
				onSubmit(formValues)
				setFormValues(initFormValues)
			}}>
				<h3 className={style.heading}>Add an item to inventory</h3>
				<Input
						label='Item Name'
						value={formValues.name}
						placeholder='Item name...'
						onChange={(e) => {
							setFormValues({
								...formValues,
								name: e.target.value
							})
						}}
				/>
				<Input
						label='Item Description'
						value={formValues.description}
						placeholder='Item description...'
						onChange={(e) => {
							setFormValues({
								...formValues,
								description: e.target.value
							})
						}}
				/>
				<Input
						label='Item Price'
						type='number'
						value={formValues.price}
						placeholder='Item price...'
						onChange={(e) => {
							setFormValues({
								...formValues,
								price: e.target.value
							})
						}}
				/>
				<Input
						label='Item Stock Units'
						type='number'
						value={formValues.stock}
						placeholder='How many units of item are in stock...'
						onChange={(e) => {
							setFormValues({
								...formValues,
								stock: e.target.value
							})
						}}
				/>
				<div className={style.buttonWrapper}>
					<Button
							text='Add Item'
							type='submit'
					/>
				</div>
			</form>
	);
};

export default FormInventory;