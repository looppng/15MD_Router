import style from './card.module.css'
import Button from "../Button/Button.tsx";
import {useId} from "react";
import {useNavigate} from "react-router-dom";

type CardProps = {
	id: number
	name: string
	description: string
	price: string
	stock: string
	onDelete: () => void
}

const Card = ({id, name, description, price, stock, onDelete}: CardProps) => {

	const navigate = useNavigate();

	return (
			<div className={style.card}>
				<h3 onClick={() => navigate(`/inventory/${id}`)} className={style.heading}>{name}</h3>
				<div className={style.info}>
					<span>Description: {description}</span>
					<span>Price: {price}</span>
					<span>In Stock: {stock} unit/s</span>
				</div>
				<div className={style.action}>
					<Button
							text='Delete'
							size='small'
							onClick={onDelete}
					/>
					<Button
							text='Edit'
							size='small'
							onClick={ () => navigate(`/inventory/${id}/edit`)}
					/>
				</div>
			</div>
	);
};

export default Card;