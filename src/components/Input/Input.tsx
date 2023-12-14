import style from './Input.module.css'
import {useId} from "react";

type InputProps = {
	label: string;
	value: string;
	placeholder: string;
	required?: boolean;
	type?: HTMLInputElement['type']
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({label, value, placeholder, required = true, type = 'text', onChange}: InputProps) => {
	const id = useId()

	return (
			<div className={style.wrapper}>
				<label htmlFor={id} className={style.label}>
					{label}
				</label>
				<input
					id={id}
					className={style.input}
					type={type}
					placeholder={placeholder}
					required={required}
					value={value}
					onChange={onChange}
				/>
			</div>
	);
};

export default Input;