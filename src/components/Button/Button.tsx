import style from  './Button.module.css'

type ButtonProps = {
	text: string
	size?: 'large' | 'small'
	onClick?: () => void
	type?: HTMLButtonElement['type']
}
const Button = ({text, onClick, type = 'button', size = 'large'} : ButtonProps) => {
	return (
			<button
					className={`${style.button} ${size === 'small' ? style.small : 'small'}`}
					onClick={onClick}
					type={type}
			>
				{text}
			</button>
	);
};

export default Button;