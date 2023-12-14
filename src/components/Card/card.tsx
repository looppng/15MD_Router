import style from './card.module.css'
import Button from "../Button/Button.tsx";
import {Link} from "react-router-dom";
import {useId} from "react";

type CardProps = {
	name: string
	description: string
	price: string
	stock: string
	onDelete: () => void
}

const Card = ({name, description, price, stock, onDelete}: CardProps) => {
	const id = useId()

	return (
			<div className={style.card}>
				<Link to={`/inventory${id}`}><h3 className={style.heading}>{name}</h3></Link>
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
					/>
				</div>
			</div>
	);
};

export default Card;